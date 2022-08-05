import * as express from 'express'
import {BotController} from "../../controllers/bot/bot.controller";

export const BotRoutes = (app: express.Application) => {
    app.post('/message', BotController.sendMessageToChannel);
};