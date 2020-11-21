const router = require("express").Router();
const Student = require("../db/models/student");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      res.send(student);
    } else {
      res.status(404).send(`You f'd up bro`);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/:id", (req, res, next) => {});

module.exports = router;
