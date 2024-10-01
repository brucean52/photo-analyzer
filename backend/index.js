import express from 'express';
import cors from 'cors';
import postRoutes from './src/routes/index.js'

const app = express();  
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/analyze', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello, this is the photo-analyzer API!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
