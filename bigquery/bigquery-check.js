'use strict';

function main(datasetId = 'my_dataset', tableId = 'my_table') {
  const {BigQuery} = require('@google-cloud/bigquery');
  const {Storage} = require('@google-cloud/storage');

  // Instantiate clients
  const bigquery = new BigQuery();
  const storage = new Storage();

  /**
   * This sample loads the CSV file at
   * https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.csv
   *
   * TODO(developer): Replace the following lines with the path to your file.
   */
  const bucketName = 'bucket-b4d65759-3302-dcb0-e913-3016708a967e';
  const filename = '../weblog.csv'

  async function loadCSVFromGCS() {
    // Imports a GCS file into a table with manually defined schema.

    const datasetId = 'public_b2a8cfd0c03826ed';
    const tableId = 'my_table';

    // Configure the load job. For full list of options, see:
    // https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationLoad
    const metadata = {
      sourceFormat: 'CSV',
      skipLeadingRows: 1,
      schema: {
        fields: [
          {name: 'name', type: 'STRING'},
          {name: 'post_abbr', type: 'STRING'},
        ],
      },
      location: 'US',
    };

    // Load data from a Google Cloud Storage file into the table
    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .load(storage.bucket(bucketName).file(filename), metadata);

    // load() waits for the job to finish
    console.log(`Job ${job.id} completed.`);

    // Check the job's status for errors
    const errors = job.status.errors;
    if (errors && errors.length > 0) {
      throw errors;
    }
  }
  // [END bigquery_load_table_gcs_csv]
  loadCSVFromGCS();
}
main(...process.argv.slice(2));
