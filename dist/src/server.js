"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var celebrate_1 = require("celebrate");
var routes_1 = __importDefault(require("./routes"));
// Cross Origin Resource Sharing (CORS) é um mecanismo que permite
// que recursos restritos em uma página da web sejam solicitados a partir 
// de um domínio/endereço distinto.
var app = express_1.default();
app.use(cors_1.default());
// app.use(cors({
//     origin: ['dominio.com.br', 'aluiziodeveloper.com.br']
// }));
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '..', 'uploads')));
app.use(celebrate_1.errors());
app.listen(3333, function () {
    console.log('Server started on port 3333! 😎');
});
