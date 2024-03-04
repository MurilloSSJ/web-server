import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            purple_1100: '#01051A',
            purple_1000: '#09032B',
            purple_900: '#0B0C46',
            purple_800: '#1B1C61',
            purple_700: '#2C2E84',
            purple_600: '#3E4095',
            purple_500: '#656DB6',
            purple_400: '#9483C6',
            purple_300: '#B4A3E2',
            purple_200: '#D7C3F1',
            purple_100: '#E8D9FB',
            gray_1400: '#050505',
            gray_1300: '#0F0F0F',
            gray_1200: '#242323',
            gray_1100: '#3D3D3B',
            gray1000: '#575654',
            gray_900: '#575654',
            gray_800: '#706F6D',
            gray_700: '#8A8986',
            gray_600: '#A3A29F',
            gray_500: '#BDBBB7',
            gray_400: '#D1CFCB',
            gray_300: '#E5E4DF',
            gray_200: '#F0EEE9',
            gray_100: '#FAF8F3',
            gray_000: '#FCFCFC',

            red: '#DB4437',
            green: '#00AD46',

            blue_500: '#0C5F97',
            white: '#FFFFFF',
            white_transparent: 'rgba(239, 241, 237, 0.5)',
            principal_gradient: 'linear-gradient(to right, #6775d3 0%, #bebfec 100%)',
            dark_gradient: 'linear-gradient(to right, rgba(3,25,39,1) 0%, rgba(6,49,76,1) 50%, rgba(9,73,113,1) 100%)',
            green_gradient: 'linear-gradient(to right, #00AD46 0%, #00E05A 50%, #0AFF6C 100%)',
            facebook_gradient: 'linear-gradient(to right, #007BE5 0%, #FFFFFF 100%)',
            google_gradient: 'linear-gradient(to right, #DB4437 0%, #FFFFFF 100%)',

            dark_100: '#0f0f0f',
            dark_200: '#262626',
            dark_300: '#3d3d3d',
            dark_400: '#555555',
            dark_500: '#6f6f6f',
            dark_600: '#8a8a8a',

            primmary_100: '#6775d3',
            primmary_200: '#7a83d8',
            primmary_300: '#8c92dd',
            primmary_400: '#9da1e2',
            primmary_500: '#aeb0e7',
            primmary_600: '#bebfec',
            text_color_100: '#ffffff',
            text_color_200: '#f0f0f0',
            text_color_300: '#e0e0e0',


        },
    },
})

export const darkBlueTheme = createTheme({
    colors: {
        dark_100: '#1c2336',
        dark_200: '#32374a',
        dark_300: '#484d5e',
        dark_400: '#606473',
        dark_500: '#797c89',
        dark_600: '#9295a0',
        primmary_100: '#017cee',
        primmary_200: '#4789f0',
        primmary_300: '#6f9df0',
        primmary_400: '#81a5f5',
        primmary_500: '#99b3f7',
        primmary_600: '#afc2f9',
        principal_gradient: 'linear-gradient(to right, #017cee 0%, #6797f3 50%, #afc2f9 100%)',
    }
})
