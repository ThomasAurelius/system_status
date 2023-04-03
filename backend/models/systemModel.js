const mongoose = require('mongoose');

const systemSchema = mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      status: {
            type: String,
            required: true,
      },
      from: {
            type: String,
            required: true,
      },
      to: {
            type: String,
            required: true,
      },
      message: {
            type: String,
            required: false,
      },
   },
      { 
         timestamps: true, 
      }
   );

   module.exports = mongoose.model('System', systemSchema);