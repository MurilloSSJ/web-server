import { styled } from '@/styles'

export const PageContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    padding: '30px 60px',
    height: '100%',
    minHeight: '100vh',
    width: '100%',
    alignSelf: 'center',
    justifySelf: 'center',
})

export const TitleContainer = styled('h1', {
    color: '$gray_900',
    fontSize: '3rem',
    fontFamily: 'Roboto',
    textTransform: 'capitalize',
    fontWeight: '500',
})

export const DescriptionPageContainer = styled('p', {
    color: '#110B13',
    fontSize: '1.2rem',
    fontFamily: 'roboto',
    textTransform: 'capitalize',
    fontWeight: '300',
    paddingBottom: '30px',
})

export const Container = styled('div', {
    display: 'flex',
    overflow: 'hidden',
    minHeight: '100vh',
    width: '100%',
})

export const Content = styled('div', {
    overflowY: 'scroll',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
})

export const MarkedStart = styled('span', {
    backgroundColor: '$primmary',
    paddingRight: '15px',
    borderRadius: '5px',
    width: '15px',
    height: '15px',
})
