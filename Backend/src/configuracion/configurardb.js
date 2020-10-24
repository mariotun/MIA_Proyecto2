
const oracledb = require('oracledb');

cns = {
    user: "TEST",
    password: "1234",
    connectString: "172.17.0.2:1521/ORCL18"
}


async function Open(sql, binds, autoCommit) {

    try{

    let cnn = await oracledb.getConnection(cns);//await es para que espere que este lista la cenexion con la BD
    let result = await cnn.execute(sql, binds, { autoCommit });//el autocommit es para confirmar la consulta en la DB
    cnn.release();
   // console.log("RESULTADO:",result);
    return result;

    }catch(e){
      //  console.log('ERROR:',e)
        throw new Error("La consulta fallo,revise sus datos por favor."+e);
        
    }

}

exports.Open = Open;