const {connect} = require("./client");

let conn = 0;
const setupInput = (connection) => {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    conn.write("Move: up");
  }
  if (key === 'a') {
    conn.write("Move: left");
  }
  if (key === 's') {
    conn.write("Move: down");
  }
  if (key === 'd') {
    conn.write("Move: right");
  }
  console.log("this is the wrong key");
};

setupInput();
module.exports = (setupInput), {handleUserInput};