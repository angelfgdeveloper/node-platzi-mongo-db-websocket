const config = {
  dbUrl: process.env.CNN_MONGO_DB,
  port: process.env.PORT || 30001,
  host: process.env.HOST || 'https://mydomain.com',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files',
}

module.exports = config;