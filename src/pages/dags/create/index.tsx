import { useMemo, useState } from "react";
import ReactFlow, { Controls, NodeTypes, Background, BackgroundVariant } from "reactflow"
import { TaskNode } from "./components/node";
import { FlexContainer } from "@/components/containers/flexContainer";
import { HeaderTabs } from "./components/headerMenu";
import { CodeEditor } from "./components/codeEditor";
import { ContainerFixed } from "./components/containerFixed";

const CreateDagPage = () => {
    const nodeTypes = useMemo(() => ({ taskNode: TaskNode }), []);
    const [showCode, setShowCode] = useState(false)
    const [showFlow, setShowFlow] = useState(true)
    const onAlterTab = (name: string) => {
        if (name === "Code") {
            setShowCode(true)
            setShowFlow(false)
        } else {
            setShowCode(false)
            setShowFlow(true)
        }
    }
    return (
        <>
            {showCode && <FlexContainer justifyContent="center" alignItems="center" fontFamily="monospace">
                <CodeEditor></CodeEditor>
                <ContainerFixed text="Go to the Flow">
                    <ReactFlow nodeTypes={nodeTypes} style={{ height: '100%' }}>
                        <Background color="#ffffff" variant={BackgroundVariant.Dots} />
                        <Controls />
                    </ReactFlow>
                </ContainerFixed>
            </FlexContainer>}
            {showFlow && <div style={{ height: '100%' }}>
                <ReactFlow nodeTypes={nodeTypes} style={{ height: '100%' }}>
                    <Background color="#ffffff" variant={BackgroundVariant.Dots} />
                    <Controls />
                </ReactFlow>
                <ContainerFixed text="Go to the Code">
                    <CodeEditor />
                </ContainerFixed>
            </div>}
        </>
    )
}

export default CreateDagPage