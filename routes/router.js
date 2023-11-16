const express = require("express")
const router = express.Router()
const clientController = require("../controllers/clientController.js")
const currentController = require("../controllers/currentController.js")
const savingsController = require("../controllers/savingsController.js")

//client routes
router.post("/client/register", clientController.createClient)
router.get("/client/view/:id", clientController.viewClient)
router.put("/client/edit/:id", clientController.editClient)
router.delete("/client/delete/:id", clientController.deleteClient)

//current routes
router.post("/client/register/current", currentController.createCurrentAccount)
router.get("/client/view/current/:id", currentController.viewCurrentAccount)
router.put("/client/edit/current/:id", currentController.editCurrentAccount)
router.delete("/client/delete/current/:id", currentController.deleteCurrentAccount)

//savings routes
router.post("/client/register/savings", savingsController.createSavingsAccount)
router.get("/client/view/savings/:id", savingsController.viewCurrentAccount)
router.put("/client/edit/savings/:id", savingsController.editSavingsAccount)
router.delete("/client/delete/savings/:id", savingsController.deleteSavingsAccount)


module.exports = router