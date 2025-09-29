import { router } from "express";
const routes = router();

routes.get("/", (req, res) => {
  res.send("Welcome to the API");
});

export { routes };
