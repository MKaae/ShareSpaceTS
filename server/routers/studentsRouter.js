import { Router } from "express";
const router = Router();

const students = [
    { id: 1, email: "anders@example.com", name: "Anders Andersen", team: "ABC-DAT20" },
    { id: 2, email: "brian@example.com", name: "Brian Andersen", team: "ABC-DAT20" },
    { id: 3, email: "christian@example.com", name: "Christian Andersen", team: "ABC-DAT20" },
    { id: 4, email: "david@example.com", name: "David Andersen", team: "ABC-DAT20" },
];

router.get("/api/students", (req, res) => {
    res.send({data: students});
});

router.post("/api/students", (req, res) => {
  const { id, email, name, team }  = req.body;

  const newStudent = {
    id: id,
    email: email,
    name: name,
    team: team,
  }

  students.push(newStudent);
  res.send({data: newStudent});

});


export default router;