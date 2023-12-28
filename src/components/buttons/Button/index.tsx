import { FlexContainer } from "@/components/containers/flexContainer";
import { ButtonStyled } from "./styles";
import { IconType } from "react-icons";

interface GradientButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    IconElement?: IconType;
    IconPosition?: 'left' | 'right';
    iconColor?: string;
    gradient?: 'primmary' | 'facebook' | 'google';

}

export const GradientButton = ({ text, onClick, type, disabled, IconElement, IconPosition, gradient, iconColor }: GradientButtonProps) => {
    return (
        <FlexContainer alignItems="center" gapX={20}>
            {IconElement &&
                <IconElement
                    style={
                        {
                            position: 'absolute',
                            top: '50%',
                            right: `${IconPosition === 'right' ? '10px' : 'unset'}`,
                            left: `${IconPosition === 'left' ? '20px' : 'unset'}`,
                            transform: 'translateY(-50%)'
                        }
                    }
                    size={30}
                    color={iconColor ? iconColor : '#EFF1ED'}
                />
            }
            <ButtonStyled
                //disabled={disabled ? disabled : false}
                onClick={onClick}
                //type={type}
                gradient={gradient ? gradient : "primmary"}
            >
                {text}
            </ButtonStyled>

        </FlexContainer>
    )
}