import { LabelComponent } from "../labelComponent";
import { IconType } from "react-icons"
import { ErrorMessage, InputStyled } from "./styles";
import { FlexContainer } from "@/components/containers/flexContainer";

interface InputComponentProps {
    placeholder: string;
    id: string;
    name: string;
    label?: string;
    IconElement?: IconType;
    errors?: string
    register: any

}

export const InputComponent = ({ placeholder, id, name, label, IconElement, register, errors }: InputComponentProps) => {
    if (errors) {
        console.log(errors)
    }
    return (
        <FlexContainer alignItems="center" justifyContent="center" direction="col">
            {label &&
                <LabelComponent htmlFor={name} text={label}></LabelComponent>
            }
            {IconElement &&
                <IconElement
                    style={
                        {
                            position: 'absolute',
                            top: '50%',
                            bottom: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)'
                        }
                    }
                    size={30}
                    color="#EFF1ED"
                />
            }
            {errors && <ErrorMessage>*{errors}</ErrorMessage>}
            <InputStyled placeholder={placeholder} id={id} name={name} {...register(`${id}`)}></InputStyled>
        </FlexContainer>
    )
}