import Imovel from '../models/Imovel.js';

export default class EditarImovelController {
  static async editar(req, res) {
    try {
      const { id } = req.params;
      const { titulo, nome, descricao, valor, contato, latitude, longitude } = req.body;
      if (latitude == null || longitude == null) {
        return res.status(400).json({ error: 'Latitude e Longitude são obrigatórias.' });
      }

      const imovel = await Imovel.findByIdAndUpdate(id, {
        titulo, nome, descricao, valor: parseFloat(valor), contato,
        coordenadas: { coordinates: [longitude, latitude] }
      }, { new: true });

      if (!imovel) {
        return res.status(404).json({ error: 'Imóvel não encontrado.' });
      }
      res.status(200).json(imovel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}