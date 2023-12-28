import { styled } from "@/styles";
export const NodeStyled = styled('div', {
    padding: '10px 20px',
    width: 'fit-content',
    borderRadius: '5px',
    background: '$purple_300',
    color: '$dark_500',
    border: '4px dashed $purple_500',
    '&.react-flow__handle': {
        background: '$purple_500',
        borderRadius: '3px'
    }
})

export const NodeGroup = styled('div', {
    padding: '80px 40px',
    width: 'fit-content',
    borderRadius: '5px',
    background: '$yellow_500',
    color: '$dark_500',
    border: '4px dashed $yellow_300',
    '&.react-flow__handle': {
        background: '$purple_500',
        borderRadius: '3px'
    }
})