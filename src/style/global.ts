import { createGlobalStyle } from "styled-components";
import bgcar from '../Assets/image/bg-car.jpg'

export const GlobalStyle = createGlobalStyle`
:root {
    // background
    --background: #000;
    --background-car: ${bgcar};
    --background-box: #4A6273;
    
    //text
    --title: #000;
    --title-body: #FFF;
    --text: #aaa;


    // buttons

    --bg-button: #6666ff;
    
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
      -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, select{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

button{
    cursor: pointer;
}
[disabled]{
    cursor: not-allowed;
    opacity: 0.6;
}

h1 , h2 , h3 , h4 , h5 , h6, strong{
    font-weight: 600;
}


  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
  }

`;

