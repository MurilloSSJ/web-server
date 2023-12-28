import { styled } from "@/styles";

export const Header = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '1rem',
    borderBottom: '1px solid $border',
    fontSize: '1rem',
    backgroundColor: '$dark_300',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    lineHeight: '1.5rem',
    variants: {
        align: {
            left: {
                justifyContent: 'flex-start',
            },
            center: {
                justifyContent: 'center',
            },
            right: {
                justifyContent: 'flex-end',
            },
        },
    },
})