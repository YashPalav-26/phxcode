import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const OutputWindow = ({ output, error, isDarkMode }) => {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div
        className={`flex-1 p-4 overflow-auto ${
          "bg-[var(--theme-bg)]"
        }`}
      >
        <div className="flex items-center space-x-2 mb-4">
          <FontAwesomeIcon
            icon={faTerminal}
            className={`w-4 h-4 ${
              "text-[var(--theme-muted)]"
            }`}
          />
          <span
            className={`text-xs font-semibold uppercase tracking-wide ${
              "text-[var(--theme-muted)]"
            }`}
          >
            Standard Output
          </span>
        </div>

        {output ? (
          <pre
            className={`whitespace-pre-wrap font-mono text-sm leading-relaxed ${
              isDarkMode ? "text-[var(--theme-fg)]" : "text-gray-800"
            }`}
          >
            {output}
          </pre>
        ) : (
          <div className="flex flex-col items-center justify-center h-32 text-center">
            <FontAwesomeIcon
              icon={faTerminal}
              className={`w-10 h-10 mb-3 ${
                isDarkMode ? "text-[#4a4a4a]" : "text-gray-300"
              }`}
            />
            <p
              className={`text-sm font-medium ${
                "text-[var(--theme-muted)]"
              }`}
            >
              Run your code to see output
            </p>
          </div>
        )}
      </div>

      {error && (
        <div
          className={`p-4 border-t ${
            isDarkMode
              ? "bg-red-900/10 border-[var(--theme-border)] border-t-red-800"
              : "bg-red-50 border-[var(--theme-border)] border-t-red-200"
          }`}
        >
          <pre
            className={`text-sm font-mono whitespace-pre-wrap ${
              isDarkMode ? "text-red-400" : "text-red-600"
            }`}
          >
            {error}
          </pre>
        </div>
      )}
    </div>
  );
};

export default OutputWindow;
