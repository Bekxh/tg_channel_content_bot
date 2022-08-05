import { Context, Telegraf } from 'telegraf';
import { Update } from 'typegram';
import { MessageModel } from "./models/message.model";


export class Bot {

    private static bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);

    static start() {

        this.bot.start((ctx) => ctx.reply('Hello ' + ctx.from.first_name + '!'));

        this.bot.launch();
    }

    static  send(messageOptions: MessageModel) {
        let lastMessageSentDate: number | undefined;
        this.bot.telegram.sendMessage(messageOptions.channelUsername, messageOptions.message)
            .then((response) => {
                console.log('lastMessageSentDate: ', lastMessageSentDate);
                console.log("THEN: ", response.date);
                lastMessageSentDate = response.date;
            }).catch((error) => {
                console.log('BOT SEND ERROR: ', error);
            });

    }

}