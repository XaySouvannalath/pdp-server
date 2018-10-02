const mysql = require('mysql')
const dbconfig = require('../config/database')



async function initialize(){
    const pool = await mysql.createPool(dbconfig.smsPool)
}





async function close(){}

close = async () =>{
    await mysql.get
}

simpleExecute =(statement,binds=[], opts={})
{
    return new Promise(async (resolve, reject)=>{
        let conn; 

        try{
            conn = await mysql.createConnection()

            const result = await conn.ex
        
        }
    })
}



module.exports.initialize = initialize
modole.exports.close = close