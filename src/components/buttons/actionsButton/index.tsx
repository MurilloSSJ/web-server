import { FlexContainer } from "@/components/containers/flexContainer"
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";


export const ActionButtons = () => {
    return (
        <FlexContainer gapX={10} alignItems="center" justifyContent="center">
            <HiOutlinePencilSquare size={24} />
            <HiOutlineTrash size={24} />
        </FlexContainer>
    )
}