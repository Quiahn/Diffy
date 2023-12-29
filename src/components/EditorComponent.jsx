import { useRef } from "preact/hooks";
import Editor from "@monaco-editor/react";

export function EditorComponent(props) {

    const onChange = (newValue, e) => {
        console.log(newValue)
        props.setCurrentValue(newValue);
    }

    return (
            <Editor
                width='100%'
                height='100%'
                theme='vs-dark'
                value={props.defaultValue}
                language={props.defaultLanguage}
                onChange={onChange}
            />
    );
}