import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutationlogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email:, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;
 export const ADD_USER = gql`
 mutation addUser($id: ID!) {
     addUser(userId: $id) {
         _id
         username
         bookCount
     }
 }
 `;

 export const SAVE_BOOK = gql`
 mutation saveBook($)
 `;

 export const REMOVE_BOOK = gql`
 
 `;
