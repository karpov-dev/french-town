import {IScheduleMessage} from "./types/IScheduleMessage";
import {TelegramBot} from "./TelegramBot";

export class ScheduleService {

  public static async sendTelegramScheduleMessage(message: IScheduleMessage) {
    const header = '<u>Запрос на звонок:</u>%0A'
    const name = `<b>Имя</b>: ${message.name}%0A`
    const phone = `<b>Номер</b>: ${encodeURIComponent(message.phone)}%0A`
    const reason = `<b>Причина</b>: ${message.reason ? message.reason : 'Не указана'}`

    return await TelegramBot.sendMessage(header + name + phone + reason);
  }

}