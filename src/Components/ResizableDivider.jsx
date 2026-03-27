import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

const ResizableDivider = ({
  isDarkMode,
  isResizing,
  onMouseDown,
  onDoubleClick,
}) => {
  return (
    <div
      className={`hidden lg:flex lg:flex-col lg:items-center lg:justify-center w-1 flex-shrink-0 transition-colors duration-150 cursor-col-resize select-none ${
        isDarkMode
          ? "bg-[var(--theme-bg-hover)] hover:bg-[var(--theme-accent)]"
          : "bg-[#d0d0d0] hover:bg-[var(--theme-accent)]"
      } ${isResizing ? ("bg-[var(--theme-accent)]") : ""}`}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
      role="separator"
      tabIndex={0}
      aria-label="Resize editor and output panels"
      title="Drag to resize panels, double-click to reset"
    >
      <FontAwesomeIcon
        icon={faGripVertical}
        className={`w-3 h-6 ${"text-[var(--theme-muted)]"}`}
      />
    </div>
  );
};

export default ResizableDivider;
