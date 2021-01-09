// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        email: String
        bookCount: Int
        savedBooks: [bookType]
    }

    type Book {
        bookID: ID
        authors: []
        description: String
        title: String
        image: ?
        link: ?
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query: {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(): User
        removeBook(): User
    }
`;

module.exports = typeDefs;