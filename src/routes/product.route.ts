import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

router.post('/', productController.registerNewProduct);
router.get('/', productController.getAllProducts);

export default router;