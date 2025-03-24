import express from 'express';
import cors from 'cors';
import contestantRoutes from './routes/contestantRoutes';
import battleRoutes from './routes/battleRoutes';
import dictatorRoutes from './routes/dictatorRoutes';
import sponsorRoutes from './routes/sponsorRoutes';
import blackMarketTransactionRoutes from './routes/blackMarketTransactionRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/contestants', contestantRoutes);
app.use('/battles', battleRoutes);
app.use('/dictators', dictatorRoutes);
app.use('/sponsors', sponsorRoutes);
app.use('/black-market', blackMarketTransactionRoutes);


app.get('/', (req, res) => {
    res.send('¡Bienvenido a LUCHA MUERE!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});