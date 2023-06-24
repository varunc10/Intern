const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const User = require('./schema'); // Assuming you have a User model defined
const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })


const exportUsersToCsv = async () => {
    try {
        const users = await User.find({}, { __v: 0 }); // Fetch all users from the database, excluding the "__v" field

        const csvWriter = createCsvWriter({
            path: 'users.csv',
            header: [
                { id: 'name', title: 'Name' },
                { id: 'email', title: 'Email' },
                { id: 'gender', title: 'Gender' },
                { id: 'status', title: 'Status' },
            ],
        });

        await csvWriter.writeRecords(users);

        console.log('CSV file created successfully');
    } catch (error) {
        console.error('Error exporting users to CSV:', error);
    }
};

exportUsersToCsv();
