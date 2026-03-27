import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SaveIndicator = ({ isDarkMode, isSaved, timestamp }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isSaved) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Show for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isSaved]);

  if (!isVisible) return null;

  return (
    <div
      className={`flex items-center space-x-1.5 px-2 py-1 rounded text-xs transition-all duration-300 ${
        isDarkMode
          ? "text-[#4EC9B0] bg-[var(--theme-bg)]/80"
          : "text-green-600 bg-[var(--theme-bg)]/80"
      }`}
    >
      <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
      <span className="font-medium">Saved</span>
      {timestamp && (
        <span
          className={`text-xs ml-1 ${
            "text-[var(--theme-muted)]"
          }`}
        >
          {timestamp}
        </span>
      )}
    </div>
  );
};

export default SaveIndicator;
