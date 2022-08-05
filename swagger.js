module.exports = {
    openapi: '3.0.3',
    info: {
        version: '1.0.0',
        title: 'Swagger UI for Telegram channels content maker bot.',
        description: 'This documentation for Telegram channels content maker bot. Made by nodejs, expressjs, typescript.',
        termsOfService: '',
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT'
        }
    },
    servers: [
        {
            url: 'http://localhost:9000/api',
            description: 'Local server'
        }
    ],
    tags: [
        {
            name: "Bot",
            description: "Bot methods"
        }
    ],
    "paths": require('./swagger/path'),
    components: {
        schemas: require('./swagger/components'),
        securitySchemes: {
            // Bearer: {
            //     type: 'apiKey',
            //     in: 'header',
            //     name: 'authorization',
            //     description: 'Enter your bearer token in the format **Bearer &lt;token>**'
            // }
        }
    }
};