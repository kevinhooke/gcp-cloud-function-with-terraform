const functions = require('@google-cloud/functions-framework');

// Register a CloudEvent function with the Functions Framework
functions.cloudEvent('helloWorld', cloudEvent => {

    console.log("helloWorld Cloud Run Function triggered");

});