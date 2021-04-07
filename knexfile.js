module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:'cluckr',
      username: "me2",
      password: " "
    },
    migrations:{
      tableName:'migrations',
      directory:"./db/migrations"
    },
    seeds:{
      directory:"./db/seeds"
    }
  }
};