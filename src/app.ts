import express from 'express';
import productRoute from './routes/product.route';
import userRoute from './routes/user.route';
import orderRoute from './routes/order.route';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
