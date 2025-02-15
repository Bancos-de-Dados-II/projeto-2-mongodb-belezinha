// src/models/Imovel.js
import mongoose from 'mongoose';

const ImovelSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  nome: { type: String, required: true },
  descricao: { type: String },
  valor: { type: Number, required: true },
  contato: { type: String, required: true },
  coordenadas: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true },
  }
});

ImovelSchema.index({ coordenadas: '2dsphere' });

const Imovel = mongoose.model('Imovel', ImovelSchema);
export default Imovel;
