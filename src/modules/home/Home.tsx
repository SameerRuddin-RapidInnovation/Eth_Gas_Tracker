import React from 'react'
import { FlexCol } from '../../styles/styled'
import { Heading } from './style'
import { useInterval } from '../../shared/hooks/useInterval'
import axios from 'axios'

const baseUrl = 'https://mainnet.infura.io/v3/ebc4e838f3a8434a8b671786085ab526'

const data = JSON.stringify({
  jsonrpc: '2.0',
  method: 'eth_feeHistory',
  params: ['0x20', 'latest', []],
  id: 1,
})

const config = {
  method: 'post',
  url: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
}

export const Home: React.FC = () => {
  const [feeHistory, setFeeHistory] = React.useState(null)

  useInterval(() => {
    const getFeeHistory = async () => {
      // Extract fee history
      const response = await axios(config)
      let history = response['data']['result']

      // Convert base fee to Gwei
      history['baseFeePerGas'] = history['baseFeePerGas'].map((x) => (parseInt(x) / 10 ** 9).toFixed(2))

      // Convert block to decimal
      history['oldestBlock'] = parseInt(history['oldestBlock'])

      // Truncate decimals of gas used and convert to percentage
      history['gasUsedRatio'] = history['gasUsedRatio'].map((x) => (x * 100).toFixed(2))

      // Get block range
      let blockRange = []
      for (let i = 0; i < 20; i++) blockRange.push(history['oldestBlock'] + i)

      // Create a 2D array consisting of all the information received from the API
      let formattedHistory = [blockRange, history['baseFeePerGas'].slice(0, 20), history['gasUsedRatio']]

      // Transpose the array
      // This is done so we can populate HTML tables more easily
      const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]))
      formattedHistory = transpose(formattedHistory)

      setFeeHistory(formattedHistory)
      console.log(formattedHistory)
    }

    // Call function every 15 seconds
    getFeeHistory()
  }, 1000 * 15)
  return (
    <div className="App">
      <FlexCol>
        <Heading>Ethereum Gas Tracker</Heading>
      </FlexCol>
      {feeHistory ? (
        <table>
          <thead>
            <tr>
              <th>Block Number</th>
              <th>Base Fee (in Gwei)</th>
              <th>Gas Used</th>
            </tr>
          </thead>
          <tbody>
            {feeHistory.map((row) => {
              return (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}%</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <FlexCol>
          <div className="spinner"></div>
        </FlexCol>
      )}
    </div>
  )
}
