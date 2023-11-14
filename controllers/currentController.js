const currentModel = require("../models/currentModel")

const createCurrentAccount = async(req, res, next) => {

    try {
    
        const createdCurrentAccount = await currentModel.createCurrentAccount(req.body)
        res.status(200).json({message: "Create current account complete!"})
    } catch (error) {
    console.log("Controller error!", error)
    next()
    }
}

const viewCurrentAccount = async(req, res, next) => {

    try {
    
        const viewCurrentAccount = await currentModel.viewCurrentAccount(req.params.id)
        res.status(200).json(viewCurrentAccount[0])
    } catch (error) {
    console.log("Controller error!", error)
    next()
    }

}

const editCurrentAccount = async(req, res, next) => {

    try {
    
        const editedCurrentAcccount = await currentModel.editCurrentAccount(req.params.id, req.body)
        res.status(200).json({message: "Edit current account complete!"})
    } catch (error) {
    console.log("Controller error!", error)
    next()
    }
}

const deleteCurrentAccount = async(req, res, next) => {

    try {
    
        const deletedCurrentAccount = await currentModel.deleteCurrentAccount(req.params.id)
        res.status(200).json({message: "Delete current account complete!"})
    } catch (error) {
    console.log("Controller error!", error)
    next()
    }
}

module.exports = {

    createCurrentAccount,
    viewCurrentAccount,
    editCurrentAccount,
    deleteCurrentAccount

}