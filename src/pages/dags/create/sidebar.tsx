import { FlexContainer } from "@/components/containers/flexContainer";
import { NodeGroup, NodeStyled } from "./styles";

interface DragProps {
    event: any;
    nodeType: string;
}

export const SidebarComponent = () => {
    const onDragStart = ({ event, nodeType }: DragProps) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <aside>
            <div className="description">You can drag these nodes to the pane on the right.</div>
            <FlexContainer gapY={20} direction="col">
                <NodeStyled onDragStart={(event) => onDragStart({ event, nodeType: 'task' })} draggable>
                    Task
                </NodeStyled>
                <NodeGroup className="group" onDragStart={(event) => onDragStart({ event, nodeType: 'group' })} draggable>
                    Group
                </NodeGroup>
            </FlexContainer>
        </aside>
    );
};
