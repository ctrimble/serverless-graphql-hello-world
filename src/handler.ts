import {APIGatewayEvent, Handler} from "aws-lambda"
import {ExecutionArgs} from "graphql"
import { graphql } from 'graphql'
import schema from './schema'
var query = '{ hello }';

var root = {
  hello: () => {
    return 'Hello world!';
  }
}
export const handler: Handler = async ( event: APIGatewayEvent ): Promise<any> =>{
  if( !event.body ) throw new Error("invalid");
  const args: ExecutionArgs = JSON.parse(event.body);
  return graphql(schema, query, root)
    .then((result) => {
      return result;
    }).then(result=>{
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      }
    });
}