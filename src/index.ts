import express from 'express';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/', routes);

app.listen(3000, () => console.log('Server on port 3000'));