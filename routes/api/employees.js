const express = require('express')
const router = express.Router()
const {Admin, Editor} = require("../../config/roles_list")
const verifyRoles = require("../../middleware/verifyRoles")

const {getAllEmployees, createNewEmployee, updateEmployee, deleteEmployee, getEmployee} = require('../../controllers/employeesController')

router.route('/')
.get(getAllEmployees)
.post(verifyRoles(Admin, Editor), createNewEmployee)
.put(verifyRoles(Admin, Editor), updateEmployee)
.delete(verifyRoles(Admin), deleteEmployee)

router.route('/:id')
.get(getEmployee)

module.exports = router