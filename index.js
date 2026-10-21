const mongoose = require('mongoose'); 
const MONGO_URI ='mongodb+srv://SaurabhDarnal:Mongoabi123@employee.k4lctr6.mongodb.net/'
const PersonSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        required: true 
    }, 
    age: Number, 
    gender: String, 
    salary: Number 
}); 
 
const Person = mongoose.model( 
    'modelname', 
    PersonSchema, 
    'personCollection' 
); 
 
// Function to insert one document 
async function insertOne() { 
 
    const doc1 = new Person({ 
        name: 'saurabh', 
        age: 23, 
        gender: 'Male', 
        salary: 50000 
    }); 
 
    const savedDoc = await doc1.save(); 
 
    console.log('One document inserted'); 
    console.log(savedDoc); 
}
async function main() { 
 
    try { 
 
        await mongoose.connect(MONGO_URI); 
        console.log(`Connected to ${MONGO_URI}`); 
 
        await insertOne(); 
 
        } catch (err) { 
 
        console.error('Error:', err); 
 
    } finally { 
 
        await mongoose.connection.close(); 
        console.log('Connection closed'); 
 
    } 
} 
 
main();