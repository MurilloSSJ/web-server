import { LabelComponent } from "../labelComponent";
import { IconType } from "react-icons"
import { InputStyled } from "./styles";
import { FlexContainer } from "@/components/containers/flexContainer";

interface InputComponentProps {
    placeholder: string;
    id: string;
    name: string;
    label?: string;
    IconElement?: IconType;

}

export const InputComponent = ({ placeholder, id, name, label, IconElement }: InputComponentProps) => {
    if (IconElement) {
    }
    return (
        <FlexContainer alignItems="center" justifyContent="center">
            {label &&
                <LabelComponent htmlFor={name} text={label}></LabelComponent>
            }
            {IconElement &&
                <IconElement
                    style={
                        {
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)'
                        }
                    }
                    size={30}
                    color="#EFF1ED"
                />
            }
            <InputStyled placeholder={placeholder} id={id} name={name} ></InputStyled>
        </FlexContainer>
    )
}