const PetsController = require('../controller/pet.controller');

module.exports = (app) => {
    app.post('/api/pets', PetsController.createPet);
    app.get('/api/pets', PetsController.getAllPets );
    app.get('/api/pets/:id', PetsController.getOnePet);
    app.put('/api/pets/:id', PetsController.updatePet);
    app.delete('/api/pets/:id', PetsController.deletePet);
}