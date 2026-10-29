const authMiddleware = (req, res, next) => {
  // Aquí pondrás validación de token o sesión
  next();
};

module.exports = authMiddleware;
