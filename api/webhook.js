module.exports = async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const VERIFY_TOKEN = 'equinox-token';
      const mode = req.query['hub.mode'];
      const token = req.query['hub.verify_token'];
      const challenge = req.query['hub.challenge'];

      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        return res.status(200).send(challenge);
      } else {
        return res.sendStatus(403);
      }
    } else if (req.method === 'POST') {
      console.log('📩 Mensaje recibido:', JSON.stringify(req.body, null, 2));
      return res.sendStatus(200);
    } else {
      return res.status(500).send('Error interno del servidor');
    }
  } catch (error) {
    console.error('❌ Error en el webhook:', error);
    res.status(500).send('Error interno del servidor');
  }
};
