const express = require('express');
const router = express.Router();
const userSchema = require('../../models/addUserModel');
const balanceSchema = require('../../models/balanceModel');

const updateUser = router.put('/update-user', async (req, res) => {
  try {
    // const { id } = req.query;
    const data = req.body;
    const memberId = Number(data.memberId);

    const query = { memberId: memberId };
    // console.log(memberId);

    const updateUser = await userSchema.findOneAndUpdate(query, data);
    if (data.releaseStatus) {
      const deletedBalance = await balanceSchema.deleteMany(query);
      res.status(201).send({ updateUser, deletedBalance });
    } else {
      res.status(201).send(updateUser);
    }
    // console.log(data.releaseStatus);
    // res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

module.exports = updateUser;
