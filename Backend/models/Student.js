const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    index: {
        type: String, 
        required: true // Make sure it's required if needed
      },

    name : {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    registeredDate: {
        type: Date,
        default: Date.now, 
      },

})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;