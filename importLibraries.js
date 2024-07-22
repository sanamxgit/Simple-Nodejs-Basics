const fs = require("fs").promises;
const _ = require("lodash");
const moment = require("moment");

async function processData() {
    try{
        const data = await fs.readFile("data.json", "utf8");
        const parsedData = JSON.parse(data);

        const storedData = _.sortBy(parsedData, "age");
        const timestampedData = storedData.map((item)=>({
            ...item,
            timestamp: moment().format("MMM Do YYYY, h:mm:ss a"),
        }));

        console.log("Processed Data:", timestampedData);
    } catch(err) {
        console.error("Error reading or processing file:",err);
    }
}
processData();x``