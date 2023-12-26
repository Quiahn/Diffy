
import { useRef } from 'preact/hooks';
import Editor from '@monaco-editor/react';

export function EditorComponent(props) {
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    }

    const showValue = () => {
        if (editorRef.current) {
            alert(editorRef.current.getValue());
        }
    }

    return (
            <Editor
                width = "100%"
                height = "100%"
                defaultLanguage = {props.defaultLanguage}
                defaultValue = {props.defaultValue}
                onMount = {handleEditorDidMount}
            />
    );
}