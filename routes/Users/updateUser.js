const express = require('express');
const router = express.Router();
const userSchema = require('../../models/addUserModel');

const updateUser = router.put('/update-user', async (req, res) => {
  try {
    // const { id } = req.query;
    const data = req.body;
    const memberId = Number(data.memberId);

    const query = { memberId: memberId };

    const updateUser = await userSchema.findOneAndUpdate(query, data);

    res.status(201).send(updateUser);
    // console.log(data);
    // res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

module.exports = updateUser;
