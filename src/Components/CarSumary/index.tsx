import React from "react"
import { Container, ContentMain, SumaryCar, ImgCar } from "./style"
import nocar from '../../Assets/image/no-car.png'

export const CarSumary = (): JSX.Element => {
    return (
        <Container>
            <ContentMain>
                <h2>Dados do seu Carro!</h2>
                <ImgCar>
                    <img src={nocar} alt="No car photo!" />
                </ImgCar>

                <SumaryCar>
                    <ul>
                        <li>Marca: </li>
                        <li>Modelo: </li>
                        <li>AnoModelo: </li>
                        <li>Combustivel: </li>
                        <li>CodigoFipe: </li>
                        <li>MesReferencia: </li>
                    </ul>
                </SumaryCar>
                <button>Nova pesquisa</button>

            </ContentMain>
        </Container>
    )
} 