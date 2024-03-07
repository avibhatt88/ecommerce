// src/app.js


// src/app.js


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');
const masterRoutes = require('./routes/masterRoutes');
// const departmentRoutes = require('./routes/departmentRoutes');       


const app = express();

app.use(
    cors({
      origin: '*',
    }),
  )

app.use(bodyParser.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






// // src/app.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');
// const masterRoutes = require('./routes/masterRoutes');
// const departmentRoutes = require('./routes/departmentRoutes');

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());

// Add your database configuration here (config/dbConfig.js)

// Use routes
// app.use('/api/auth', authRoutes);
// app.use('/api', masterRoutes);
// app.use('/api', departmentRoutes);

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
