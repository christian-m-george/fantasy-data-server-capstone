module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'DATABASE_URL=postgres://lztsoqxstgfzdq:bd31be8b59760ea56c93ab12152f93df71369c8fb292b2f49180fe597c7ff9fe@ec2-50-17-90-177.compute-1.amazonaws.com:5432/d4if01mt6cjg7g',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres@localhost/fantasydata',
  JWT_SECRET: process.env.JWT_SECRET 
}

// module.exports = {
//   PORT: process.env.PORT || 8000,
//   NODE_ENV: process.env.NODE_ENV || 'development',
//   DATABASE_URL: process.env.DATABASE_URL || 'postgres://wpwzydkrbezeae:67168dba7196917181b894a39dfc9269884091702332716231fc0bf7e416e90e@ec2-50-17-90-177.compute-1.amazonaws.com:5432/d51ji796ck9vt2',
//   TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://christiangeorge@localhost/fantasydata',
//   JWT_SECRET: process.env.JWT_SECRET 
// }

