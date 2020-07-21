const Stud = require('../models/userStud');

module.exports = {
    getAll: async function (req, res) {
        const allStudents = await Stud.find();
        console.log(allStudents);//test
        res.status(200).json(allStudents);
    },

    createStud: async function (req, res) {
        const stud = new Stud({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            hobbies: req.body.hobbies
        });
        try {
            const studSaved = await stud.save();
            console.log(studSaved)//test
            res.status(200).send(studSaved)
        } catch (err) {
            console.log(err + ' data')
            res.json().status(400).send(err);
        }
    },

    deleteStud: async function (req, res) {
        try {
            await Stud.findByIdAndDelete(req.params.id);
            res.status(200).send('object deleted')
        } catch (err) {
            console.log(err)
            res.status(400).send(err);
        }
    },
    
    updateStud: async function (req, res) {
        try {
            const studEdited = await Stud.findByIdAndUpdate(req.params.id,
                {
                    $set: {
                        name: req.body.name,
                        lastname: req.body.lastname,
                        hobbies: req.body.hobbies
                    }
                });
            res.status(200).send('object edited ' + studEdited);
        } catch (err) {
            console.log(err)
            res.status(400).send(err);
        }
    }
}