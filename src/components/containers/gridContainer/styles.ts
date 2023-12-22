import { styled } from "@/styles";

export const GridContainerStyled = styled('div', {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
    variants: {
        color: {
            white: {
                backgroundColor: "$white",
                color: "$blue_500",
            },
            blue: {
                backgroundColor: "$blue_500",
                color: "$white",
            }
        }
    }
})