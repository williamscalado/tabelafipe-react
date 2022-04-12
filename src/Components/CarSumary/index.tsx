import React from "react"
import { Container, ContentMain, SumaryCar, ImgCar } from "./style"
import nocar from '../../Assets/image/no-car.png'
import { useFipe } from "../../Hooks/useFipe"
import { useNavigate } from "react-router-dom"

export const CarSumary = (): JSX.Element => {
    const { state, resetState } = useFipe()
    const { carSumary } = state
    const navigate = useNavigate();

    return (
        <Container>
            <ContentMain>
                <h2>Dados do seu Carro!</h2>
                <ImgCar>
                    <img src={nocar} alt="No car!" />
                </ImgCar>

                <SumaryCar>
                    <ul>
                        <li> <span>Marca:</span>  {carSumary.Marca} </li>
                        <li><span>Modelo: </span>{carSumary.Modelo} </li>
                        <li><span>Ano Modelo: </span>{carSumary.AnoModelo} </li>
                        <li><span>Combustível: </span>{carSumary.Combustivel}</li>
                        <li><span>Codigo Fipe: </span>{carSumary.CodigoFipe} </li>
                        <li><span>Mes de referência: </span>{carSumary.MesReferencia} </li>
                        <li><span>Valor: </span>{carSumary.Valor} </li>
                    </ul>
                </SumaryCar>
                <button onClick={()=>{
                    resetState()
                    navigate('/')
                }}>Nova pesquisa</button>

            </ContentMain>
        </Container>
    )
} 