var liveServer = require("live-server");

var params = {
  port: 8181,
  host: "0.0.0.0",
  root: "src",
  open: true,
  file: "index.html",
  wait: 500,
  logLevel: 3,
};
liveServer.start(params);
