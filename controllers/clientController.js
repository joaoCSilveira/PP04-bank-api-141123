const clientModel = require("../models/clientModel")

const createClient = async (req, res, next) => {

    try {
        
        const createdClient = await clientModel.createClient(req.body)
        res.status(200).json({message: "Create client complete!"})
    
    } catch (error) {
    console.log("Controller function error!")
    next()
    }

}

const viewClient = async (req, res, next) => {

    try {
    
        const viewClient = await clientModel.viewClient(req.params.id)
        res.status(200).json(viewClient[0])

    } catch (error) {
    console.log("Controller function error!")
    next()
    }
}

const editClient = async (req, res, next) => {

    try {
    
        const editedClient = await clientModel.editClient(req.params.id, req.body)
        res.status(200).json({message: "Edit client complete!"})

    } catch (error) {
    console.log("Controller function error!")
    next()
    }
}

const deleteClient = async (req, res, next) => {

    try {
    
        const deletedClient = await clientModel.deleteClient(req.params.id)
        res.status(200).json({message: "Delete client complete!"})
    } catch (error) {
    console.log("Controller function error!")
    next()
    }
}

module.exports = {

    createClient,
    viewClient,
    editClient,
    deleteClient

}