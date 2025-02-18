const cloudinary = require('cloudinary').v2;

const connectCloudinary = async () => {
  try {
    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log('Cloudinary connected');
  } catch (error) {
    console.log('Cloudinary connection error');
  }
};

module.exports = connectCloudinary;
