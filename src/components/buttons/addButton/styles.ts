import { styled } from "@/styles"
export const AddButtonWrapper = styled('span', {
    width: '50px',
    height: '50px',
    fontSize: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    background: '$green_gradient',
    variants: {
        position: {
            relative: {
                position: 'relative',
            },
            absolute: {
                position: 'absolute',
            }
        }
    }
})