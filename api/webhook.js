export default async function handler(req, res) {
  if (req.method === 'GET') {
    const VERIFY_TOKEN = 'equibox-token';

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token && mode === 'subscribe' && token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  } else if (req.method === 'POST') {
    console.log('📩 Nuevo mensaje entrante:', JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
