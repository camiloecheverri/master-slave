//Model
const userModelMy = require('../models/mysql/User');
const userModelPg = require('../models/postgresql/User');
//Importa la libreria bodyparser
const bodyparser = require("body-parser");
const userCTRL = {}
userCTRL.main = async (req, res) => {
    const { allUsersMaster, allUsersSlave } = await getUsers()
    res.render('principal.ejs', { allMaster: allUsersMaster, allSlave: allUsersSlave });
}
async function getUsers() {
    const allUsersMaster = await userModelMy.findAll();
    const allUsersSlave = await userModelPg.findAll();
    return { allUsersMaster, allUsersSlave }
}
userCTRL.createUser = (req, res) => {
    const { email, password, name, borndate, phone, address } = req.body
    userModelMy.findOne({
        where: { email }
    }).then(user => {
        if (!user) {
                //Master
                userModelMy.create({
                    email,
                    password,
                    name,
                    phone,
                    address,
                    borndate
                }).then(
                    //Slave
                    userModelPg.create({
                        email,
                        password,
                        name,
                        phone,
                        address,
                        borndate
                    }).then(async()=>{
                        const { allUsersMaster, allUsersSlave } = await getUsers()
                        res.render('principal.ejs', { allMaster: allUsersMaster, allSlave: allUsersSlave });
                    })
                )
        } else {
            const { allUsersMaster, allUsersSlave } = getUsers()
            res.render('principal.ejs', { allMaster: allUsersMaster, allSlave: allUsersSlave, error:"A user with this email already exits" });
        }
    }).catch(err => {
        res.json('error: ' + err)
    })
}
module.exports = userCTRL