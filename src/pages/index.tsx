import { InputComponent } from '@/components/formsComponents/input'
import { FlexContainer } from '@/components/containers/flexContainer'
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { SectionTitle } from '@/components/texts/sectionTitle';
import { GradientButton } from '@/components/buttons/Button';
import { FullContainer } from '@/components/containers/fullContainer';
import { ParagraphStyled } from '@/components/texts/paragraph/styles';
import { HeaderMenu } from '@/components/menu/headerMenu';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function Home() {
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
                <FlexContainer direction='col' alignItems='center' justifyContent='center' gapY={20}>
                  <InputComponent placeholder='Username' id='username' name='username' IconElement={CiUser}></InputComponent>
                  <InputComponent placeholder='Password' id='password' name='password' IconElement={CiLock}></InputComponent>
                </FlexContainer>
                <GradientButton text='Login' />
              </FlexContainer>
            </FlexContainer>
            <FlexContainer direction='col' gapY={20}>
              <GradientButton text='Login With Google' IconElement={FaGoogle} IconPosition='left'></GradientButton>
              <GradientButton text='Login With Facebook' IconElement={FaFacebook} IconPosition='left' gradient='facebook'></GradientButton>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
