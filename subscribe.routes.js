module.exports = app => {
    const subscribes = require("./subscribe.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Suscribe
    router.post("/", subscribes.create);
  
    // Retrieve all Grids
    router.get("/", subscribes.findAll);
  
    // Retrieve a single Suscribe with id
    router.get("/:id", subscribes.findOne);
  
    // Update a Suscribe with id
    router.put("/:id", subscribes.update);
  
    // Delete a Suscribe with id
    router.delete("/:id", subscribes.delete);
  
    app.use('/api/subscribe', router);
  };