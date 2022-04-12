import React, { Suspense } from "react"
import { Navigate, useNavigate } from "react-router"
import { useFipe } from "../../Hooks/useFipe"
import { ContainerBox, SeachrForm } from "./style"


export const SearchBox = () => {

    const { state, getModelById, getModelByYear, setCodeByYear } = useFipe()
    



    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const code = event.target.value

        switch (event.target.name) {
            case "carBrand": return getModelById(code);
            case "carModel": return getModelByYear(code)
            case "carYear": return setCodeByYear(code)
        }

    }
    const navigate = useNavigate();
    
    const handleForm = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('car/')
    }

    const { codeBrand, codeModel, codeYear, brand, modelByBrands, modelByYear } = state



    return (
        <>
            <ContainerBox>
                <h1>Tabela Fipe</h1>
                <span>A Tabela Fipe expressa preços médios de veículos no mercado nacional, servindo apenas como um parâmetro para negociações ou avaliações</span>
                <br />
                <SeachrForm onSubmit={handleForm}>
                    <span>Qual a marca do seu carro?</span>
                    <Suspense fallback={<h6>carregando...</h6>} >
                        <select name="carBrand" id="carBrand" onChange={handleSelect} >
                            <option value="0" >Escolha uma marca!</option>
                            {brand.map((brand) => {
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
                            {modelByBrands.map((model) => {
                                return (
                                    <option key={model.codigo} value={model.codigo} >{model.nome}</option>
                                )
                            })}
                        </select>
                    </Suspense>

                    <span>Qual o ano do seu carro?</span>
                    <Suspense fallback={<h6>carregando...</h6>} >
                        <select name="carYear" id="carYear" onChange={handleSelect} >
                            <option value="0" >Escolha seu modelo!</option>
                            {modelByYear.map((modelYear) => {
                                return (
                                    <option
                                        key={modelYear.codigo}
                                        value={modelYear.codigo}
                                    >
                                        {modelYear.nome}
                                    </option>
                                )
                            })}
                        </select>
                    </Suspense>

                    <button disabled={(codeBrand && codeModel && codeYear) ? false : true}>
                        Mostar dados do carro
                    </button>



                </SeachrForm>

            </ContainerBox>
        </>
    )

}