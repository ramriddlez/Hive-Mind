const { User } = require('../models');

const userData = [

    {
        name: 'Gob Bluth',
        email: 'gob@gmail.com',
        password: '43fsstg',
    },
    {
        name: 'George Michael Bluth',
        email: 'gmb@gmail.com',
        password: 'rg45y57u',
    },
    {
        name: 'Walter White',
        email: 'ww@gmail.com',
        password: 'in57ibeu6r',
    },
    {
        name: 'Tyrion Lannister',
        email: 'tyrion@gmail.com',
        password: '45yrth',
    },
    {
        name: 'Fox Mulder',
        email: 'fox@gmail.com',
        password: 'erv6u7',
    },
    {
        name: 'Bruce Campbell',
        email: 'bruce@gmail.com',
        password: 'q4t39u',
    },


];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;