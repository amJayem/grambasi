const express = require('express')
const router = express.Router()
const userSchema = require('../../models/addUserModel')

const allUsers = router.get('/all-users', async (req, res) => {
  try {
    const page = parseInt(req?.query?.page) || 1 // Get the page number from the query parameter, default to 1
    const pageSize = parseInt(req?.query?.pageSize) || 200 // Set the page size, default to 10

    const skip = (page - 1) * pageSize // Calculate the number of documents to skip

    // Fetch paginated users from the database
    // const users = await User.find()
    //   .skip(skip)
    //   .limit(pageSize)
    //   .exec();

    const result = await userSchema.find().limit(pageSize) //.sort({ _id: -1 })
    // Count all documents in the collection (without any query)
    const totalCount = await userSchema.countDocuments()
    console.log(totalCount)
    const sortedDataMemberRole = result?.sort(
      (a, b) => a?.memberRole?.id - b?.memberRole?.id
    )
    // console.log(result)
    res.status(201).json({ sortedDataMemberRole, totalCount, page, pageSize })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = allUsers
