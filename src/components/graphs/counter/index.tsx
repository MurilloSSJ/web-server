import { IconType } from "react-icons"
import { TextCountWrapper } from "./styles"
import { FlexContainer } from "@/components/containers/flexContainer"
import { WrapperContainer } from "@/components/containers/wrapperContainer/styles"

interface CounterGraphProps {
    Icon: IconType
    counter: number
}

export const CounterGraph = ({ Icon, counter }: CounterGraphProps) => {
    return (
        <WrapperContainer>
            <FlexContainer>
                <Icon size={40} />
            </FlexContainer>
            <TextCountWrapper>{counter}</TextCountWrapper>
        </WrapperContainer>
    )
}