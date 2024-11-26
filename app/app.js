import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('All fine[MOCHAJS]'));

app.get('/profile', (req, res) => {
    setTimeout(()=> {
        res.json({ name: 'alice', profile: 'dev', age: 22});
    }, 3000);
});

app.listen(port, () => console.log('run in port', port));

export default app;
