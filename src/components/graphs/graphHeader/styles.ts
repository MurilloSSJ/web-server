import { styled } from "@/styles";

export const GraphTitleStyled = styled('h3', {
    color: "$white",
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '2rem',
})

export const GraphDescriptionStyled = styled('p', {
    color: "$white",
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '1.2rem',
})

export const GraphLineHeaderStyled = styled('span', {
    height: '5px',
    width: '100%',
    background: '$dark_500',
    display: 'block',
    marginTop: '1rem',
    marginLeft: '-50px',
    marginRight: '-50px',
    marginBottom: '1rem',
})