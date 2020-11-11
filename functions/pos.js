let posArray = [0, 0];
exports.handler = async (event) => {
  const pos = event.queryStringParameters.lat && event.queryStringParameters.lng ;
  
  console.log(JSON.stringify(posArray));

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(posArray),
  };
};
