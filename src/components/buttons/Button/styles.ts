import { styled } from "@/styles";
import { keyframes } from '@stitches/react'

const gradientAnimationKeyframe = keyframes({
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
})

export const ButtonStyled = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '3px',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderRadius: '1rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    variants: {
        size: {
            small: {
                fontSize: '1rem',
                padding: '0.2rem 0.5rem',
            },
            medium: {
                fontSize: '1.2rem',
                padding: '0.5rem 1rem',
            },
            large: {
                fontSize: '1.5rem',
                padding: '0.7rem 1.5rem',
            },
            xlarge: {
                fontSize: '1.2rem',
                width: '20rem',
            }
        },
        gradient: {
            primmary: {
                //background: '$principal_gradient border-box',
                background: '$principal_gradient border-box',
                border: '3px solid transparent',
                borderRadius: '.25rem',
                fontWeight: 700,
            },
            facebook: {
                background: '$facebook_gradient border-box',
                borderRadius: '.25rem',
                border: '3px solid transparent',
                fontWeight: 700,
            },
            google: {
                background: '$google_gradient border-box',
                borderRadius: '.25rem',
                border: '3px solid transparent',
                fontWeight: 700,
            },
            false: {
            }
        },
        gradientAnimation: {
            true: {
                animationName: `${gradientAnimationKeyframe}`,
                animationDuration: '5s',
                animationIterationCount: 'infinite',
            },
            false: {

            }
        }
    },
    defaultVariants: {
        size: 'xlarge',
        gradient: 'primmary',
        gradientAnimation: true
    }
})