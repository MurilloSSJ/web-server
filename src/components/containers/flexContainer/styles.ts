import { styled } from "@/styles";

export const FlexContainerStyled = styled('div', {
    display: 'flex',
    rowGap: '1rem',
    columnGap: '1rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    '@media only screen and (max-width: 768px)': {
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
    },
    variants: {
        direction: {
            col: {
                flexDirection: 'column'
            },
            row: {
                flexDirection: 'row'
            },
            rowReverse: {
                flexDirection: 'row-reverse'
            },
            colReverse: {
                flexDirection: 'column-reverse'
            }
        },
        alignItems: {
            center: {
                alignItems: 'center'
            },
            start: {
                alignItems: 'flex-start'
            },
            end: {
                alignItems: 'flex-end'
            },
            stretch: {
                alignItems: 'stretch'
            }
        },
        justifyContent: {
            center: {
                justifyContent: 'center'
            },
            start: {
                justifyContent: 'flex-start'
            },
            end: {
                justifyContent: 'flex-end'
            },
            between: {
                justifyContent: 'space-between'
            },
            around: {
                justifyContent: 'space-around'
            },
            evenly: {
                justifyContent: 'space-evenly'
            },
            stretch: {
                justifyContent: 'stretch'
            }
        },
        grow: {
            0: {
                flexGrow: 0
            },
            1: {
                flexGrow: 1
            },
            2: {
                flexGrow: 2
            },
            3: {
                flexGrow: 3
            },
            4: {
                flexGrow: 4
            },
        },
        gradient: {
            dark: {
                background: '$dark_gradient'
            },
            false: {

            }
        },
        height: {
            screen: {
                height: '100vh'
            },
            false: {

            }
        },
        width: {
            screen: {
                width: '100%'
            },
            '100%': {
                width: '100%'
            },
            fitContent: {
                width: 'max-content'
            },
        },
        position: {
            absolute: {
                position: 'absolute'
            },
            relative: {
                position: 'relative'
            },
            fixed: {
                position: 'fixed'
            }
        },
    }
})