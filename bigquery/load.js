'use strict';

function main(
) {
  const {BigQuery} = require('@google-cloud/bigquery');
  const loadData = new BigQuery();
  const metadata = {
    sourceFormat: 'NEWLINE_DELIMITED_JSON',
    schema: {
      fields: [
        {name: 'Timestamp (UTC)', type: 'STRING'},
        {name: 'Request Type', type: 'STRING'},
        {name: 'Request Number', type: 'STRING'},
        {name: 'Request Type', type: 'STRING'},
        {name: 'Source IP', type: 'STRING'}
      ],
    },
    writeDisposition: 'WRITE_TRUNCATE',
  };

  async function loadLocalCSVFile() {
    const filename = '../weblog.csv';
    const datasetId = 'public_b2a8cfd0c03826ed';
    const tableId = 'bucket-b4d65759-3302-dcb0-e913-3016708a967e';
    const [job] = await loadData
      .dataset(datasetId)
      .table(tableId)
      .load(filename, metadata);
    console.log(`Job ${job.id} completed.`);
  }
  loadLocalCSVFile();
}

main();
