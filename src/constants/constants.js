export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  c: "10.2.0",
  cpp: "11.2.0",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Yash");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Yash" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Yash")\n`,
  java: `\npublic class GreetYash {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Yash");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace GreetYash\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello Yash in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Yash';\necho $name;\n",
  c: `#include <stdio.h>\n\nint main() {\n    printf("Hello, Yash!\\n");\n    return 0;\n}\n`,
  cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, Yash!" << std::endl;\n    return 0;\n}\n`,
};
