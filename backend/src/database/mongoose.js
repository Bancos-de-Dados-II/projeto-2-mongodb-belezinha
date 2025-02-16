import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';

// URL de conexão com o MongoDB Atlas

const conectarMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB Atlas');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

export default conectarMongoDB;
