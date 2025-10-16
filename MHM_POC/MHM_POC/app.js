import express from 'express';
import helloRoutes from './routes/hello.js';
import processRouter from './routes/config.js'; // matches your router file
import { logger } from './middleware/logger.js';

const app = express();
const port = 3000;

app.use(express.json());

// Custom middleware
app.use(logger);

// Routes
app.use('/api/hello', helloRoutes);
app.use('/api/process', processRouter);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
