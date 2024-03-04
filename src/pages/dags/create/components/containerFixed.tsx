import ReactFlow, { Background, BackgroundVariant, Controls } from "reactflow"
import { ContainerFixedStyled } from "../styles"
import { FaArrowRight } from "react-icons/fa"
import { FlexContainer } from "@/components/containers/flexContainer"

interface ContainerFixedProps {
    children: React.ReactNode;
    text: string;
}

export const ContainerFixed = ({ children, text }: ContainerFixedProps) => {
    return (
        <ContainerFixedStyled>
            <FlexContainer gapX={10} alignItems="center" justifyContent="center">
                <span>{text}</span>
                <FaArrowRight size={15} />
            </FlexContainer>
            {children}
        </ContainerFixedStyled>
    )
}