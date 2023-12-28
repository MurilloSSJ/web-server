import { styled } from '@/styles'

export const BodyStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderBottom: '1px solid $border',
    backgroundColor: '$dark_300',
    color: 'white',
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
export const CellStyled = styled('div', {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    letterSpacing: '0.1rem',
    lineHeight: '1.5rem',
    backgroundColor: '$dark_500',
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
    '&:nth-child(2n)': {
        backgroundColor: '$dark_300',
    },
})

export const StatusStyled = styled('span', {
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    variants: {
        status: {
            true: {
                backgroundColor: '$green_300',
            },
            false: {
                backgroundColor: '$red',
            },
        },
    },
})