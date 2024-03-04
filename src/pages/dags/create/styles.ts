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
export const HeaderTab = styled('span', {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '$primmary_100',
    cursor: 'pointer',
    padding: '5px 100px',
    borderRadius: '10px 10px 0 0',
    border: '2px solid $primmary_100',
    borderBottom: 'none',
    '&:hover': {
        color: '$dark_600'
    },
    variants: {
        active: {
            true: {
                background: '$primmary_100',
                color: '$text_color_100',
            }
        }
    }
})
export const ContainerFixedStyled = styled('div', {
    position: 'fixed',
    bottom: 20,
    right: 10,
    width: '300px',
    height: '300px',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    columnGap: '30px',
    rowGap: '10px',
    color: '$text_color_100',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
        cursor: 'pointer',
        color: '$primmary_100',
    }
}) 