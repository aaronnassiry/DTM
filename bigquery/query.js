const sqlQuery = `SELECT *
  FROM \`public_b2a8cfd0c03826ed.bucket-b4d65759-3302-dcb0-e913-3016708a967e\``
const {BigQuery} = require('@google-cloud/bigquery');
const bigqueryClient = new BigQuery();

const options = {
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: process.env.GOOGLE_APPLICATION_PROJECT_ID,
  defaultDataset: {
    datasetId: process.env.BIGQUERY_DATASET_ID,
    projectId: process.env.GOOGLE_APPLICATION_PROJECT_ID
  },
  query: sqlQuery,
  location: 'US',
};

async function test() {
  const [rows] = await bigqueryClient.query(options);
  rows.forEach(row => console.log(row));
}

test()
