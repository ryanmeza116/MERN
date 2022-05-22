const Pet = require('../model/pet.model');
console.log('Accessing Controller');
module.exports = {

    createPet: (req,res) => {
        Pet.create(req.body)
        .then((newPet) => {
        res.status(201).json(newPet);
        })
        .catch((err) => {
        res.status(400).json({ message: 'Something went wrong in create', error: err });
        });
    },
    

    getAllPets : (req,res) => {
        Pet.find({})
            .then((pets) => {
            res.json(pets);
            })
            .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in findAll', error: err });
            });
        },

    getOnePet : (req,res) => {
        Pet.findOne({ _id: req.params.id })
            .then((pet) => {
            res.json(pet);
    })
        .catch((err) => {
        res.status(400).json({ message: 'Something went wrong in findById', error: err });
    });
},


    updatePet : (req,res) => {
    Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((pet) => {
    res.json(pet);
    })
    .catch((err) => {
    res.status(400).json({ message: 'Something went wrong in update', error: err });
    });
},

    deletePet : (req,res) => {
    Pet.deleteOne({ _id: req.params.id })
    .then((pet) => {
    res.json(pet);
    })
    .catch((err) => {
    res.status(400).json({ message: 'Something went wrong in delete', error: err });
    });
},
};