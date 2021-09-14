const methodModule = require("./otherModule");
const consoleFun = () => {
  console.log("Dashboard");
};
module.exports = {
  consoleFun: consoleFun,
  methodModule: methodModule,
};
