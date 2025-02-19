import { readFileSync, writeFileSync } from "fs";
import  Papa from "papaparse";
import { isEmail } from "./lib/validate.js";

// const { parse } = require("csv-parse/sync");

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;

const inputFile = argv.input;
const outputFile = argv.clean;
const reportFile = argv.report;





function readCsv(file) {
  const fileContent = readFileSync(inputFile, "utf8");
  const records = Papa.parse(fileContent,{
    header: true,
  });
  const headers= records.meta.fields;
  const body = records.data;
  return {headers,body};
}

function writeCsv(path,data) {
    const first =data[0];
    first ["Errors"]="No such errror"
    data[0]=first;
    const stringify=Papa.unparse(data);
  writeFileSync(path, stringify);
}
writeCsv(outputFile,readCsv(inputFile).body);