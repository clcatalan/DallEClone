import mongoose from 'mongoose';

const connectDb = (url) => {
    //useful for when using any type of search functionality
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('Mongo DB Connected'))
        .catch((err) => console.log(err));
}

export default connectDb;