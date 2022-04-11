import { createGlobalStyle } from "styled-components";
import bgcar from '../Assets/image/bg-car.jpg'

export const GlobalStyle = createGlobalStyle`
:root {
    // background
    --background: #000;
    --background-car: ${bgcar};
    --background-box: #4A6273;
    
    //text
    --title-body: #FFF;
    --text: #9CB8B8;


    // buttons

    --bg-button: #AB2546;

}

 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
      background: url(${bgcar});
      font-size: 16px;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
  }

`;

