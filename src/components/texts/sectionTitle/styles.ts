import { styled } from "@/styles";

export const SectionTitleStyled = styled('h2', {
    color: "$white",
    fontFamily: 'Inter',
    fontWeight: 700,
    variants: {
        gradient: {
            primary: {
                background: '$principal_gradient',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent'
            },
            false: {

            }
        }
    }
})