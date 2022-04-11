import styled from "styled-components";


export const ContainerBox = styled.div`
margin: auto;
width: 600px;
padding: 1rem 2rem;
background-color: #fff;
border-radius: 1rem;
color: var(--text);

    span {
            font-weight: 400;
            font-size: 0.8rem;
        
    }

    h1{
            color: var(--title);
    }
`;

export const SeachrForm = styled.form`
width: 100%;
margin-top: 1rem;

    span{
        font-size: 1.1rem;
        font-weight: 500;
    }

    select {
        width: 100%;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 1rem;
    }
   
    button{
        margin: 1rem 0;
        background-color: var(--bg-button);
        color: #FFF;
        padding: 1rem;
        border: 0;
        border-radius: 0.5rem;
        transition: filter 0.3s;
       
    &:hover{
        filter: brightness(0.9);
    }
    }


`