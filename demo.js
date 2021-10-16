/*
  Runs through the available library functions to do a demo.
*/

const getAddressUnspentOutputs = require("./lib/getAddressUnspentOutputs.js");

async function startDemo() {
  try {
    const addr = "bitcoincash:qpnty9t0w93fez04h7yzevujpv8pun204qv6yfuahk";

    const result = await getAddressUnspentOutputs(addr);
    console.log("result: ", result);
  } catch (err) {
    console.error(err);
  }
}
startDemo();
