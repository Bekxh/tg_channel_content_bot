import * as express from "express";
import { errorHandler } from "../utils/error-handler";
import { BotRoutes } from "./bot/bot.routes";
import { IncomingMessage, ServerResponse } from "http";

function nestedRoutes(this: any, path: any, configure: (arg0: any) => void) {
    const router = express.Router({ mergeParams: true });
    this.use(path, router);
    configure(router);
    return router;
}

// @ts-ignore
express.application['prefix'] = nestedRoutes;
// @ts-ignore
express.Router['prefix'] = nestedRoutes;

const expressRouter = express.Router({ mergeParams: true });

export const routes = (app: (req: IncomingMessage, res: ServerResponse) => void) => {

    // @ts-ignore
    expressRouter['prefix']('/api', app => {

        app['prefix']('/bot', (bot: any) => {
            BotRoutes(bot)
        });

    })
    // @ts-ignore
    app.use(expressRouter);
    // @ts-ignore
    app.use(errorHandler);
};
