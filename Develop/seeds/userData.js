const { User } = require('../models');

const userData = [

    {
        name: 'Gob Bluth',
        email: 'gob@gmail.com',
        password: 'gob@gmail.com',
    },
    {
        name: 'George Michael Bluth',
        email: 'gmb@gmail.com',
        password: 'gmb@gmail.com',
    },
    {
        name: 'Walter White',
        email: 'ww@gmail.com',
        password: 'ww@gmail.com',
    },
    {
        name: 'Tyrion Lannister',
        email: 'tyrion@gmail.com',
        password: 'tyrion@gmail.com',
    },
    {
        name: 'Fox Mulder',
        email: 'fox@gmail.com',
        password: 'fox@gmail.com',
    },
    {
        name: 'Bruce Campbell',
        email: 'bruce@gmail.com',
        password: 'bruce@gmail.com',
    },


];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;