const express = require("express");
const app = express();
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./graphql/index");
const authenticate = require("./utils/authenticate");
const expressPlayground =
  require("graphql-playground-middleware-express").default;

app.all(
  "/graphql",
  authenticate,
  createHandler({
    schema,
    context: (req) => {
      return { user: req.raw.user };
    },
  })
);

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(3000, () => {
  console.log("Server Running");
});
