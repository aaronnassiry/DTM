'use strict';
function main() {
  const {BigQuery} = require('@google-cloud/bigquery');
  const loadData = new BigQuery();
  const metadata = {
    sourceFormat: 'CSV',
    schema: {
      fields: [
        {name: 'Timestamp', type: 'STRING'},
        {name: 'Request_Type', type: 'STRING'},
        {name: 'Request_Number', type: 'STRING'},
        {name: 'Source_IP', type: 'STRING'}
      ],
    },
    writeDisposition: 'WRITE_TRUNCATE',
    location: 'US',
  };

  async function loadLocalCSVFile() {
    const filename = '../weblog.csv';
    const datasetId = 'public_b2a8cfd0c03826ed';
    const tableId = 'bucket-b4d65759-3302-dcb0-e913-3016708a967e';
    
    try {
      const [job] = await loadData
      .dataset(datasetId)
      .table(tableId)
      .load(filename, metadata);
      console.log(`Job ${job.id} completed.`);
    } catch (error) {
      console.error(error);
    }
  }

  loadLocalCSVFile();
}
main();
