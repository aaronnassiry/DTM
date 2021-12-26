const bucketName = 'bucket-b4d65759-3302-dcb0-e913-3016708a967e';
const filename = '../weblog.csv';
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

async function uploadFile() {
  await storage.bucket(bucketName).upload(filename, {
    gzip: true,
    metadata: {
      cacheControl: 'public, max-age=31536000',
    },
  });

  console.log(`${filename} uploaded to ${bucketName}.`);
}
uploadFile();
