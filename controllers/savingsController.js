const savingsModel = require("../models/savingsModel.js")

const createSavingsAccount = async(req, res, next) => {

    try {
    
        const createdSavingsAccount = await savingsModel.createSavingsAccount(req.body)
        res.status(200).json({message: "Create savings account complete!"})
    } catch (error) {
    console.log("Controller error!", error)
    next()
    }
}

module.exports = {

    createSavingsAccount

}