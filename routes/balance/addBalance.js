const express = require('express');
const balanceModel = require('../../models/balanceModel');
const router = express.Router();

const addBalance = router.post('/add-balance', async (req, res) => {
	try {
		const data = req.body;
		const id = data.id;
		const result = await balanceModel.findOneAndUpdate({ _id: id }, data, {
			upsert: true,
			new: true,
		});
		// console.log(data)
		res.status(201).send({ success: true, result });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: error.message });
	}
});

module.exports = addBalance;
