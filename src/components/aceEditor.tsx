import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
type CodeEditorProps = {
    defaultValue?: string
    onChange?: (value: string) => void
}
export const CodeEditor = ({defaultValue, onChange}: CodeEditorProps) => {
    return (
        <div className="w-full">
            <AceEditor mode="python" theme="monokai" defaultValue={`${defaultValue ? defaultValue: ''}`} onChange={onChange} style={{width: "100%", minWidth: '400px'}}></AceEditor>
        </div>
    );
}