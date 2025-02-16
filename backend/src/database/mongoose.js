
import mongoose from 'mongoose';

// URL de conexão com o MongoDB Atlas
const uri = "mongodb+srv://adeutoo:vse7YrLgnC6VlFep@cluster0.l8qva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const conectarMongoDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB Atlas');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

export default conectarMongoDB;
