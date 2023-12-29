import { useRef } from "preact/hooks";
import DiffEditor from "@monaco-editor/react";

export function DiffComponent(props) {

    return (
        <DiffEditor 
            width="100%"
            height="100%"
            theme="vs-dark"
            language={props.language}
            original={"props.originalValue"}
            modified={"props.modifiedValue"}
        />
    );
};

// TODO: Figure out how to get the diff editor to work