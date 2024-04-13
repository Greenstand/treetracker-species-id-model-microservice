const AWS = require('aws-sdk');

// Configure AWS to use your credentials and the region where your endpoint is located
AWS.config.update({
  region: 'us-west-2', // Change to your region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const sagemakerRuntime = new AWS.SageMakerRuntime();


function invokeSageMakerEndpoint(endpointName, inputData) {
  const params = {
    EndpointName: endpointName, // Your SageMaker endpoint name
    Body: JSON.stringify(inputData),
    ContentType: 'image/json', // Change if your model expects a different content type
    Accept: 'application/json'
  };

  sagemakerRuntime.invokeEndpoint(params, (error, data) => {
    if (error) {
      console.error("Error invoking SageMaker endpoint:", error);
    } else {
      console.log("Response from SageMaker:", data.Body.toString('utf-8'));
    }
  });
}

// Example usage
const endpointName = 'your-endpoint-name';
const inputData = { /* your input data for the model */ };
invokeSageMakerEndpoint(endpointName, inputData);
