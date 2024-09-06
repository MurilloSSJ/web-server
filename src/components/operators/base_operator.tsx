import { IconType } from "react-icons";
import { Handle, Position, Node as TypeNode } from "@xyflow/react";
type BaseOperatorProps = {
    operator: string
    Icon: IconType,
    id?: string
    task_group?: string
}

export type BaseOperatorWithoutFlowProps = {
    setNodes: (nodes: any) => void
    nodes: TypeNode[]
    edges: any
    setEdges: (edges: any) => void
}


export const BaseOperatorWithoutFlow = ({ operator, Icon, id, task_group }: BaseOperatorProps) => {
    return (
        <div className="flex flex-col px-5 py-2 bg-white border-2 border-black rounded-sm cursor-pointer tracking-wide relative" style={{ width: "300", height: "50" }}>
            <div className="flex flex-row gap-4 l-0">
                <div><Icon size={35} color="#080F26" /></div>
                <div className="flex flex-col w-full h-full items-center justify-center font-bold">
                    <div>{operator}</div>
                    <div className="font-light">
                        <p>{id} <span className="font-bold bg-orange-600">{task_group ? `#${task_group}` : ''}</span></p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export type BaseOperatorOnlyFlowProps = TypeNode

type BaseOperatorFlowProps = BaseOperatorOnlyFlowProps & BaseOperatorProps

export const BaseOperator = ({ operator, Icon, id, data }: BaseOperatorFlowProps) => {

    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#ff0073', borderRadius: '20px', width: '8px', height: '40px', border: 'None' }}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#ff0073', borderRadius: '20px', width: '8px', height: '40px', border: 'None' }}
            />
            <BaseOperatorWithoutFlow operator={operator} Icon={Icon} id={id} task_group={data.task_group} />
        </>
    )
}
