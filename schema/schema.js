const mongoose = require('mongoose');
const graphql = require('graphql');


const Player = mongoose.model('player');
const Gamelog = mongoose.model('gamelog');


const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
} = graphql;


const PlayerType = new GraphQLObjectType({
    name: 'Player',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        birthDate: { type: GraphQLString },
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        players: {
            type: new GraphQLList(PlayerType),
            resolve() {
                return Player.find({});
            }
        },
        player: {
            type: new GraphQLList(PlayerType),
            args: { 
                firstName: { type: new GraphQLNonNull(GraphQLString) }, 
                lastName: { type: new GraphQLNonNull(GraphQLString) } 
            },
            resolve(parentValue, { firstName, lastName }) {
                return Player.where('firstName').equals(firstName).where('lastName').equals(lastName);
            } 
        }
    })
});


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPlayer: {
            type: PlayerType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                birthDate: { type: GraphQLString },
            },
            resolve(parentValue, { firstName, lastName, birthDate }) {
                return (new Player( { firstName, lastName, birthDate } )).save()
            }
        }
    }
});

module.exports = new GraphQLSchema ({
    query: RootQuery,
    mutation,
});