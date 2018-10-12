'use strict'

const { makeExecutableSchema } = require('graphql-tools')

// Define our schema using the GraphQL schema language
const typeDefs = `
  type User {
    id: Int!
    username: String!
    email: String!
    posts: [Post]
  }
  type Post {
    id: Int!
    title: String!
    slug: String!
    content: String!
    user: User!
  }
`

type Query {
  allUsers: [User]
  fetchUser(id: Int!): User
  allPosts: [Post]
  fetchPost(id: Int!): Post
}
