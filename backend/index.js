const app = require('./app') // The Express app
const config = require('./utils/config')
const logger = require('./utils/logger')

app.get('/', (request, response) => {
	response.send('<h1>Hello World!</h1>')
})

app.listen(config.PORT, () => {
	logger.info(`Server running on port ${config.PORT}`)
})