const mysql =require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'telcoapp',
    multipleStatements: true
});



  const processingNewUsers = async (req, res) => {

    const data = {
        "name": req.body.name,
        "email" : req.body.email,
        "password": req.body.password,
        "no_hp": req.body.no_hp,
        "nim": req.body.nim
    }


    let NewDataQuery = `INSERT INTO users ( name, email, password,no_hp,nim )
    VALUES
     (?,?,?,?,?);`

    const promisePool = pool.promise();
    // query database using promises
    
    const newData = await promisePool.query(NewDataQuery, [data.name, data.email, data.password, data.no_hp, data.nim]);
    res.status(200).json({
        "Message" : "Sukses Menambah data"
    });


    
  }

  const processingUpdateData = async (req, res) => {
    let nim = req.params.nim
    
    const data = {
        "name": req.body.name,
        "email" : req.body.email,
        "password": req.body.password,
        "no_hp": req.body.no_hp,
    }

    let updateDataQuery = `update users
     set name = ?,  email = ?,  password = ?, no_hp = ?
      where nim = ? `;

    const promisePool = pool.promise();
    // query database using promises
    
    const update = await promisePool.query(updateDataQuery, [data.name, data.email, data.password, data.no_hp , nim]);
    res.status(200).json({
        "Message" : "Sukses mengubah data"
    });


    
  }

  
  module.exports = {processingNewUsers, processingUpdateData};