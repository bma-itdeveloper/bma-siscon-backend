const getExample = (req, res) => {
  res.json({
    success: true,
    message: 'Controlador de ejemplo funcionando',
  });
};

module.exports = {
  getExample,
};
