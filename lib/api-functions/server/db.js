import mongoose from 'mongoose';

const { DB_URL = 'mongodb+srv://shop-admin:xaPHImPGwIBBcj8o@cluster0.t6fpy6s.mongodb.net/?retryWrites=true&w=majority' } = process.env;

main().catch((err) => logger.error(err));

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log('DB Connected');
  } catch (err) {
    console.error(err);
  }
}
