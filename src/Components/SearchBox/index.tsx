import { ContainerBox, SeachrForm } from "./style"


export const SearchBox = () => {

    return(
        <>
        <ContainerBox>
            <h1>Tabela Fipe</h1>
            <span>A Tabela Fipe expressa preços médios de veículos no mercado nacional, servindo apenas como um parâmetro para negociações ou avaliações</span>
            <br />
            <SeachrForm>
                <span>Qual a marca do seu carro?</span>
                <select name="carBrand" id="carBrand" >
                    <option value="0">valor</option>
                    <option value="0">valor</option>
                    <option value="0">valor</option>
                    <option value="0">valor</option>
                </select>
                <span>Qual modelo do seu carro?</span>
                <select name="carBrand" id="carBrand" disabled >
                    <option value="0">aguardando...</option>
                    <option value="0">valor</option>
                    <option value="0">valor</option>
                    <option value="0">valor</option>
                </select>
                <span>Qual o ano do seu carro?</span>
                <select name="carBrand" id="carBrand" disabled >
                    <option value="0">aguardando...</option>
                    <option value="0">valor</option>
                    <option value="0">valor</option>
                    <option value="0">valor</option>
                </select>
                <button> Mostar dados </button>
        
               

            </SeachrForm>
           
        </ContainerBox>
        </>
    )

}