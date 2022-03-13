//import { description } from "commander";
//import { createNewProduct } from "../controllers/products.controller";

export const queries = {
    getAllProduct:'SELECT * FROM Products',
    addNewProduct:
        'INSERT INTO Products (fullname, birth, parentesco) VALUES (@fullname, @birth, @parentesco)',
    getProductById: 'SELECT * FROM Products Where Id = @Id',
    deleteproduct: 'DELETE FROM [personas].[dbo].[products] WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) FROM products',
    updateProductById:'UPDATE Products SET fullname = @fullname, birth = @birth, parentesco = @parentesco WHERE Id = @Id '
};