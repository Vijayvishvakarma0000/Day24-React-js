const student = require("../model/UserModel.js");
// async function createStudent(req, res) {


    exports.createStudent = async (req, res) => {
        try {
            // step-1 get the data of user
            const { Name,
                Email,
                Age,
            } = req.body;
            // step-2 check the data if data is empty return the error
            if (Name === '' || Email === '' || !Age) {
                return res.status(500).json({
                    sucess: false,
                    message: "data can not be empty"
                })
            }
            // step-3 create the student
            const Newuser = await student.create({
                Name,
                Email,
                Age,
            })
            // step-4 return the student
            return res.status(201).json({
                sucess: true,
                message: "student inserted sucessfully"
            })
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({
                sucess: false,
                message: "internal server error"
            })
        }
    }
