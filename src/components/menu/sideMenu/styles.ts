import { styled } from "@/styles";

export const MenuContainer = styled('div', {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    overflow: 'hidden',
    zIndex: '1000',
    flexDirection: 'column',
    height: '100vh',
    width: 'fit-content',
    backgroundColor: '$dark_300',
    padding: '20px',
    top: '0',
})

export const ContainerOption = styled('ul', {
    margin: '3rem 1rem 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    listStyle: 'none',
})

export const MenuItem = styled('li', {
    display: 'flex',
    cursor: 'pointer',
    paddingBottom: '.5rem',
    'transition-duration': '300ms',
    '-webkit-transition': 'all 300ms ease',
    '-moz-transition': 'all 300ms ease',
    '-o-transition': 'all 300ms ease',
    '-ms-transition': 'all 300ms ease',
    transition: 'all 300ms ease',

    '&:hover': {
        transform: 'scale(1.1)',
        svg: {
            transition: 'all 1000ms ease',
            color: '$green_100',
        },
    },
    '&.active': {
        transform: 'scale(1.1)',
        svg: {
            color: '$green_300',
        },
    },
    svg: {
        transition: 'all 1000ms ease',
        color: '$white',
    },
})