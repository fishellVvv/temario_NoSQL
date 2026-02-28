const express = require("express");

const server = express();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server levantado en http://localhost:${PORT}`);
});
