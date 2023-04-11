import axios from "axios";
import {DataManager} from "../db/DataManager";

export class TelegramBot {

  public static async sendMessage(text: string) {
    const settings = await DataManager.getSettings();

    const botId = `bot${settings.telegramBotApi}`;
    const chatId = `chat_id=${settings.telegramChatId}`;
    const parseMode = 'parse_mode=HTML';
    const textPayload = `text=${text}`;


    return axios.post(`https://api.telegram.org/${botId}/sendMessage?${chatId}&${parseMode}&${textPayload}`);
  }

}