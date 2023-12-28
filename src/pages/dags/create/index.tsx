import { FlexContainer } from "@/components/containers/flexContainer"
import { useCallback, useState } from "react"
import ReactFlow, { Background, ReactFlowProvider, useNodesState, useEdgesState, ReactFlowInstance, NodeTypes } from "reactflow"
import { SidebarComponent } from "./sidebar"
import { NodeCustomized } from "./node"
import { TaskGroup } from "./nodeGroup"
const nodeTypes: NodeTypes = {
    task: NodeCustomized,
    group: TaskGroup
};
const CreateDagPage = () => {
    const initialNodes = [
        {
            id: '1',
            type: 'task',
            data: { label: 'input node' },
            position: { x: 250, y: 5 },
        },
    ];
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null)
    const onDragOver = useCallback((event: any) => {
        console.log(typeof event)
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);
    const onDrop = (event: any) => {
        event.preventDefault();
        console.log(event)
        const type = event.dataTransfer.getData('application/reactflow');

        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
            return;
        }

        // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
        // and you don't need to subtract the reactFlowBounds.left/top anymore
        // details: https://reactflow.dev/whats-new/2023-11-10
        if (!reactFlowInstance) {
            return;
        }
        const position = reactFlowInstance?.screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });
        const newNode = {
            id: '3',
            type,
            position,
            data: { label: `${type} node` },
        };
        console.log(newNode)
        const newNodes = nodes
        newNodes.push(newNode)
        setNodes(newNodes);
        console.log(nodes)
    };
    return (
        <FlexContainer width="100%" height="screen">
            <ReactFlowProvider>
                <ReactFlow
                    onDrop={onDrop}
                    nodes={nodes}
                    onNodesChange={onNodesChange}
                    onDragOver={onDragOver}
                    onInit={setReactFlowInstance}
                    nodeTypes={nodeTypes}
                >
                </ReactFlow>
                <SidebarComponent />
            </ReactFlowProvider>
        </FlexContainer>)
}

export default CreateDagPage