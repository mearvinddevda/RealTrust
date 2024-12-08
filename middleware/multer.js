import multer from "multer";

const storage = multer.memoryStorage() ;
const limits = { fileSize: 10 * 1024 * 1024 }; 
export const singleUpload = multer({storage , limits }).single("file");
 