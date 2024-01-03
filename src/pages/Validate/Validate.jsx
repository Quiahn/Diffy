import { EditorComponent } from "../../components/EditorComponent";
import './Validate.css';

export function Validate() {
    return (
        <div id="main-container">
            <h2>Validate</h2>
            <EditorComponent
                language="JavaScript"
                defaultValue="// Original"
            />
        </div>
    )
}

// TODO: finish this page