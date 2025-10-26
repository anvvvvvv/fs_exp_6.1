// middleware/auth.js
const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'Missing Authorization header' });
  }

  const token = authHeader.split(' ')[1]; // Extract token after 'Bearer '

  if (!token) {
    return res.status(401).json({ error: 'Bearer token missing' });
  }

  // For demo: use a hardcoded token
  const VALID_TOKEN = 'mysecrettoken123';

  if (token !== VALID_TOKEN) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }

  // Token is valid
  next();
};

module.exports = auth;
