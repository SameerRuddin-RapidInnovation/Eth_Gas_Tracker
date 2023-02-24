import { createGlobalStyle, ThemeProps, css } from 'styled-components'
import { fontSizes, gapSizes, screenSizes, Theme } from './theme'
import NunitoSans from '../assets/fonts/NunitoSans/NunitoSans-Regular.ttf'
import NunitoSansBlack from '../assets/fonts/NunitoSans/NunitoSans-Black.ttf'
import NunitoSansLight from '../assets/fonts/NunitoSans/NunitoSans-Light.ttf'
import NunitoSansBold from '../assets/fonts/NunitoSans/NunitoSans-Bold.ttf'
import NunitoSansExtraBold from '../assets/fonts/NunitoSans/NunitoSans-ExtraBold.ttf'
import NunitoSansSemiBold from '../assets/fonts/NunitoSans/NunitoSans-SemiBold.ttf'
import { rgba } from 'polished'

export const LinkStyle = css`
  color: ${(props) => props.theme.accent};
  cursor: pointer;
`

export const GlobalStyle = createGlobalStyle`
  :root{
    transition: margin 300ms ease-in-out;
    --pageMargin: 80px;
    @media (max-width: ${screenSizes.L}px) {
      --pageMargin: 40px;
    }
    @media (max-width: ${screenSizes.M}px) {
      --pageMargin: 20px;
    }
  }
  @font-face {
    font-family: NunitoSans;
    src: url(${NunitoSans});
  } 
  @font-face {
    font-family: NunitoSansSemiBold;
    src: url(${NunitoSansSemiBold});
  } 
  @font-face {
    font-family: NunitoSansBlack;
    src: url(${NunitoSansBlack});
  }
  @font-face {
    font-family: NunitoSansBold;
    src: url(${NunitoSansBold});
  }
  @font-face {
    font-family: NunitoSansExtraBold;
    src: url(${NunitoSansExtraBold});
  }
  @font-face {
    font-family: NunitoSansLight;
    src: url(${NunitoSansLight});
  }
  h1,h2,h3,h4{
    margin: 0;
  }
  h1 {
    font-family: 'NunitoSans';
    font-size: ${fontSizes.XXL};
  }
  h2 {
    font-family: 'NunitoSans';
    font-size: ${fontSizes.XL};
  }
  h3 {
    font-family: 'NunitoSans';
    font-size: ${fontSizes.L};
  }
  h4 {
    font-family: 'NunitoSansSemiBold';
    font-size: ${fontSizes.M};
  }
  table {
  border-collapse: collapse;
  margin: 20px auto;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  width: 90%;
}

thead {
  background: #FF5833;
  color: white;
  padding: 10px;
}

th {
  font-size: 18px;
  padding: 15px;
  
}

tbody > tr {
  border-top: 1px solid #fff; 
  border-bottom: 1px solid #fff;
  margin: 0px;
  padding: 15px;
}

td {
  padding: 6px;
  color: #fff;
}

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.secondary};
  }
  html,
  body {
    font-size: 16px;
    height: 100%;
    scroll-behavior: smooth;
    width: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${(props: ThemeProps<Theme>) => props.theme.secondary};
  }
  *::-webkit-scrollbar {
    width: 12px;
    background-color: ${rgba(81, 111, 119, 0.101961)};
    border-radius: 4px;
  }
  *::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    background-color: #9CA6AD;
    border-radius: 20px;
    background-clip: content-box;
  }
  #root{
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    max-width: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: NunitoSans;
  }
  a{
    font-family: 'NunitoSansSemiBold';
    text-decoration: none;
    color: ${(props: ThemeProps<Theme>) => props.theme.white};
  }
  label {
    font-size: ${fontSizes.XS}
    position: relative;
    color: ${(props) => props.theme.label};
  }
  input:disabled ~ label{
   color: red;
  }
  input[type="checkbox"] {
  -webkit-appearance: radio;
  -moz-appearance: radio;
  -ms-appearance: radio; 
  }
  
  button {
    font-size: 16px;
    margin: 0;
    padding: 8px 12px;
  }
  hr {
    background-color: ${(props) => rgba(props.theme.white, 0.2)};
    border: 0;
  }
  a {
    ${LinkStyle};
  }
  a.disabled {
    pointer-events: none;
  }
  svg{
    overflow: visible;
    + span {
      margin-left: ${gapSizes.S};
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  .spinner {
   width: 66px;
   height: 66px;
   border-radius: 50%;
   padding: 1.1px;
   background: conic-gradient(#0000 10%,#791ec3) content-box;
   -webkit-mask: repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg),
        radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 calc(100% - 9px));
   -webkit-mask-composite: destination-in;
   mask-composite: intersect;
   animation: spinner-d55elj 1s infinite steps(10);
}

@keyframes spinner-d55elj {
   to {
      transform: rotate(1turn);
   }
}
`
