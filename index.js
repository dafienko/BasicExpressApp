const express = require('express');

const PORT = 9000;

const app = express();

app.use(require('cors')({origin: '*'}));

app.get('/', (req, res) => {
	res.send('Hello blud');
});

app.listen(PORT, () => {
	console.log('express running');
});