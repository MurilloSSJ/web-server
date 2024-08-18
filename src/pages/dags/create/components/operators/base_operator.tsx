import { IoLogoPython } from "react-icons/io";
import { IconType } from "react-icons";
import { Node } from "@xyflow/react";
type BaseOperatorProps = {
    operator: string
    Icon: IconType
}
import { Handle, Position } from '@xyflow/react';


export const BaseOperatorWithoutFlow = ({operator, Icon}: BaseOperatorProps) =>{
    return (
        <div className="flex flex-row gap-4 l-0 px-5 py-2 bg-white border-2 border-black rounded-sm cursor-pointer tracking-wide">
            <div><Icon size={35} color="#080F26"/></div>
            <div className="flex w-full h-full items-center justify-center font-bold">
                <div>{operator}</div>
            </div>
        </div>
    )
}

export const BaseOperator = ({operator, Icon}: BaseOperatorProps) =>{
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555', borderRadius: '20px', width: '8px', height: '40px', border: 'None' }}
                onConnect={(params) => console.log('handle onConnect', params)}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#555', borderRadius: '20px', width: '8px', height: '40px', border: 'None' }}
                onConnect={(params) => console.log('handle onConnect', params)}
            />
            <BaseOperatorWithoutFlow operator={operator} Icon={Icon}/>
        </>
    )
}
