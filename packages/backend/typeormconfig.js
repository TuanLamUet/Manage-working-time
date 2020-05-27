exports.dbconfig = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'tuan',
  password: '123456789',
  database: 'test',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
}