import pkg from "json-server";
import fs from "fs";
import path from "path";

const db = JSON.parse(fs.readFileSync(path.join("db.json")));

const { create, router: _router, defaults, rewriter } = pkg;

const server = create();
const router = _router(db);
const middlewares = defaults();

server.use(middlewares);
server.use(
  rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running on port 3001");
});
