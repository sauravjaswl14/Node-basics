const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const members = require("../../Members");

//create endpoints/route handler
//gets all members
router.get("/", (req, res) => {
  res.json(members);
});

//gets member with id
router.get("/:id", (req, res) => {
  //req.params.id (string)
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `member not found with id of ${req.params.id}` });
  }
});

router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and a email" });
  }
  members.push(newMember);
  res.json(members);
});

router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;
        res.status(201).json({ msg: "updated", member });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `Member with id of ${req.params.id} not found` });
  }
});

router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: "member deleted",
      members: members.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res
      .status(400)
      .json({ msg: `Member with id of ${req.params.id} not found` });
  }
});

module.exports = router;
