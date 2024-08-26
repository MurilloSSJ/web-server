import dagre from 'dagre';
import { Edge, Node as NodeType } from '@xyflow/react';
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

export const getLayoutedElements = (nodes: NodeType[], edges: Edge[]) => {
    dagreGraph.setGraph({ rankdir: "LR" });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: node.width || 300, height: node.height || 50 });
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
                x: nodeWithPosition.x - (node.width || 300) / 2,
                y: nodeWithPosition.y - (node.height || 50) / 2,
            },
        };

        return newNode;
    });

    return { nodesLayout: newNodes, edgesLayout: edges };
};