import {Router} from 'express';

import {createNewProduct, getProducts, getProductByid, deleteproductById, getTotalProducts, updateProductById} from '../controllers/products.controller';

const router = Router();

router.get('/products', getProducts);

router.post('/products', createNewProduct );

router.get('/products/count', getTotalProducts);

router.get('/products/:id', getProductByid);

router.delete('/products/:id', deleteproductById);

router.put('/products/:id', updateProductById );

export default router;