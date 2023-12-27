import { EditorComponent } from "../../components/EditorComponent";
import { useState } from "preact/hooks";
import "./Diff.css";

export function Diff() {
    const [defaultLanguage, setDefaultLanguage] = useState("");
    const [defaultValue, setDefaultValue] = useState("");

    const dropDownOptions = {
        "JavaScript": "//",
        "TypeScript": "//",
        "CSS": "/*",
        "LESS": "/*",
        "SCSS": "//",
        "JSON": "",
        "HTML": "<!--",
        "XML": "<!--",
        "PHP": "//",
        "C#": "//",
        "C++": "//",
        "Razor": "//",
        "Markdown": "<!--",
        "Java": "//",
        "VB": "'",
        "CoffeeScript": "#",
        "Handlebars": "<!--",
        "Batch": "REM",
        "Pug": "//",
        "F#": "//",
        "Lua": "--",
        "Powershell": "#",
        "Python": "#",
        "Ruby": "#",
        "SASS": "//",
        "R": "#",
        "Objective-C": "//"
    };

    const onLanguageChange = (e) => {
        setDefaultLanguage(e.target.value);
        setDefaultValue(dropDownOptions[e.target.value]);
    }


	return (
        <div id="main-container" class={defaultLanguage && defaultValue && "selected"}>
            <select
                value={defaultLanguage}
                onChange={onLanguageChange}
            >
                <option value="">Select a language</option>
                {Object.keys(dropDownOptions).map((language, index) => (
                    <option key={index} value={language}>
                        {language}
                    </option>
                ))}
            </select>

            {defaultLanguage && defaultValue && <>
                <div id="editor-container">
                    <EditorComponent
                        defaultLanguage = {defaultLanguage}
                        defaultValue = {defaultValue + " Original"}
                    />
                    <EditorComponent 
                        defaultLanguage = {defaultLanguage}
                        defaultValue = {defaultValue + " Modified"}
                    />
                </div>

                <input type="button" value="Clear" />
                <input type="button" value="Check Differences!" />
            </>}
        </div>
	);
}