const express = require('express');
import * as http from 'http';
const morgan = require('morgan');
import cors from 'cors';
import * as swaggerUi from 'swagger-ui-express';
import { routes } from "./routes";
const swagger = require('../swagger');
import * as dotenv from 'dotenv';
dotenv.config();
import { Bot } from "./bot";

class ServerModule {

    public host;
    public port;
    public http: http.Server | undefined;
    public app: any;

    constructor() {
        this.host = process.env.HOST;
        this.port = process.env.PORT
        this.start();
    }

    private start() {
        this.app = express();
        this.http = http.createServer(this.app);
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(morgan('combined'));
        this.app.use((req: any, res: any, next: any) => {
            res.setHeader('Access-Control-Expose-Headers', 'original_name, Content-Disposition')
            next();
        })
        this.app.use('/swagger', swaggerUi.serve, (req: any, res: any) => {
            let html = swaggerUi.generateHTML(swagger);
            res.send(html);
        })
        routes(this.app)
        this.http.listen(
            this.port,
            // @ts-ignore
            console.log(`Server running on http://${this.host}:${this.port}`)
        )
        Bot.start();
    }

}

new ServerModule();