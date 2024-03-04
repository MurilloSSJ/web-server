import { styled } from "@/styles";

export const WrapperContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    height: '100%',
    color: '$white',
    backgroundColor: '$dark_200',
    borderRadius: '.25rem',
    gapColumn: '10px',
    variants: {
        padding: {
            true: {
                padding: '30px',
            },
            false: {
                padding: '0px',
            }
        }
    },
    defaultVariants: {
        padding: true
    }
})