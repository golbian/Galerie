module.exports = app => {
    const suscribes = require("./subscribe.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Suscribe
    router.post("/", suscribes.create);
  
    // Retrieve all Grids
    router.get("/", suscribes.findAll);
  
    // Retrieve a single Suscribe with id
    router.get("/:id", suscribes.findOne);
  
    // Update a Suscribe with id
    router.put("/:id", suscribes.update);
  
    // Delete a Suscribe with id
    router.delete("/:id", suscribes.delete);
  
    app.use('/api/subscribe', router);
  };