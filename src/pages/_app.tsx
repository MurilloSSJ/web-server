import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Container, Content } from './style'
import { SideMenu } from '@/components/menu/sideMenu'
import { useRouter } from 'next/router'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  const isAuthRoute = asPath === '/' || asPath.startsWith('/auth')
  return (
    <Container>
      {!isAuthRoute && <SideMenu />}
      <Content>
        <Component {...pageProps} />
      </Content>
    </Container>
  )
}
