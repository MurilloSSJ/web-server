
import React from 'react'
import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

import { authApi } from '@/services/authApi'
import { LoginSchemaType } from '@/schemas/login'


type AuthContextType = {
    isAuthenticated: boolean
    signIn: (data: LoginSchemaType) => Promise<void>
    signOut: () => Promise<void>
}

export const AuthContext = React.createContext({} as AuthContextType)

export function AuthContextProvider({ children }: any) {
    const { access_token } = parseCookies()
    const isAuthenticated = !!access_token

    async function signIn({ username, password }: LoginSchemaType) {
        const { access_token } = await authApi.login({
            username,
            password,
        })
        console.log(access_token)

        setCookie(undefined, 'accesstoken', access_token, {
            maxAge: 60 * 60 * 24 // 24horas
        })

        Router.push('/home')
    }

    async function signOut() {
        destroyCookie({}, 'accesstoken')
        destroyCookie({}, 'menu')
        destroyCookie({}, 'scope')

        Router.push('/')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}
