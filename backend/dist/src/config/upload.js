"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.default = {
    storage: multer_1.default.diskStorage({
        destination: path_1.default.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        },
    }),
    limits: {
        fileSize: 4 * 1024 * 1234 //4MB  
    },
    fileFilter: (request, file, cb) => {
        const mimeTypes = [
            'image/jpeg',
            'image/png'
        ];
        if (!mimeTypes.includes(file.mimetype)) {
            return cb(null, false);
        }
        cb(null, true);
    },
};
