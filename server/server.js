const jsonServer = require('json-server')
const fs = require('fs')
const path = require('path')

const seedFilePath = path.resolve(`${__dirname}/db-seed.json`)
const dbFilePath = `${__dirname}/db.json`

function checkDatabase() {
  if (!fs.existsSync(dbFilePath)) {
    process.stdout.write('Creating db.json using db-seed.json.\n')
    return seedDatabase()
  }
  return Promise.resolve()
}

function seedDatabase() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(seedFilePath)
      .pipe(fs.createWriteStream(dbFilePath))
      .on('error', err => {
        process.stderr.write(err)
        reject()
      })
      .on('close', () => {
        process.stdout.write('Done writing file.\n')
        resolve()
      })
  })
}

checkDatabase().then(() => {
  const server = jsonServer.create()
  const router = jsonServer.router(dbFilePath)
  const middlewares = jsonServer.defaults()

  server.use(middlewares)
  server.use(router)
  server.listen(3001, () => {
    process.stdout.write('JSON server is running\n')
  })
})
