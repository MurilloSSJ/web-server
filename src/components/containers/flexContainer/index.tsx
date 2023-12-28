import { ReactNode } from "react";
import { FlexContainerStyled } from "./styles";

interface FlexContainerProps {
    children: ReactNode;
    className?: string;
    direction?: 'row' | 'col' | 'rowReverse' | 'colReverse';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    gapX?: number;
    gapY?: number;
    paddingX?: number;
    paddingY?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    gradient?: 'dark';
    height?: 'screen';
    grow?: 1 | 2 | 3 | 4;
    width?: 'screen' | '100%' | 'fitContent';
    position?: 'absolute' | 'relative';
    dark?: boolean;
}

export const FlexContainer = ({ children, direction, alignItems, justifyContent, gapX, gapY, gradient, height, grow, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight, width, position, dark }: FlexContainerProps) => {
    return (
        <FlexContainerStyled
            direction={direction ? direction : 'row'}
            alignItems={alignItems ? alignItems : 'start'}
            justifyContent={justifyContent ? justifyContent : 'start'}
            gradient={gradient ? gradient : false}
            height={height ? height : false}
            grow={grow ? grow : 0}
            style={
                {
                    columnGap: `${gapX ? gapX : 0}px`,
                    rowGap: `${gapY ? gapY : 0}px`,
                    paddingTop: `${paddingTop ? paddingTop : 0}px`,
                    paddingBottom: `${paddingBottom ? paddingBottom : 0}px`,
                    paddingLeft: `${paddingLeft ? paddingLeft : 0}px`,
                    paddingRight: `${paddingRight ? paddingRight : 0}px`,
                    padding: `${paddingY ? paddingY : 0}px ${paddingX ? paddingX : 0}px`,
                }
            }
            position={position ? position : 'relative'}
            width={width ? width : '100%'}
            dark={dark ? dark : false}
        >
            {children}
        </FlexContainerStyled>
    )
}