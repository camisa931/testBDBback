import sql from 'mssql'; // aqui se esta importando el modulo

const dbSettings = {  // aqui se esta importnado la base de datos
    user: "sa",  
    password: "aprendo",
    server: "localhost",
    database: "registro",
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
    
};

export async function getConnection(){  // se crea una funcion que se ejecuta dentro de la base de datos
    try{
        const pool = await sql.connect(dbSettings);
     // const result = await pool.request().query('SELECT 1');
     // console.log(result);
        return pool;
    } catch (error) {
        console.error(error)
    }
}

export {sql};
//getConnection();
