import { AddButtonWrapper } from "./styles";

interface AddButtonProps {
    onClick?: () => void;
    position?: 'absolute' | 'relative';
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;

}

export const AddButton = ({ onClick, position, top, left, bottom, right }: AddButtonProps) => {
    return (
        <AddButtonWrapper
            onClick={onClick}
            position={position ? position : 'relative'}
            style={{
                top: top ? top : 'unset',
                left: left ? left : 'unset',
                bottom: bottom ? bottom : 'unset',
                right: right ? right : 'unset',
            }}>+</AddButtonWrapper>
    )
}