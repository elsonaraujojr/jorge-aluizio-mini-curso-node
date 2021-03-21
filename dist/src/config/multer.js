"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
//import crypto from 'crypto';
exports.default = {
    storage: multer_1.default.diskStorage({
        destination: path_1.default.resolve(__dirname, '..', '..', 'uploads'),
        filename: function (request, file, callback) {
            //const hash = crypto.randomBytes(6).toString('hex');
            var fileName = Date.now() + "-" + file.originalname;
            callback(null, fileName);
        }
    })
};
