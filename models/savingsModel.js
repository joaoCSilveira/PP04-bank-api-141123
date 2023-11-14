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

module.exports = {

    createSavingsAccount

}