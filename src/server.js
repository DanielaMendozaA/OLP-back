require('dotenv').config();
const { pool } = require('./config/database');
const app = require('./app');
const cors = require('cors');

const port = process.env.PORT || 4000;
// const allowedOrigin = 'https://olp-front-test-r0msw0mr6-aarfees-projects.vercel.app/'

// //Configure CORS
// app.use(cors({
//   origin: allowedOrigin,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }))

// Prueba la conexión a la base de datos
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  } else {
    console.log('Conexión a la base de datos exitosa:', res.rows);
    app.listen(port, () => {
      console.log(`Servidor ejecutándose en http://localhost:${port}`);
    });
  }
});
