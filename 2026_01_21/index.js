const http = require("http");
const { title } = require("process");

const requestHandler = (req, res) => {
  if (req.url === "/hola") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("¡Hola!");
    return;
  }

  if (req.url === "/alumnos") {
    const data = {
      title: "Alumnos del Master",
      alumnos: ["Elias", "Daniel", "Joanne", "Ander", "David", "Jorge"],
    };

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(data));
    return;
  }
};

const PORT = 3000;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
