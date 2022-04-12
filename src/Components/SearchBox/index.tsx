import React, { Suspense } from "react"
import { useFipe } from "../../Hooks/useFipe"
import { ContainerBox, SeachrForm } from "./style"


export const SearchBox = () => {

    const { state, getModelById, getModelByYear } = useFipe()

    const fipeData = {
        brands: state.brand,
        modelByBrands: state.modelByBrands,
        yearByModel: state.modelByYear
    }

    type carOptions = {
        [key: string]: Promise<void>
    }
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const code = event.target.value
        
        switch (event.target.name) {
            case "carBrand": return getModelById(code);
            case "carModel": return getModelByYear(code)
        }

    }

    console.log(state)

    return (
        <>
            <ContainerBox>
                <h1>Tabela Fipe</h1>
                <span>A Tabela Fipe expressa preços médios de veículos no mercado nacional, servindo apenas como um parâmetro para negociações ou avaliações</span>
                <br />
                <SeachrForm>
                    <span>Qual a marca do seu carro?</span>
                    <Suspense fallback={<h6>carregando...</h6>} >
                        <select name="carBrand" id="carBrand" onChange={handleSelect} >
                            <option value="0" >Escolha uma marca!</option>
                            {fipeData.brands.map((brand) => {
                                return (
                                    <option key={brand.codigo} value={brand.codigo} >{brand.nome}</option>
                                )
                            })}
                        </select>
                    </Suspense>
                    <span>Qual modelo do seu carro?</span>
                    <Suspense fallback={<h6>carregando...</h6>} >
                        <select name="carModel" id="carModel" onChange={handleSelect} >
                            <option value="0" >Escolha seu modelo!</option>
                            {fipeData.modelByBrands.map((model) => {
                                return (
                                    <option key={model.codigo} value={model.codigo} >{model.nome}</option>
                                )
                            })}
                        </select>
                    </Suspense>

                    <span>Qual o ano do seu carro?</span>
                    <Suspense fallback={<h6>carregando...</h6>} >
                        <select name="carYear" id="carYear" >
                            <option value="0" >Escolha seu modelo!</option>
                            {fipeData.yearByModel.map((modelYear) => {
                                return (
                                    <option key={modelYear.codigo} value={modelYear.codigo} >{modelYear.nome}</option>
                                )
                            })}
                        </select>
                    </Suspense>
                    <button> Mostar dados do carro</button>



                </SeachrForm>

            </ContainerBox>
        </>
    )

}