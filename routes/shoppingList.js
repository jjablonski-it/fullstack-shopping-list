const router = require("express").Router();
const Item = require("../models/Item");

// Get items
router.get("/", (req, res) => {
  Item.find()
    .then(items => {
      return res.json([...items]);
    })
    .catch(err => res.status(500).json({ msg: "Could not get items", err }));
});

// Add item
router.post("/", (req, res) => {
  const { text } = req.body;

  if (!text) return res.status(400).json({ msg: "Text not provided" });

  const newItem = new Item({
    text
  });

  newItem
    .save()
    .then(item => res.json(item))
    .catch(err => res.status(500).msg({ err: err }));
});

// Toogle done
router.patch("/:id", (req, res) => {
  const { id } = req.params;

  if (id)
    Item.findById(id)
      .then(item => {
        console.log(item);
        const updatedItem = new Item(item);
        updatedItem.done = !item.done;
        updatedItem
          .save()
          .then(item => {
            return res.json(item);
          })
          .catch(err =>
            res.status(500).json({ msg: "Error while saving", err })
          );
      })
      .catch(err => res.status(404).json({ msg: "Item not found" }));
  else res.status(400).json({ msg: "Id not provided" });
});

// Delete item
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (id)
    Item.findByIdAndDelete(id)
      .then(item => {
        res.json({ msg: "Deleted successfully" });
      })
      .catch(err => res.status(404).json({ msg: "Item not found" }));
  else res.status(400).json({ msg: "Id not provided" });
});

module.exports = router;
