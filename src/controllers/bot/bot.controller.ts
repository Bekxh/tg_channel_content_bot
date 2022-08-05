import {ErrorService} from "../../utils/error-service";
import * as dotenv from 'dotenv';
dotenv.config();
import { Bot } from "../../bot";

export class BotController {

    static async sendMessageToChannel(req: any, res: any) {
        try {
            Bot.send({
                channelUsername: req.body.channelUsername,
                message: req.body.message,
                priority: req.body.priority
            });
            res.send({
                success: true
            })
        } catch (error) {
            return ErrorService.error(res, error)
        }
    }
}