import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

conectar();

async function conectar() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Conectado ao MongoDB");
    } catch (err) {
        console.log("Erro ao conectar ao MongoDB:", err);
    }
}

export default mongoose;
