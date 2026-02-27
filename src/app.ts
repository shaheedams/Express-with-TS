import express from 'express';
import userRouter from './routes/itemRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', userRouter);

// Global error handler
app.use(errorHandler);

export default app;
