const pretty = require("pretty-data").pd;
const fs = require("fs");
const wrench = require("wrench");
const path = require("path");

const inputFolder = process.argv[2];

const files = wrench.readdirSyncRecursive(inputFolder);

files.forEach(file => {
  if (path.extname(file) === ".xml") {
    // read the xml file and pretty up

    const fileName = path.join(inputFolder, file);

    const xml = fs.readFileSync(fileName, "utf-8");
    const newXml = pretty.xml(xml);

    fs.writeFileSync(fileName, newXml);
  }
});
