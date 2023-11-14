const db = require("./dbConnnect.js")

const createCurrentAccount = async(body) => {

    try {
    
        const {idClient} = body
        const {balance} = body

        const createCurrentAccount = (await db).execute("INSERT INTO current (id_clientcurrent, balance) VALUES (?, ?)", [idClient, balance])
        return createCurrentAccount
    } catch (error) {
    console.log("Connection or syntax error!", error)
    }
}

const viewCurrentAccount = async(id) => {

    try {
    
        const ID = id

        const viewCurrentAccount = (await db).execute("SELECT * FROM current WHERE id_clientcurrent = ?", [ID])
        return viewCurrentAccount
    } catch (error) {
    console.log("Connection or syntax error!", error)
    }
}

const editCurrentAccount = async(id, body) => {

    try {
    
        const ID = id
        const {balance} = body

        const editCurrentAccount = (await db).execute("UPDATE current SET balance = ? WHERE id_clientcurrent = ?", [balance, ID])
        return editCurrentAccount
    } catch (error) {
    console.log("Connection or syntax error!", error)
    }
}

const deleteCurrentAccount = async(id) => {

    try {

        const ID = id
    
        const deleteCurrentAccount = (await db).execute("DELETE FROM current WHERE id_clientcurrent = ?", [ID])
        return deleteCurrentAccount
    } catch (error) {
    console.log("Connection or syntax error!", error)
    }
}

module.exports = {

    createCurrentAccount,
    viewCurrentAccount,
    editCurrentAccount,
    deleteCurrentAccount

}