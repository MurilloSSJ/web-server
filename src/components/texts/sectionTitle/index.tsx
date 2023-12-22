import { SectionTitleStyled } from "./styles";

interface SectionTitleProps {
    text: string;
    gradient?: 'primary';
}
export const SectionTitle = ({ text, gradient }: SectionTitleProps) => {
    return (
        <SectionTitleStyled gradient={gradient ? gradient : false}>{text}</SectionTitleStyled>
    )
}