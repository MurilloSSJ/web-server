import { Handle, Position, NodeProps } from 'reactflow';
import { NodeStyled } from './styles';

export const NodeCustomized = (({ data }: NodeProps) => {
    return (
        <NodeStyled className={data.dragging ? 'react-flow__handle' : ''}>
            <Handle type="target" position={Position.Left} />
            <div>
                <strong>{data.label}</strong>
            </div>
            <Handle type="source" position={Position.Right} />
        </NodeStyled>
    );
});
