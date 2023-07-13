const express = require("express");


const { EmployeeModel } = require("../models/employees.model")
const dashboardRouter = express.Router()

dashboardRouter.post("/employees",async(req,res)=>{
    const { firstname, lastname, email, department, salary }= req.body
    if (!firstname || !lastname || !email || !department || !salary){
        return res.status(401).json({ message: "Invalid Credentials" })
    }
    try {
        const employee=new EmployeeModel(req.body)
        employee.save()
        return res.status(201).json({ message: "Employee Created Successfully" })
    } catch (error) {
        console.log(error)
    }
})
dashboardRouter.get("/employees",async(req,res)=>{
    try {
        const employees=await EmployeeModel.find()
        return res.status(200).json({ message: "All Employee" ,employees})
    } catch (error) {
        console.log(error)
    }
})


module.exports={
    dashboardRouter
}
