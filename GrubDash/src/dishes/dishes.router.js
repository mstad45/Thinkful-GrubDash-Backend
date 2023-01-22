const router = require("express").Router();
const controlller = require("./dishes.controller");
const methodNotAllowed = require("../erros/methedNotAllowed");

router
    .route("/")
    .get(controlller.list)
    .post(controlller.create)
    .all(methodNotAllowed);

router
    .route("/")
    .get(controlller.read)
    .put(controlller.update)
    .all(methodNotAllowed);

module.exports = router;