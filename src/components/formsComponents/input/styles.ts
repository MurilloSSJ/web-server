import { styled } from "@/styles";

export const InputStyled = styled('input', {
    padding: ".8rem 2rem",
    backgroundColor: "$blue_500",
    width: "100%",
    maxWidth: "100%",
    '&::placeholder': {
        color: "$white_transparent",
        fontFamily: 'Inter',
        fontWeight: "200",
    },
    borderRadius: ".25rem",

})
export const ErrorMessage = styled('span', {
    color: "$red_200",
    fontSize: "1.2rem",
    fontFamily: 'Inter',
    fontWeight: "200",
    padding: ".5rem 0",
    display: "block",
    textAlign: "center",
    width: "100%",
    maxWidth: "100%",
    marginTop: ".5rem",
})