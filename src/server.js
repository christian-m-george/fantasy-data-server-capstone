const knex = require('knex');
const cors = require('cors');
// const PlayerRouter = require('./playerData/player-data-router')

const app = require('./app');
const {
	PORT,
	DATABASE_URL
} = require('./config');

app.use(cors())

const db = knex({
	client: 'pg',
	connection: DATABASE_URL
})

app.set('db', db);

app.use(require('./playerData/player-data-router'));
app.use(require('./playerDetailData/player-detail-router'));


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})