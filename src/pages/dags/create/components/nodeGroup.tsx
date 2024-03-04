import { Handle, Position, NodeProps } from 'reactflow';
import { NodeGroup } from '../styles';
export const TaskGroup = (({ data }: NodeProps) => {
    return (
        <NodeGroup className={data.dragging ? 'react-flow__handle' : ''}>
            <Handle type="target" position={Position.Left} />
            <div>
                <strong>{data.label}</strong>
            </div>
            <Handle type="source" position={Position.Right} />
        </NodeGroup>
    )
})