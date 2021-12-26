const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
async function myBuckets() {
  try {
    const results = await storage.getBuckets();
    const [buckets] = results;
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}
myBuckets();
