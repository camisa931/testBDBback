import {getConnection, sql, queries} from '../database';
//import querys from '../database/querys'; '../database'

export const getProducts = async (req, res) => {

try {
    const pool = await getConnection(); // llamo la conexion
    const result = await pool.request().query(queries.getAllProduct);
    //console.log(result);
    res.json(result.recordset);
} catch (error){
    res.status(500);
    res.send(error.message);
}
    
};

export const createNewProduct = async (req, res) => {  //aqui podria ser createNewPerson

    const {fullname, birth, parentesco} = req.body // de aqui se quito birth
    let {quantity} = req.body;   //creo que se puede comentar

    if (fullname == null  || parentesco == null){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields 1'})
    }

    if (quantity == null) quantity = 0;    // desde aqui
 
    try {
        const pool = await getConnection()
                                               // hasta aqui
    await pool
    .request()
    .input('fullname', sql.Text, fullname)
    .input('birth',sql.Date,birth)
    .input('parentesco',sql.Text,parentesco)
    .query(queries.addNewProduct);  //pendiente con este nombre

    //console.log(result);

    //console.log(name, description,quantity)

    res.json({fullname,birth,parentesco});
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
    
};

export const getProductByid = async (req,res) => {
    const {id} = req.params; 

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('Id',id)
        .query(queries.getProductById);
    //   console.log(result);

    res.send(result.recordset[0]);
};


export const deleteproductById = async (req,res) => {
    const {id} = req.params; 

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('Id',id)
        .query(queries.deleteproduct);
    //   console.log(result);

    res.sendStatus(204);
};


export const getTotalProducts = async (req,res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.getTotalProducts);
    
    res.json(result.recordset[0][''])

    //console.log(result);

    //res.sendStatus(204);
};

export const updateProductById = async (req, res) =>{
   const {fullname,birth, parentesco} = req.body;
   const {id} = req.params
    if (fullname == null || parentesco == null){
        return res.status(400).json({msg: "Bad request. Please Fill all fields 2"});
    }

    const pool = await getConnection()
    await pool
    .request()
    .input('fullname', sql.Text, fullname )
    .input('birth', sql.Date,birth)
    .input('parentesco',sql.Text,parentesco)
    .input('id', sql.Int,id)
    .query(queries.updateProductById);

res.json({fullname, birth, parentesco})
}