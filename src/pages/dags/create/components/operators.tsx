import { PythonOperatorWithoutFlow } from "./operators/python_operator";
import { SQLOperatorWithoutFlow } from "./operators/sql_operator";
import { EmptyOperatorWithoutFlow } from "./operators/dummy_operator";
import { Edge, Node as TypeNode } from "@xyflow/react";

type DagsOperatorsProps = {
    setNodes: (nodes: any) => void
    nodes: any
    setFunctions: (functions: any) => void
    functions: any
    onLayout: (nodes: Array<TypeNode>, edges: Array<Edge>) => void
}

export const DagsOperators = (props: DagsOperatorsProps) => {
    return (
        <div className="flex flex-col gap-4 h-full fixed l-0 px-10 py-10 bg-slate-100 z-10">
            <PythonOperatorWithoutFlow 
                setNodes={props.setNodes} 
                nodes={props.nodes} 
                setFunctions={props.setFunctions} 
                functions={props.functions}
                onLayout={props.onLayout}
            />
            <SQLOperatorWithoutFlow/>
            <EmptyOperatorWithoutFlow/>
        </div>
    );
    }