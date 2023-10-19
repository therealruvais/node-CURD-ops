const people = require("../people");

const getPerson = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPerson = (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "provide a valid data" });
  }
  res.status(201).send(`welcome king ${name}`);
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id == Number(id));
  console.log(person);
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with the id ${id}` });
  }
  const newPerson = people.map((per) => {
    if (per.id === Number(id)) {
      per.name = name;
    }
    return per;
  });
  return res.status(200).json({ success: true, data: newPerson });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id == Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with the id ${id}` });
  }

  const newPeople = people.filter((per) => per.id !== Number(id));

  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = { getPerson, postPerson, updatePerson, deletePerson };
