import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cdk from "@aws-cdk/core";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as dynamodb from "@aws-cdk/aws-dynamodb";

export class GitUploadtestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let dataBase = new dynamodb.Table(this,"Sharjeel_table",{
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey:{
        name: "id",
        type:dynamodb.AttributeType.STRING 
      },
    });
    let a= "";

  }
}
