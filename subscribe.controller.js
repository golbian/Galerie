const mongoose = require("mongoose");
const Subscribe = require("./subscribe.model.js")(mongoose);

// Create and Save a new Subscribe
exports.create = (req, res) => {
   // Validate request
   console.log(req.body)
   if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const subscribe = new Subscribe({
    title: req.body.title,
    favori: req.body.favori,
    src: req.body.src,
  });

  // Save Subscribe in the database
  subscribe
    .save(subscribe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Subscribe state."
      });
    });
};

// Retrieve all Subscribes from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Subscribe.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving subscribes."
        });
      });
  };

// Find a single Subscribe with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Subscribe.findById(id).exec(doc => {
      doc.then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Subscribe with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Subscribe with id=" + id });
      });
    })
  };

// Update a Subscribe by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Subscribe.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).exec(doc => {
      doc.then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Subscribe with id=${id}. Maybe Subscribe was not found!`
          });
        } else res.send({ message: "Subscribe was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Subscribe with id=" + id
        });
      });
    })
  };

// Delete a Subscribe with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Subscribe.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Subscribe with id=${id}. Maybe Subscribe was not found!`
          });
        } else {
          res.send({
            message: "Subscribe was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Subscribe with id=" + id
        });
      });
  };

// Delete all Subscribes from the database.
exports.deleteAll = (req, res) => {
    Subscribe.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Subscribes were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all subscribes."
        });
      });
  };

// Find all published Subscribes
exports.findAllPublished = (req, res) => {
    Subscribe.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving subscribes."
        });
      });
  };