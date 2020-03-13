const router = require("express").Router();

// Get items
router.get("/", (req, res) => {
  return res.json({ msg: "Get shopping list" });
});

// Add item
router.post("/", (req, res) => {
  return res.json({ msg: "Add shopping list item" });
});

// Toogle bought
router.patch("/:id", (req, res) => {
  return res.json({ msg: "Toogle bought" });
});

// Delete item
router.patch("/:id", (req, res) => {
  return res.json({ msg: "Delete item" });
});

module.exports = router;
