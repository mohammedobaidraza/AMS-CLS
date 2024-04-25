const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    if (decoded.role !== 'admin') {
      return res.status(401).send('Unauthorized');
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }
};

module.exports = isAdmin;
