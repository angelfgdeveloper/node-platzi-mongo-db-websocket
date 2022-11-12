const mongoose = require('mongoose');

const connect = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('[db] Conectada con éxito');
    
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de inicializar la DB, ver logs');
  }
}

// (async()=> await dbConnection())();

module.exports = connect;