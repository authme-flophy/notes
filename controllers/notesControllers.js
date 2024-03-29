const Note = require("../models/note");

const note_index = (req, res) => {
  Note.find()
    .sort({ createdAt: -1 })
    .then((notes) => {
      res.render("index", { title: "home", notes: notes });
    })
    .catch((err) => console.error(err));
};

const note_create_page = (req, res) => {
  res.render("create", { title: "new note" });
};

const note_details = (req, res) => {
  const id = req.params.id;
  Note.findById(id)
    .then((note) => {
      res.render("details", { title: note.title, note: note });
    })
    .catch((err) => {
      console.error(err);
      res.render("404", { title: "404 not founnd" });
    });
};

const note_create = (req, res) => {
  const note = new Note(req.body);
  note
    .save()
    .then((response) => res.redirect("/"))
    .catch((err) => console.error(err));
};

const note_delete = (req, res) => {
  const id = req.params.id;
  Note.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/" }))
    .catch((err) => console.error(err));
};

const note_edit_page = (req, res) => {
  const id = req.params.id;
  Note.findById(id)
    .then((note) => res.render("edit", { title: "edit", note: note }))
    .catch((err) => console.error(err));
};

const note_edit = (req, res) => {
  const id = req.params.id;
  Note.findByIdAndUpdate(id, req.body, { new: true })
    .then((response) => res.json({ redirect: `/notes/${id}` }))
    .catch((err) => console.error(err));
};

module.exports = {
  note_index,
  note_create_page,
  note_details,
  note_create,
  note_delete,
  note_edit_page,
  note_edit,
};
