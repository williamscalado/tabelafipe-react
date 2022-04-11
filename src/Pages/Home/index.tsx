import React from "react";
import { SearchBox } from "../../Components/SearchBox";
import { ContainerHome } from "./style";

export const Home = () => {
    return(
        <>
            <ContainerHome>            
                <SearchBox />
            </ContainerHome>
        </>
    )
}