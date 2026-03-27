import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

const CustomInput = ({ input, setInput, isDarkMode }) => {
  return (
    <div className="p-3">
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon
          icon={faKeyboard}
          className={`w-4 h-4 ${
            "text-[var(--theme-muted)]"
          }`}
        />
        <span
          className={`text-xs font-semibold uppercase tracking-wide ${
            "text-[var(--theme-muted)]"
          }`}
        >
          Input
        </span>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`w-full h-14 p-2.5 rounded-lg text-sm font-mono resize-none focus:outline-none focus:ring-2 transition-colors duration-200 border ${
          isDarkMode
            ? "bg-[var(--theme-bg)] text-[var(--theme-fg)] border-[var(--theme-border)] focus:ring-[var(--theme-accent)] placeholder-[#6b6b6b]"
            : "bg-[var(--theme-bg-hover)] text-gray-800 border-[var(--theme-border)] focus:ring-[var(--theme-accent)] placeholder-gray-400"
        }`}
        placeholder="Enter stdin input (optional)"
        aria-label="Custom input for stdin"
      />
    </div>
  );
};

export default CustomInput;
