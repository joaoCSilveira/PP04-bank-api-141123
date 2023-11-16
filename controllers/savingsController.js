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

const viewCurrentAccount = async(req, res, next) => {

    try {
    
        const viewCurrentAccount = await savingsModel.viewSavingsAccount(req.params.id)
        res.status(200).json(viewCurrentAccount[0])
    } catch (error) {
    console.log("Controller error!", error)
    next()
    }
}


const editSavingsAccount = async(req, res, next) => {

    try {
    
        const editedSavingsAccount = await savingsModel.editSavingsAccount(req.params.id, req.body)
        res.status(200).json({message: "Edit savings account complete!"})
    } catch (error) {
    console.log("Controller error!", error)
    next()
    }
}

const deleteSavingsAccount = async(req, res, next) => {

    try {
    
        const deletedSavingsAccount = await savingsModel.deleteSavingsAccount(req.params.id)
        res.status(200).json({message: "Delete savings account complete!"})
    } catch (error) {
    console.log("Controller error!", error)
    next()
    }
}

module.exports = {

    createSavingsAccount,
    viewCurrentAccount,
    editSavingsAccount,
    deleteSavingsAccount

}