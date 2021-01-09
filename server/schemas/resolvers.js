// Define query and mutation functionality

const { AuthenticationError } = require('apollo-server-express');
// import models 
const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    }
};

module.exports = resolvers;