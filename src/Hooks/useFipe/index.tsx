import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Api } from "../../Services/Api";

interface IBrands {
    nome: string,
    codigo: string
}

interface IModelCar extends IBrands{}
interface IModelByYear extends IBrands{}
interface ICarSumary {
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

interface IFipeProviderProps {
    children: ReactNode
}


interface IState {
    brand: IBrands[],
    modelByBrands: IModelCar[],
    modelByYear: IModelByYear[],
    codeBrand: number,
    codeModel: number,
    codeYear: string,
    carSumary: ICarSumary
}

const initialState: IState = {
    brand: [],
    codeBrand: 0,
    modelByBrands: [],
    codeModel: 0,
    modelByYear: [],
    codeYear: "",
    carSumary: {} as ICarSumary
}

interface IFipeContext {
    state: IState,
    getModelById: (codigo: string) => Promise<void>,
    getModelByYear: (codigo: string) => Promise<void>,
    setCodeByYear: (codigo: string) => void
    resetState: () => void
}

const fipeContext = createContext<IFipeContext>(
    {} as IFipeContext
)

export const FipeProvider = ({ children }: IFipeProviderProps) => {

    const [state, setState] = useState(initialState)

    useEffect(() => {
        if (state.brand) {
            getAllBrand()
        }
    }, [])

    const getAllBrand = async () => {
        const response = await Api.get('/marcas')
        setState({ ...state, brand: response.data })
    }

    const getModelById = async (codigo: string) => {

        try {
            const response = await Api.get(`/marcas/${codigo}/modelos`)
            setState({ ...state, modelByBrands: response.data.modelos, codeBrand: +codigo })
        } catch (error) {
            
        }
    }
    const getModelByYear = async (codigo: string) => {

        try {
            const { codeBrand } = state
            const response = await Api.get(`/marcas/${codeBrand}/modelos/${codigo}/anos`)
            setState({ ...state, modelByYear: response.data, codeModel: +codigo })
        } catch (error) {
            
        }
    }

    const setCodeByYear = async (codigo: string) => {
        try {
            const { codeBrand , codeModel } = state
            const response = await Api.get(`/marcas/${codeBrand}/modelos/${codeModel}/anos/${codigo}`)

            setState({ ...state,  codeYear: codigo,  carSumary: response.data })
        } catch (error) {
            
        }
    }

    const resetState = () =>{
        setState({...initialState , brand: state.brand })
    }
    
    return (
        <fipeContext.Provider value={{ state, getModelById, getModelByYear, setCodeByYear,  resetState }}>
            {children}
        </fipeContext.Provider>
    )

}

export function useFipe() {
    const context = useContext(fipeContext)
    return context
}
