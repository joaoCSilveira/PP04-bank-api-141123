const db = require("./dbConnnect")

const createSavingsAccount = async(body) => {

    try {
    
        const {idClient} = body
        const {balance} = body

        const createSavingsAccount = (await db).execute("INSERT INTO savings (id_clientsavings, balance) VALUES (?, ?)", [idClient, balance])
        return createSavingsAccount
    } catch (error) {
    console.log("Connection or syntax error!", error)
    }
}

const viewSavingsAccount = async(id) => {

    try {
    
        const ID = id

        const viewSavingsAccount = (await db).execute("SELECT * FROM savings WHERE id_clientsavings = ?", [ID])
        return viewSavingsAccount
    } catch (error) {
    console.log("Connection or syntax error!", error)
    }
}

const editSavingsAccount = async(id, body) => {
    
    try {
    
        const ID = id
        const {balance} = body

        const editSavingsAccount = (await db).execute("UPDATE savings SET balance = ? WHERE id_clientsavings = ?", [balance, ID])
        return editSavingsAccount
    } catch (error) {
    console.log("Connection or syntax error!", error)
    }
}

const deleteSavingsAccount = async(id) => {

    try {
    
        const ID = id

        const deleteSavingsAccount = (await db).execute("DELETE FROM savings WHERE id_clientsavings = ?", [ID])
        return deleteSavingsAccount
    } catch (error) {
    console.log("Connection or syntax error!", error)
    }
}

module.exports = {

    createSavingsAccount,
    viewSavingsAccount,
    editSavingsAccount,
    deleteSavingsAccount

}