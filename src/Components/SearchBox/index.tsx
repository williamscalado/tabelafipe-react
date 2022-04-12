import React, { Suspense } from "react"
import {  useFipe } from "../../Hooks/useFipe"
import { ContainerBox, SeachrForm } from "./style"


export const SearchBox = () => {
    const { state, getModelById , getModelByYear } = useFipe()

    const brands = state.brand
    const modelByBrands = state.modelByBrands
    const yearByModel = state.modelByYear

    const handleSelectBrand = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const codeBrand = event.target.value
        getModelById(codeBrand)       
    }
    const handleSelectModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const codeModel = event.target.value
        getModelByYear(codeModel)       
    }
    
    return (
        <>
            <ContainerBox>
                <h1>Tabela Fipe</h1>
                <span>A Tabela Fipe expressa preços médios de veículos no mercado nacional, servindo apenas como um parâmetro para negociações ou avaliações</span>
                <br />
                <SeachrForm>
                    <span>Qual a marca do seu carro?</span>
                    <Suspense fallback={<h6>carregando...</h6>} >
                        <select name="carBrand"  onChange={handleSelectBrand} >
                        <option value="0" >Escolha uma marca!</option>
                            {brands.map((brand) => {
                                return (
                                    <option key={brand.codigo} value={brand.codigo} >{brand.nome}</option>
                                )
                            })}
                        </select>
                    </Suspense>
                    <span>Qual modelo do seu carro?</span>
                    <Suspense fallback={<h6>carregando...</h6>} >                   
                    <select name="carModel" id="carModel" onChange={handleSelectModel} >                        
                        <option value="0" >Escolha seu modelo!</option>
                            {modelByBrands.map((model) => {
                                return (
                                    <option key={model.codigo} value={model.codigo} >{model.nome}</option>
                                )
                            })}
                        </select>
                    </Suspense>
                   
                    <span>Qual o ano do seu carro?</span>
                    <Suspense fallback={<h6>carregando...</h6>} >                   
                    <select name="carModel" id="carModel" >                        
                        <option value="0" >Escolha seu modelo!</option>
                            {yearByModel.map((modelYear) => {
                                return (
                                    <option key={modelYear.codigo} value={modelYear.codigo} >{modelYear.nome}</option>
                                )
                            })}
                        </select>
                    </Suspense>
                    <button> Mostar dados </button>



                </SeachrForm>

            </ContainerBox>
        </>
    )

}