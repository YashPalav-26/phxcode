import React from "react";
import Editor from "@monaco-editor/react";
const EditorSection = ({
  language,
  code,
  setCode,
  theme,
  editorRef,
  isDarkMode,
}) => {
  return (
    <div className="flex-1">
      {" "}
      <div
        className={`p-4 rounded-lg shadow-lg h-full ${
          isDarkMode
            ? "bg-gray-800 shadow-gray-400 shadow-sm"
            : "bg-[#EAD196] shadow-gray-800 shadow-md"
        }`}
      >
        {" "}
        <Editor
          height="78vh"
          language={language}
          value={code}
          onChange={(value) => setCode(value)}
          theme={theme}
          onMount={(editor) => (editorRef.current = editor)}
          className="h-full"
        />{" "}
      </div>{" "}
    </div>
  );
};
export default EditorSection;
