export default function handler(req, res) {
  if (req.method === 'GET') {
    const VERIFY_TOKEN = 'equibox-token';
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token && mode === 'subscribe' && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  }

  if (req.method === 'POST') {
    console.log('📩 Nuevo mensaje entrante:');
    console.log(JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
  }
}
