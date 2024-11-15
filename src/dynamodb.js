// lib/dynamodb.js
const AWS = require('aws-sdk');

// Configure the AWS SDK to use DynamoDB Local
const dynamoDb = new AWS.DynamoDB({
    region: 'ap-south-1',
    endpoint: 'http://localhost:8000', // Local endpoint for DynamoDB Local
    accessKeyId: '123',        // Use fake credentials for local usage
    secretAccessKey: '123',
});

const documentClient = new AWS.DynamoDB.DocumentClient({
    service: dynamoDb,
});

module.exports = { dynamoDb, documentClient };