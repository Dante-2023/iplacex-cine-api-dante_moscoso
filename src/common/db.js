import {MongoClient, ServerApiVersion} from 'mongodb'

//const uri ='mongodb+srv://eva3_express:j5YhK7oDqI7M1cxp@cluster-express.f66dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-express'


const uri ='mongodb+srv://eva3_express:j5YhK7oDqI7M1cxp@cluster-express.snnmc.mongodb.net/cine-db?retryWrites=true&w=majority&appName=cluster-express'

const client =new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }

})

export default client