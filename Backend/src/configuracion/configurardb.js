
const oracledb = require('oracledb');

cns = {
    user: "BD",
    password: "3887",
    connectString: "172.17.0.2/ORCLCDB"
}


async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);//await es para que espere que este lista la cenexion 
    let result = await cnn.execute(sql, binds, { autoCommit });//el autocommit es para confirmar la consulta en la DB
    cnn.release();
    return result;
}

exports.Open = Open;