const express = require('express')
const router = express.Router()
const userSchema = require('../../models/addUserModel')

const allUsers = router.get('/all-users', async (req, res) => {
  try {
    const page = parseInt(req?.query?.page) || 1 // Get the page number from the query parameter, default to 1
    const pageSize = parseInt(req?.query?.pageSize) // Set the page size, default to 200

    const skip = (page - 1) * pageSize // Calculate the number of documents to skip

    // Fetch paginated users from the database
    // const users = await User.find()
    //   .skip(skip)
    //   .limit(pageSize)
    //   .exec();

    // filtered by role for homepage users
    const query = {
      $or: [
        { 'role.role': 'কার্যকরী কমিটি' },
        { 'role.role': 'উপদেষ্টা কমিটি' }
      ]
    }

    const findQuery = userSchema.find(query)

    if (pageSize !== null) {
      findQuery.limit(pageSize)
    }
    const allHomepageUsers = await findQuery.sort({ _id: -1 })

    const allUsers = await userSchema.find().limit(pageSize).sort({ _id: -1 })
    // Count all documents in the collection (without any query)
    const totalCount = await userSchema.countDocuments()
    // console.log(totalCount)
    const sortedHomepageUsers = allHomepageUsers?.sort(
      (a, b) => a?.memberRole?.id - b?.memberRole?.id
    )
    const sortedDataMemberRole = allUsers?.sort(
      (a, b) => a?.memberRole?.id - b?.memberRole?.id
    )
    // console.log(result)
    res.status(201).json({
      sortedDataMemberRole,
      sortedHomepageUsers,
      totalCount,
      page,
      pageSize
    })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})
const allUsersHomePage = router.get('/all-users-homepage', async (req, res) => {
  try {
    const page = parseInt(req?.query?.page) || 1 // Get the page number from the query parameter, default to 1
    const pageSize = parseInt(req?.query?.pageSize) || 200 // Set the page size, default to 200

    const query = {
      $or: [
        { 'role.role': 'কার্যকরী কমিটি' },
        { 'role.role': 'উপদেষ্টা কমিটি' }
      ]
    }

    const findQuery = userSchema.find(query)

    if (pageSize !== null) {
      findQuery.limit(pageSize)
    }

    const allUsers = await findQuery.sort({ _id: -1 })

    // Count all documents in the collection (without any query)
    const totalCount = await userSchema.countDocuments()
    // console.log(totalCount)
    const sortedHomepageUsers = allUsers?.sort(
      (a, b) => a?.memberRole?.id - b?.memberRole?.id
    )
    // console.log(result)
    res.status(201).json({ sortedHomepageUsers, totalCount, page, pageSize })
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = allUsers
module.exports = allUsersHomePage
