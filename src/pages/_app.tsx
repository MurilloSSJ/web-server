import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Container, Content } from './style'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Content>
        <Component {...pageProps} />
      </Content>
    </Container>
  )
}
