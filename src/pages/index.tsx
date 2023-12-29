import { InputComponent } from '@/components/formsComponents/input'
import { FlexContainer } from '@/components/containers/flexContainer'
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { SectionTitle } from '@/components/texts/sectionTitle';
import { GradientButton } from '@/components/buttons/Button';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ParagraphStyled } from '@/components/texts/paragraph/styles';
import { HeaderMenu } from '@/components/menu/headerMenu';
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LoginSchema, LoginSchemaType } from '@/schemas/login';
import { authApi } from '@/services/authApi';
import { toast } from 'react-toastify'
import React from 'react';
import { AuthContext } from '@/contexts/authContext';

export default function Home() {
  const { signIn } = React.useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })
  async function handleLogin(data: any) {
    try {
      await signIn(data)
      toast.success('Login realizado com sucesso')
    } catch (err) {
      console.log(err)
      toast.error('Usuário ou senha inválidos, tente novamente')
    }

    console.log(data)
  }
  return (
    <FlexContainer alignItems='start' justifyContent='start' direction='col' gradient='dark' height='screen' width='screen'>
      <FlexContainer alignItems='center' justifyContent='center' direction='col'>
        <HeaderMenu />
      </FlexContainer>
      <FlexContainer alignItems='center' justifyContent='center'>
        <FlexContainer direction='col' width='fitContent' alignItems='center' justifyContent='center'>
          <FlexContainer alignItems='center' justifyContent='center' direction='col' paddingY={100}>
            <SectionTitle text='Login to Your Account' gradient='primary' />
            <ParagraphStyled>Access to your account to view admin platformer,
              and create your dags.</ParagraphStyled>
          </FlexContainer>
          <FlexContainer alignItems='center' justifyContent='center' gapX={200}>
            <FlexContainer alignItems='center' justifyContent='center'>
              <FlexContainer direction='col' alignItems='center' justifyContent='center' gapY={80} width='fitContent'>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <FlexContainer direction='col' alignItems='center' justifyContent='center' gapY={20}>

                    <InputComponent placeholder='Username' id='username' name='username' IconElement={CiUser} register={register} errors={errors.username?.message}></InputComponent>
                    <InputComponent placeholder='Password' id='password' name='password' IconElement={CiLock} register={register} errors={errors.password?.message}></InputComponent>

                  </FlexContainer>
                  <GradientButton text='Login' IconElement={FaArrowRight} IconPosition='right' iconColor='#000000' type='submit' />
                </form>
              </FlexContainer>
            </FlexContainer>
            <FlexContainer direction='col' gapY={20}>
              <GradientButton text='Login With Google' IconElement={FaGoogle} IconPosition='left' gradient='google'></GradientButton>
              <GradientButton text='Login With Facebook' IconElement={FaFacebook} IconPosition='left' gradient='facebook'></GradientButton>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
