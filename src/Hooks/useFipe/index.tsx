import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Api } from "../../Services/Api";

interface IBrands{
 nome: string,
 codigo: string   
}

interface IModelCar {
    nome: string,
    codigo: string 
}
interface IModelByYear {
    nome: string,
    codigo: string 
}
interface ICarSumary{
    Valor: string,
    Marca: string,
    Modelo: string,
    AnoModelo: number,
    Combustivel: string,
    CodigoFipe: string,
    MesReferencia: string,
    TipoVeiculo: number,
    SiglaCombustivel: string
}



/*

API

https://parallelum.com.br/fipe/api/v1/carros/marcas
https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos
https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos
https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3

*/

interface IFipeProviderProps {
    children: ReactNode
}


interface IState {
    brand: IBrands[],
    modelByBrands: IModelCar[],
    modelByYear: IModelByYear[],
    codeBrand: number,
    codeModel: number,
    codeYear: number 
}

const initialState: IState = {
    brand: [],
    codeBrand: 0,
    modelByBrands: [],
    codeModel: 0,
    modelByYear: [],
    codeYear: 0
}

interface IFipeContext {
    state : IState,
    getModelById: (codigo: string) =>  Promise<void>,
    getModelByYear: (codigo: string) => Promise<void>,
    //getCarSumary: (codigo: string) => Promise<ICarSumary>
}

const fipeContext = createContext<IFipeContext>(
    {} as IFipeContext
)

export const FipeProvider = ({children}: IFipeProviderProps) => {

    const [state, setState ] = useState(initialState)

    useEffect(()=>{
        if(state.brand){
            getAllBrand() 
        }
    }, [])

    const getAllBrand = async () =>{
        const response = await Api.get('/marcas')

        setState({...state, brand: response.data}) 

    }
    const getModelById = async (codigo: string) => {

        const response = await Api.get(`/marcas/${codigo}/modelos`)
        setState({...state, modelByBrands: response.data.modelos, codeBrand: +codigo})

    } 


    const getModelByYear = async (codigo: string) => {

        const { codeBrand } = state

        const response = await Api.get(`/marcas/${codeBrand}/modelos/${codigo}/anos`)

        setState({...state, modelByYear: response.data, codeModel: +codigo  })

    } 
  


return (
    <fipeContext.Provider value={{state , getModelById, getModelByYear}}>
        {children}
    </fipeContext.Provider>
)

}

export function useFipe(){
    const context = useContext(fipeContext)

    return context
}