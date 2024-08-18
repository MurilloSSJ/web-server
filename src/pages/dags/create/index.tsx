import { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  NodeTypes,
  type OnConnect,
  Node as TypeNode,
  Edge,
} from "@xyflow/react";
import { FormNewDag } from "./components/form_new_dag";
import { DialogTrigger, DialogContent, Dialog } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button";
import { DagsOperators } from "./components/operators";
import { PythonOperator } from "./components/operators/python_operator";
import dagre from 'dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: Array<TypeNode>, edges: Array<Edge>, direction = 'LR') => {
    dagreGraph.setGraph({ rankdir: direction });
    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: node.width, height: node.height });
    });
    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });
  
    dagre.layout(dagreGraph);
  
    const newNodes = nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      const newNode = {
        ...node,
        targetPosition: 'left',
        sourcePosition: 'right',
        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        position: {
          x: nodeWithPosition.x - (node.width ? node.width : 150) / 2,
          y: nodeWithPosition.y - (node.height ? node.height : 20) / 2,
        },
      };
  
      return newNode;
    });
  
    return { nodes: newNodes, edges };
  };

const CreateDagPage = () => {
    const nodeTypes = {
        pythonOperator: PythonOperator,
      };
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [functions, setFunctions] = useState<Array<string>>([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const onLayout = (nodeFix: Array<TypeNode>, edgeFix: Array<Edge>) => {
        const { nodeFixed, edgeFixed } = getLayoutedElements(nodeFix, edgeFix, "LR");
        setNodes([...nodeFixed]);
        setEdges([...edgeFixed]);
    }
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="fixed bottom-4 right-4 z-50">Edit Dag Params</Button>
                </DialogTrigger>
                <DialogContent className="fixed p-4 bg-white border-2 rounded-lg mx-auto my-auto">
                    <FormNewDag/>
                </DialogContent>
            </Dialog>
            <main className="flex flex-col h-screen w-screen z-5">
                <DagsOperators nodes={nodes} setNodes={setNodes} functions={functions} setFunctions={setFunctions} onLayout={onLayout}/>
                <ReactFlow 
                    style={{ height: '100%', zIndex: "4" }} 
                    nodeTypes={nodeTypes} 
                    nodes={nodes}                  
                >
                        <Background  variant={BackgroundVariant.Dots}/>
                </ReactFlow>
            </main>
        </>
    )
}

export default CreateDagPage