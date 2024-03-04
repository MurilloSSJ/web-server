import AceEditor from 'react-ace';
import { useState } from "react";
import 'brace/theme/monokai';
import 'brace/mode/python';
import "ace-builds/src-noconflict/ext-language_tools";
export const CodeEditor = () => {
    return (
        <AceEditor
            height="90vh"
            width='100%'
            mode="python"
            theme='monokai'
            style={{ fontSize: '16px !important' }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
            }}
        />
    )
}