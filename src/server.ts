import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import routes from './routes';

// Cross Origin Resource Sharing (CORS) é um mecanismo que permite
// que recursos restritos em uma página da web sejam solicitados a partir 
// de um domínio/endereço distinto.

const app = express();
const hostname = '127.0.0.1';
const port = 3333;
app.use(cors());

// app.use(cors({
//     origin: ['dominio.com.br', 'aluiziodeveloper.com.br']
// }));

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ 😎`);
});
