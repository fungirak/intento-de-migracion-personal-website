import mongoose from 'mongoose';

mongoose.connect('mongodb://usuario:contraseña@localhost:27017/dbname', { useNewUrlParser: true, useUnifiedTopology: true });

const comentarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  comentarioUsuario: String,
  created_at: { type: Date, default: Date.now },
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Crear un nuevo comentario.
    try {
      const comentario = new Comentario(req.body);
      const data = await comentario.save();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else if (req.method === 'GET') {
    // Obtener todos los comentarios.
    try {
      const data = await Comentario.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
