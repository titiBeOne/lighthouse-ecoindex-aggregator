const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");
const aggregate = require("./main");

const optionDefinitions = [
  { name: "verbose", alias: "v", type: Boolean },
  { name: "reports", type: String, multiple: false },
  { name: "srcLighthouse", type: String, multiple: false },
  { name: "srcEcoIndex", type: String, multiple: false },
  { name: "outputPath", type: String, multiple: false },
  { name: "timeout", alias: "t", type: Number },
  { name: "help", alias: "h", type: Boolean },
];

const sections = [
  {
    header: "A typical app",
    content: "Generates reports aggration lighthouse and ecoindex",
  },
  {
    header: "Options",
    optionList: [
      {
        name: "verbose",
        typeLabel: "{underline bool}",
        description: "Verbose a task",
      },
      {
        name: "outputPath",
        typeLabel: "{underline string}",
        description: "The path of the generated HTML report",
      },
      {
        name: "help",
        typeLabel: "{underline bool}",
        description: "Print this usage guide.",
      },
      {
        name: "srcLighthouse",
        typeLabel: "{underline string}",
        description: "folder with json reports lighthouse",
      },
      {
        name: "srcEcoIndex",
        typeLabel: "{underline string}",
        description: "folder with json reports ecoIndex",
      },
    ],
  },
];

(async () => {
  const usage = commandLineUsage(sections);
  const options = commandLineArgs(optionDefinitions);
  if (options?.help || (!options?.srcLighthouse && !options?.srcEcoIndex)) {
    console.log(usage);
    return;
  }

  if (options?.verbose) {
    console.log(options);
  }
  
  await aggregate(options);
})();
