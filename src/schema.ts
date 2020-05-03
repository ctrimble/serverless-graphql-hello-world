import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Hello',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});