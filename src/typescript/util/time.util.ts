import moment from 'moment';

export class TimeUtils {

  public static currentDate(format: string | null = "DD/MM/YYYY HH:mm:ss"): any {
      return format !== null ?  moment().format(format) : moment().toDate();
  }

  public static calculateAgeFromString(date: any): string {
    if (date) {
      let myDate = date;
      myDate = myDate.split("/");
      let newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
      return this.calculateAge(newDate.toDateString());
    }

    return '';
  }

  public static changeFormatDateBff(date: Date | null){
    if(date) {
      return moment(date).format('DD/MM/yyyy');
    }
    return '';
  }

  public static formatDate(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }

  public static calculateAge(date: string): string {
    const currentDate = moment();
    const birtdate = moment(date);

    const years = currentDate.diff(birtdate, 'years');

    if (years >= 1) {
      return `${years} año(s)`;
    }

    const months = currentDate.diff(birtdate, 'months');

    if (months >= 1) {
      return `${months} mes(es)`;
    }

    const days = currentDate.diff(birtdate, 'days');

    if (days >= 1) {
      return `${days} días`;
    }

    return '';
  }

  public static addZeroLessThanNine(day: number): string {
    return day < 10 ? `0${day}` : day.toString();
  }

  public static firstHourDay(date: Date): any {
    const dateConverted = `${date.getFullYear()}-${this.addZeroLessThanNine(date.getMonth() + 1)}-${this.addZeroLessThanNine(date.getDate())} 00:00:00.000`;
    return moment(dateConverted);
  }

  public static lastHourDay(date: Date): any {
    const dateConverted = `${date.getFullYear()}-${this.addZeroLessThanNine(date.getMonth() + 1)}-${this.addZeroLessThanNine(date.getDate())} 00:00:00.000`;
    return moment(dateConverted).add(1, 'days');
  }

  public static dateToMomentGreaterThanDateFrom(dateFrom: any, dateTo: any): any {
    const dateFromAux = moment(`${dateFrom.year()}-${dateFrom.month() + 1}-${dateFrom.date()}`);
    const dateToAux = moment(`${dateTo.year()}-${dateTo.month() + 1}-${dateTo.date()}`);

    if (dateFromAux > dateToAux) {
      return true;
    } else {
      return false;
    }
  }
}
