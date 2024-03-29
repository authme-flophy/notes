const express = require("express");
const noteController = require("../controllers/notesControllers");

const router = express.Router();

router.get("/", noteController.note_index);
router.get("/create", noteController.note_create_page);
router.get("/notes/:id", noteController.note_details);
router.post("/notes", noteController.note_create);
router.delete("/notes/:id", noteController.note_delete);
router.get("/notes/edit/:id", noteController.note_edit_page);
router.put("/notes/edit/:id", noteController.note_edit);

module.exports = router;
