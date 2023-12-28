import { FlexContainer } from "@/components/containers/flexContainer"
import { GraphLineHeaderStyled, GraphTitleStyled } from "./styles"

interface GraphHeaderProps {
    description?: string
    title: string
}

export const GraphHeader = ({ title, description }: GraphHeaderProps) => {
    return (
        <FlexContainer alignItems="center" justifyContent="center" direction="col" paddingY={30}>
            <FlexContainer direction="col" paddingX={30} alignItems="center" paddingBottom={20}>
                <GraphTitleStyled>{title}</GraphTitleStyled>
                {description && <GraphTitleStyled>{description}</GraphTitleStyled>}
            </FlexContainer>
            <GraphLineHeaderStyled></GraphLineHeaderStyled>
        </FlexContainer>
    )
}