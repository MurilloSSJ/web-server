import { useEffect, useState } from "react";
import { useCallback } from "react";
import {
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  Node as TypeNode,
  Edge,
  Connection,
  ReactFlowProvider,
  ReactFlow
} from "@xyflow/react";
import { FormNewDag } from "@/components/forms/form_new_dag";
import { DialogTrigger, DialogContent, Dialog } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button";
import { DagsOperators } from "@/components/flow/operators";
import { PythonOperator } from "@/components/operators/python_operator";
import { AnimatedSVGEdge } from "@/components/flow/edge";
import { EmptyOperator } from "@/components/operators/dummy_operator";
import { SQLOperator } from "@/components/operators/sql_operator";
import { getLayoutedElements } from "@/utils/dagree";
import { BashOperator } from "@/components/operators/bash_operator";
import { z } from "zod";
import { dagFormSchema } from "@/schemas/dag_form";
import { dagFactoryApi } from "@/clients/dag_factory_api";

const CreateDagPage = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [actualIndex, setActualIndex] = useState(0);
  const [nodes, setNodes, onNodesChange] = useNodesState<TypeNode>([]);
  const [functions, setFunctions] = useState<Array<string>>([]);

  const edgeTypes = {
    animatedSvg: AnimatedSVGEdge,
  };
  const nodeTypes = {
    pythonOperator: PythonOperator,
    emptyOperator: EmptyOperator,
    sqlOperator: SQLOperator,
    bashOperator: BashOperator
  };

  const onConnect: OnConnect = useCallback((params: Connection) => {
    setEdges(addEdge({ ...params, type: "animatedSvg" }, edges))
  }, [setEdges, edges]);

  const onEdgeClick = (event: React.MouseEvent, edge: Edge) => {
    const newEdges = edges.filter((item) => item.id !== edge.id);
    setEdges(newEdges);
  }
  const onNodeClick = (event: React.MouseEvent, node: TypeNode) => {
    const newNodes = nodes.filter((item) => item.id !== node.id);
    const newEdges = edges.filter((item) => item.source !== node.id && item.target !== node.id);
    setNodes([...newNodes]);
    setEdges([...newEdges]);
  }

  useEffect(() => {
    if (nodes.length === 0 || nodes.length + edges.length === actualIndex) {
      return;
    }
    setActualIndex(nodes.length + edges.length);
    const { nodesLayout, edgesLayout } = getLayoutedElements(nodes, edges);
    setNodes([...nodesLayout]);
    setEdges([...edgesLayout]);
  }, [nodes, edges, setNodes, setEdges]);

  const onSubmitDag = (data: z.infer<typeof dagFormSchema>) => {
    let task_nodes = []
    for (let node of nodes) {
      let nd = {
        "task_id": node.id,
        "task_group": node.data.task_group,
        "dependencies": edges.filter((edge) => edge.target === node.id).map((edge) => edge.source),
        "operator": node.type === "pythonOperator" ? "PythonOperator" : node.type === "sqlOperator" ? "SQLOperator" : node.type === "bashOperator" ? "BashOperator" : "DummyOperator",
        "operator_args": node.data,
        "function": node.data.function,
        "script": node.data.script
      }
      task_nodes.push(nd)
    }
    const dag = {
      dag_id: data.dag_name,
      schedule_interval: data.scheduler_interval,
      start_date: data.start_date,
      tasks: task_nodes
    }
    const response = dagFactoryApi.create(dag)
    console.log(response)

  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed bottom-4 right-4 z-50">Send Dag</Button>
        </DialogTrigger>
        <DialogContent>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 border p-10 border-sm border-black">
            <FormNewDag onSubmit={onSubmitDag} />
          </div>
        </DialogContent>
      </Dialog>
      <main className="flex flex-col h-screen w-screen z-5">
        <DagsOperators nodes={nodes} setNodes={setNodes} functions={functions} setFunctions={setFunctions} edges={edges} setEdges={setEdges} />
        <ReactFlowProvider>
          <ReactFlow
            style={{ height: '100%', zIndex: "1" }}
            nodeTypes={nodeTypes}
            minZoom={0.25}
            maxZoom={1}
            nodes={nodes}
            onEdge
            onConnect={onConnect}
            edges={edges}
            onEdgeClick={onEdgeClick}
            edgeTypes={edgeTypes}
            onNodeClick={onNodeClick}

          />
        </ReactFlowProvider>
      </main>
    </>
  )
}

export default CreateDagPage