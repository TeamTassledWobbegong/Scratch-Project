const { Pool } = require('pg');

const connectionString = 'postgres://rxjrbfhn:A3rUkbCTey2vsmrky_0hnI4y-r6l5aIC@castor.db.elephantsql.com/rxjrbfhn';

const pool = new Pool({
  connectionString
});

module.exports = pool;
