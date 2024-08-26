import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sql"
import "ace-builds/src-noconflict/mode-sh"
import "ace-builds/src-noconflict/theme-monokai";
type CodeEditorProps = {
    defaultValue?: string
    mode?: 'python' | 'sql' | 'sh'
    onChange?: (value: string) => void
}
export const CodeEditor = ({ defaultValue, onChange, mode }: CodeEditorProps) => {
    return (
        <div className="w-full">
            <AceEditor
                mode={mode ? mode : 'python'}
                theme="monokai"
                defaultValue={`${defaultValue ? defaultValue : ''}`}
                onChange={onChange}
                style={{ width: "100%", minWidth: '400px', height: 'inherit', minHeight: '150px' }}
            ></AceEditor>
        </div>
    );
}