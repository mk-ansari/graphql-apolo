import {ApolloServer} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import typeDefs from './schemaGql.js'
import jwt from 'jsonwebtoken';

import { JWT_SECRET, DB_CONFIG } from "./config.js";

// connect database
DB_CONFIG();

//import models here
import './models/Quotes.js'
import './models/User.js'

import resolvers from './resolvers.js'

const context = ({req})=>{
    const { authorization } = req.headers;
    // console.log("token ",req.headers);
    if(authorization){
     const {userId} = jwt.verify(authorization,JWT_SECRET)
     return {userId}
    }
}

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});