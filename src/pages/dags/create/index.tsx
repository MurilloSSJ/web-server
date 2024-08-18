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
  Connection,
} from "@xyflow/react";
import { FormNewDag } from "./components/form_new_dag";
import { DialogTrigger, DialogContent, Dialog } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button";
import { DagsOperators } from "./components/operators";
import { PythonOperator } from "./components/operators/python_operator";
import { AnimatedSVGEdge } from "./components/edge";
import dagre from 'dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

export const getLayoutedElements = (nodes: Array<TypeNode>, edges: Array<Edge>, direction = 'LR') => {
    dagreGraph.setGraph({ rankdir: direction });
    nodes.forEach((node) => {
      const width = node.width || 500;
      const height = node.height || 50;
      dagreGraph.setNode(node.id, { width: width, height: height });
    });
    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });
    dagre.layout(dagreGraph);
  
    const newNodes = nodes.map((node) => {
      console.log(node, "node")
      const nodeWithPosition = dagreGraph.node(node.id);
      const newNode = {
        ...node,
        targetPosition: 'left',
        sourcePosition: 'right',
        position: {
          x: nodeWithPosition.x - (node.width ? node.width : 500) / 2,
          y: nodeWithPosition.y - (node.height ? node.height : 50) / 2,
        },
      };
      return newNode;
    });

    const newEdges = edges.map((edge) => {
      const newEdge = {
        ...edge,
        sourceX: dagreGraph.node(edge.source).x,
        sourceY: dagreGraph.node(edge.source).y,
        targetX: dagreGraph.node(edge.target).x,
        targetY: dagreGraph.node(edge.target).y,
        type: 'animatedSvg',
      };
      return newEdge;
    })
  
    return { nodesLayout: newNodes, edgesLayout: newEdges };
  }

const CreateDagPage = () => {
    const nodeTypes = {
        pythonOperator: PythonOperator,
      };
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [functions, setFunctions] = useState<Array<string>>([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const onConnect: OnConnect = useCallback((params: Connection) => {
        const { nodesLayout, edgesLayout } = getLayoutedElements(nodes, addEdge(params, edges), "LR");
        setNodes([...nodesLayout]);
        setEdges([...edgesLayout]);
    },[setEdges, edges]);
    const edgeTypes = {
      animatedSvg: AnimatedSVGEdge,
    };
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
                <DagsOperators nodes={nodes} setNodes={setNodes} functions={functions} setFunctions={setFunctions} edges={edges} setEdges={setEdges}/>
                <ReactFlow 
                    style={{ height: '100%', zIndex: "4" }} 
                    nodeTypes={nodeTypes} 
                    nodes={nodes}
                    onConnect={onConnect}
                    edges={edges}
                    edgeTypes={edgeTypes}
                >
                        <Background  variant={BackgroundVariant.Dots}/>
                </ReactFlow>
            </main>
        </>
    )
}

export default CreateDagPage