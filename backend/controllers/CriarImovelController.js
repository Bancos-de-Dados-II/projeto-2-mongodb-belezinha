import Imovel from '../models/Imovel.js';

export default class CriarImovelController {
  static async criarImovel(req, res) {
    try {
      const { dados, latitude, longitude } = req.body;
      if (latitude == null || longitude == null) {
        return res.status(400).json({ error: 'Latitude e Longitude são obrigatórias.' });
      }

      const imovel = new Imovel({
        titulo: dados.titulo,
        nome: dados.nome,
        descricao: dados.descricao,
        valor: parseFloat(dados.valor),
        contato: dados.contato,
        coordenadas: { coordinates: [longitude, latitude] },
      });
      await imovel.save();
      res.status(201).json(imovel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
