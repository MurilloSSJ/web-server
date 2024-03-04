import { styled } from "@/styles"
export const AddButtonWrapper = styled('span', {
    width: '50px',
    height: '50px',
    fontSize: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    background: '$principal_gradient',
    transition: 'all 300ms ease',
    variants: {
        position: {
            relative: {
                position: 'relative',
            },
            absolute: {
                position: 'absolute',
            }
        }
    },
    "&:hover": {
        cursor: 'pointer',
        scale: 1.2
    }
})