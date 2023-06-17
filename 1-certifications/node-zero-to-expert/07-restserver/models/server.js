const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.send('Hello world');
    });
  }

  listen() {
    this.app.listen(this.port || 3000, () => {
      console.log(`Server running in port: ${this.port}`);
    });
  }
}
module.exports = Server;
