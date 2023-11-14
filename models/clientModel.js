const db = require("./dbConnnect.js")

const createClient = async (body) => {

    try{

        const {idClient} = body
        const {name} = body
        const {cpf} = body

        const createClient = (await db).execute("INSERT INTO client (id_client, name, cpf) VALUES (?, ?, ?)", [idClient, name, cpf])
        return createClient

    }catch(error){
        console.log("Connection or syntax error at the database!", error)
    }
}

const viewClient = async (id) => {

    try {
    
        const idCliente = id

        const viewClient  = (await db).execute("SELECT * FROM client WHERE id_client = ?", [idCliente])
        return viewClient

    } catch (error) {
    console.log("Connection or syntax error at the database!", error)
    }
}

const editClient = async(id, body) => {

    try {
    
        const idClient = id
        const {name} = body
        const {cpf} = body
        
        const editClient = (await db).execute("UPDATE client SET name = ?, cpf = ? WHERE id_client = ?", [name, cpf, idClient])
        return editClient
    } catch (error) {
    console.log("Connection or syntax error at the database!", error)
    }
}

const deleteClient = async(id) => {

    try {
    
        const idClient = id

        const deleteClient = (await db).execute("DELETE FROM client WHERE id_client = ?", [idClient])
        return deleteClient
    } catch (error) {
    console.log(error)
    "Connection or syntax error at the database!", error
    }
}

module.exports = {

    createClient,
    viewClient,
    editClient,
    deleteClient

}