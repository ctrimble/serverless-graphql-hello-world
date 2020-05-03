import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import {RestApi, LambdaIntegration} from "@aws-cdk/aws-apigateway";

export class HelloWorldStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const handler = new lambda.Function(this, 'hello-world-endpoint', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler.handler',
      code:    lambda.Code.fromAsset("dist")
    });

    const api = new RestApi(this, "hello-world-api", {
      restApiName: "Hello World API",
      description: "GraphQL based hello world"
    });

    const integration = new LambdaIntegration(handler);

    api.root.addMethod("POST", integration);
  }
}
