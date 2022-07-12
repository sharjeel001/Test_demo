#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from "@aws-cdk/core";
import { GitUploadtestStack } from '../lib/git_uploadtest-stack';

const app = new cdk.App();
new GitUploadtestStack(app, 'GitUploadtestStack', {}); 