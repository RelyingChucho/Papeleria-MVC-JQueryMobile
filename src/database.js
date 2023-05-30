const mongoose = require('mongoose');
//Conexion a Mongo atlas
mongoose.connect('mongodb+srv://albertofw70:J&j240522@clusterjesus.40themc.mongodb.net/papeleriadb?retryWrites=true&w=majority')
.then(db=> console.log("MongoDB Conectado"))
.catch(err=> console.error(err));

