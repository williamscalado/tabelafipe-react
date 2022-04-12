import styled from "styled-components";

export const Container = styled.div`
margin: auto;
width: 850px;

border-radius: 1rem;
background-color: #FFF;
padding: 2rem;

`;

export const ContentMain = styled.div`
width:100%;
height: 100%;

    h2{
    padding: 0.5rem;
    }
    button{
        padding: 0.8rem;
        background: var(--bg-button);
        border-radius: 0.5rem;
        border: 0;
        color: #FFF;
    }
`


export const SumaryCar = styled.div`
    padding: 1rem;
    width: 70%;  
    display: flex;
    padding: 0.5rem;


    ul{
        li{
            list-style-type: none;
            padding: 0.2rem;
            span{
                font-weight: 600;
            }
        }
    }

`

export const  ImgCar = styled.div`

    
    float: left;
    width: 30%;
    padding: 1rem;
    height: auto;

    img{
        width: 200px;
    }

   

`