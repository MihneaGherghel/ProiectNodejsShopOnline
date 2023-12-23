const express = require("express");
const app = express();
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./graphql/index");
const expressPlayground =
  require("graphql-playground-middleware-express").default;

app.all("/graphql", createHandler({ schema }));
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(3000, () => {
  console.log("Server Running");
});
