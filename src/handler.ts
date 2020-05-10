import {APIGatewayEvent, Handler} from "aws-lambda"
import { graphql } from 'graphql'
import schema from './schema'

var root = {
  hello: () => {
    return 'Hello world!';
  },
  goodbye: () => {
    return 'Goodbye!';
  }
}
export const handler: Handler = async ( event: APIGatewayEvent ): Promise<any> =>{
  if( !event.body ) throw new Error("invalid");
  const body: {query: string} = JSON.parse(event.body);
  return graphql(schema, body.query, root)
    .then((result) => {
      return result;
    }).then(result=>{
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      }
    });
}