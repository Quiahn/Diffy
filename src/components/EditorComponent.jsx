import { useState, useEffect, useRef } from 'preact/hooks';
import Editor from '@monaco-editor/react';

export function EditorComponent(props) {
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    }

    return (
            <Editor
                width="100%"
                height="100%"
                theme="vs-dark"
                value={props.defaultValue}
                language={props.defaultLanguage}
            />
    );
}