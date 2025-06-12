const express = require('express');
const app = express();
const port = 3000;
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/api', require('./routes/taskRoute'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
