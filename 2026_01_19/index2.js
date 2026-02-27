const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end(`
      <h1>Ruta inicial</h1>
      <p>Esto es mi servidor en la ruta "/"</p>
    `);
    return;
  }

  if (req.url === "/saludo") {
    res.statusCode = 200;
    res.end(`
      <h1>Ruta saludo</h1>
      <img src="https://http.cat/images/200.jpg" alt="saludo"/>
    `);
    return;
  }

  res.statusCode = 404;
  res.end(`
    <h1>Página no encontrada</h1>
    <img src="https://http.cat/images/404.jpg" alt="no encontrado"/>
  `);
});

server.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
