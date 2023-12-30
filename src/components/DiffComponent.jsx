import { useRef } from "preact/hooks";
import { DiffEditor } from "@monaco-editor/react";

export function DiffComponent(props) {
    const diffEditorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        diffEditorRef.current = editor;
    }
    return (
        <DiffEditor
            width="100%"
            height="100%"
            theme="vs-dark"
            language={props.language}
            original={props.originalValue}
            modified={props.modifiedValue}
            onMount={handleEditorDidMount}
        />
    );
};

// TODO: Figure out how to add arrows to merge conflicts