import { ReactNode } from "react";
import { FullContainerStyled } from "./styles";

interface FullContainerProps {
    children: ReactNode;
}

export const FullContainer = ({ children }: FullContainerProps) => {
    return (
        <FullContainerStyled>
            {children}
        </FullContainerStyled>
    )
}