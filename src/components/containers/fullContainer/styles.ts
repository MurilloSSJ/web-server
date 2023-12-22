import { styled } from "@/styles";

export const FullContainerStyled = styled('div', {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "$blue_500",
    borderRadius: ".25rem",
    boxShadow: "0 0 1rem 0 rgba(0,0,0,.2)",
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