import Editor, { useMonaco } from "@monaco-editor/react";
import { MONACO_LANGUAGE_MAP } from "../constants/languageConfig";
import SaveIndicator from "./SaveIndicator";
import { useEffect } from "react";

const EditorSection = ({
  language,
  code,
  setCode,
  theme,
  fontSize,
  fontFamily,
  editorRef,
  isDarkMode,
  setIsCodeTouched,
  isSaved,
  saveTimestamp,
  currentTheme,
}) => {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco && currentTheme?.monacoThemeData) {
      monaco.editor.defineTheme(theme, currentTheme.monacoThemeData);
      monaco.editor.setTheme(theme);
    }
  }, [monaco, theme, currentTheme]);

  const getMonacoLanguage = (lang) => {
    return MONACO_LANGUAGE_MAP[lang] || "plaintext";
  };

  return (
    <div className="flex-1 h-full min-h-0">
      <div
        className={`h-full rounded-lg overflow-hidden border flex flex-col transition-colors duration-200 ${
          isDarkMode
            ? "bg-[var(--theme-bg)] border-[var(--theme-border)] shadow-lg shadow-black/20"
            : "bg-[var(--theme-bg)] border-[var(--theme-border)] shadow-lg shadow-black/5"
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 py-2.5 border-b flex-shrink-0 ${
            "bg-[var(--theme-sidebar)] border-[var(--theme-border)]"
          }`}
        >
          <div className="flex items-center space-x-2">
            <span
              className={`text-sm font-semibold ${
                "text-[var(--theme-fg)]"
              }`}
            >
              {language === "cpp"
                ? "C++"
                : language.charAt(0).toUpperCase() + language.slice(1)}
            </span>
            <span
              className={`text-xs ${
                "text-[var(--theme-muted)]"
              }`}
            >
              •
            </span>
            <span
              className={`text-xs ${
                "text-[var(--theme-muted)]"
              }`}
            >
              UTF-8
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <SaveIndicator
              isDarkMode={isDarkMode}
              isSaved={isSaved}
              timestamp={saveTimestamp}
            />
            <span
              className={`text-xs ${
                "text-[var(--theme-muted)]"
              }`}
            >
              Ln 1, Col 1
            </span>
          </div>
        </div>
        <div className="flex-1 min-h-0">
          <Editor
            height="100%"
            language={getMonacoLanguage(language)}
            value={code}
            onChange={(value) => {
              setCode(value);
              if (setIsCodeTouched) {
                setIsCodeTouched(true);
              }
            }}
            theme={theme}
            onMount={(editor) => {
              editorRef.current = editor;

              editor.updateOptions({
                fontFamily: fontFamily || "'JetBrains Mono', monospace",
                fontSize: fontSize || 14,
                lineHeight: (fontSize || 14) * 1.5,
                minimap: { enabled: true, scale: 1 },
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: "on",
                padding: { top: 16, bottom: 16 },
                renderLineHighlight: "all",
                bracketPairColorization: { enabled: true },
                guides: {
                  bracketPairs: true,
                  indentation: true,
                },
                suggest: {
                  showIcons: true,
                  showMethods: true,
                  showFunctions: true,
                  showConstructors: true,
                  showFields: true,
                  showVariables: true,
                  showClasses: true,
                  showStructs: true,
                  showInterfaces: true,
                  showModules: true,
                  showProperties: true,
                  showEvents: true,
                  showOperators: true,
                  showUnits: true,
                  showValues: true,
                  showConstants: true,
                  showEnumMembers: true,
                  showEnums: true,
                  showKeywords: true,
                  showWords: true,
                  showColors: true,
                  showFiles: true,
                  showReferences: true,
                  showFolders: true,
                  showTypeParameters: true,
                  showSnippets: true,
                },
              });
            }}
            loading={
              <div
                className={`flex items-center justify-center h-full ${
                  "text-[var(--theme-muted)]"
                }`}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm">Loading editor...</span>
                </div>
              </div>
            }
            options={{
              fontFamily: fontFamily || "'JetBrains Mono', monospace",
              fontSize: fontSize || 14,
              fontLigatures: true,
              lineHeight: (fontSize || 14) * 1.5,
              minimap: { enabled: true, scale: 1 },
              scrollBeyondLastLine: false,
              smoothScrolling: true,
              cursorBlinking: "smooth",
              cursorSmoothCaretAnimation: "on",
              padding: { top: 16, bottom: 16 },
              automaticLayout: true,
              tabSize: 2,
              wordWrap: "on",
              renderWhitespace: "selection",
              bracketPairColorization: { enabled: true },
              guides: {
                bracketPairs: true,
                indentation: true,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorSection;
