import React from "react";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";

const OutputSection = ({
  output,
  error,
  input,
  setInput,
  handleCompileAndExecute,
  isDarkMode,
}) => {
  return (
    <div className="lg:w-1/3 w-full flex flex-col space-y-4">
      <OutputWindow output={output} error={error} isDarkMode={isDarkMode} />
      <CustomInput input={input} setInput={setInput} isDarkMode={isDarkMode} />
      <button
        className={`shadow-md hover:shadow-none rounded-md px-4 py-2 self-center lg:w-2/3 ${
          isDarkMode
            ? "bg-[#28A745] text-white shadow-gray-300 shadow-sm hover:bg-[#2ECC71] transition-shadow"
            : "bg-teal-500 text-white shadow-gray-700"
        }`}
        onClick={handleCompileAndExecute}
      >
        Compile and Execute
      </button>
    </div>
  );
};

export default OutputSection;
