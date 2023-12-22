import { styled } from "@/styles";
import { IconType } from "react-icons";


export const IconStyled = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    variants: {
        size: {
            small: {
                width: '1.5rem',
                height: '1.5rem'
            },
            medium: {
                width: '2rem',
                height: '2rem'
            },
            large: {
                width: '3rem',
                height: '3rem'
            }
        },
    },
    defaultVariants: {
        size: 'medium',
    }
});