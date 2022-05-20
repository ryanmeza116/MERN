const Author = require('../model/author.model');

module.exports = {
    getAuthors : (req,res) => {
        Author.find({})
        .then((authors) => {
            res.json(authors);
        })
        .catch((err) => {
            res.status(400).json({message : 'Something went wrong in find all author, controllers line 4', error : err});
        });
    },
    createAuthor : (req,res) => {
        Author.create(req.body)
        .then((newAuthor) => {
        res.status(201).json(newAuthor);
        })
        .catch((err) => {
        res.status(400).json({ message: 'Something went wrong in create', error: err });
        });
    },
    getAuthorById: (req, res) => {
        Author.findOne({ _id: req.params.id })
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in findById', error: err });
        });
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in delete', error: err });
        });
    },
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in update', error: err });
        });
    },


};