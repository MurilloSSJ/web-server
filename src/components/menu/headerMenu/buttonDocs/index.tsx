import { FlexContainer } from "@/components/containers/flexContainer"
import { FaArrowRight } from "react-icons/fa"
import { TextDocsStyled } from "./styles"


export const ButtonDocs = () => {
    return (
        <FlexContainer alignItems="center" justifyContent="end" paddingX={50} paddingY={50} width="100%">
            <TextDocsStyled>View Docs</TextDocsStyled>
            <FaArrowRight
                style={{
                    color: '#0AFF6C',
                }}
            />
        </FlexContainer>
    )
}