const Service = require('../../services/Service');


const speciesHandlerGet = async (req, res) => {
  const speciesService = new Service();
  const imageUrls = await speciesService.getAllImageUrls();

  res.send(imageUrls);
};

module.exports = {
  speciesHandlerGet,
};