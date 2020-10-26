const data = require("./s-tier");

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

const builds = () => data.builds.map((build) => r(build));

builds();

module.exports = builds;
