import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Container, Content } from './style'
import { SideMenu } from '@/components/menu/sideMenu'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import { AuthContextProvider } from '@/contexts/authContext'
import 'react-toastify/dist/ReactToastify.css'
import 'reactflow/dist/style.css';
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  const isAuthRoute = asPath === '/' || asPath.startsWith('/auth')
  return (
    <AuthContextProvider>
      <Container>
        {!isAuthRoute && <SideMenu />}
        <Content>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            closeOnClick
            pauseOnHover
          />
        </Content>
      </Container>
    </AuthContextProvider>
  )
}
