
const sqlQuery = `SELECT *
  FROM \`bucket-b4d65759-3302-dcb0-e913-3016708a967e\``


const {BigQuery} = require('@google-cloud/bigquery');
const bigqueryClient = new BigQuery();


 
const options = {
  query: sqlQuery,
  location: 'US',
};

async function test() {
  const [rows] = await bigqueryClient.query(options);
}

test()
