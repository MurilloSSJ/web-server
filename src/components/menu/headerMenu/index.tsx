import { FlexContainer } from "@/components/containers/flexContainer"
import Logo from '@/assets/logo.png'
import { ButtonDocs } from "./buttonDocs";
import Image from "next/image";
import { GridContainerStyled } from "@/components/containers/gridContainer/styles";


export const HeaderMenu = () => {
    return (
        <GridContainerStyled>
            <FlexContainer paddingX={50} paddingY={50}>
                <Image src={Logo} alt="Logo For tool" width={80} />
            </FlexContainer>
            <ButtonDocs />
        </GridContainerStyled>
    )
}