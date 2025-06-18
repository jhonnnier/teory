import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import moment from 'moment';
import { Invoice as InvoiceModel } from '../../../../src/app/@shared/models/invoice.model';
import { Invoice } from '../interfaces/invoice.interfaces';
import { FileCustom } from '../models/file.model';

export class Utils {
  

  public static getFileSize(fileSize: number): String {
    const marker = 1024; 
    const decimal = 2; 
    const kiloBytes = marker; 
    const megaBytes = marker * marker; 
    const gigaBytes = marker * marker * marker; 
    const teraBytes = marker * marker * marker * marker; 

    
    if (fileSize < kiloBytes)
      return `${fileSize} Bytes`;
    
    else if (fileSize < megaBytes)
      return `${(fileSize / kiloBytes).toFixed(decimal)} KB`;
    
    else if (fileSize < gigaBytes)
      return `${(fileSize / megaBytes).toFixed(decimal)} MB`;
    
    else return `${(fileSize / gigaBytes).toFixed(decimal)} GB`;
  }

  public static convertToMegaBytes(fileSize: number): number {
    const marker = 1024; 
    const decimal = 3; 
    const kiloBytes = marker; 
    const megaBytes = marker * marker; 
    const gigaBytes = marker * marker * marker; 
    const teraBytes = marker * marker * marker * marker; 

    
    if (fileSize < kiloBytes)
      return fileSize * kiloBytes;
    else if (fileSize < megaBytes)
      return fileSize * megaBytes;
    else if (fileSize < gigaBytes)
      return fileSize * gigaBytes;
    else return 4;
  }

  static ellipsisAtTheEnd(text: string, length: number): string {
    return `${text.substring(0, length)}...`;
  }

  static ellipsisInTheMiddle(text: string, length: number): string {
    return `${text.substring(0, length)}...${text.substring(text.length - length, text.length)}`;
  }

  static moveScrollToTopToElementID(id: string): void {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({block: "end", behavior: "smooth"});
    }
  }

  static deleteMainURL(url: string): string {
    
    if (!url) return '';

    let urlToReturn: string = '';
    const urlModified: string = url.split('//').splice(1, 1).toString();
    const newArray = urlModified.split('/');
    newArray.splice(0, 1);
    newArray.forEach((partURL: string, ix: number) => {
      if (ix > 0) urlToReturn += '/';
      urlToReturn += partURL;
    });
    return urlToReturn;
  }

  static removeSpecialChars(str: string): string {
    return str.replace( /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi, '');
  }

  static containsSpecialChars(str: string): boolean {
    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
  }

  static currencyDecimals: number = 2;

  static currencyPrecision: string = `1.0-${this.currencyDecimals.toString()}`;

  static currencyCode: string = 'ARS';

  static locale: string = 'es-AR';

  public static getUTCDate(date: any) {

    if (date === undefined || date === null) {
      return date;
    } else {
      date = new Date(date);
    }

    return new Date(date.getUTCFullYear(),
                    date.getUTCMonth(),
                    date.getUTCDate(),
                    date.getUTCHours(),
                    date.getUTCMinutes(),
                    date.getUTCSeconds(),
                    date.getUTCMilliseconds());
  }

  public static getDateWithoutTime(date: any) {

    if (date === undefined || date === null) {
      return date;
    } else {
      date = new Date(date);
    }

    return new Date(date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      0,
      0,
      0,
      0);
  }

  /**
   * @static
   * @param {string} text string in which the text will be highlighted
   * @param {string} textToHighlight text that will be highlighted within the string
   * @return {string} innerHtml with the text highlighted with the \<strong>\</strong> tag
   * @memberof Utils
   */
  public static highlightText(text: string, textToHighlight:string){
    const regExp = new RegExp("(" + textToHighlight + ")", "gi")
    return text.replace(regExp, '<strong>$1</strong>');
  }

  public static base64StringToFile(base64String: string, fileName: string, mimeType: string) {
    const binaryString = atob(base64String);

    const array = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      array[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([array], { type: mimeType });

    return new File([blob], fileName, { type: mimeType });
  }

  public static getFileExtension = (filename: string): string | undefined =>  {
    const lastIndex = filename.lastIndexOf('.');

    if (lastIndex !== -1 && lastIndex !== 0 && lastIndex !== filename.length - 1) {
      const extension = filename.substring(lastIndex + 1);
      return extension;
    } else {
      return undefined;
    }
  }

  public static getRadicationNumber(invoice: Invoice | InvoiceModel): string {
    const isRadicationNumber = invoice?.radicationBranch && invoice?.radicationNumber && invoice?.radicationPointOfAttention && invoice?.radicationYear;

    return isRadicationNumber ?  `${invoice?.radicationYear}${invoice?.radicationBranch}${invoice?.radicationPointOfAttention}${invoice?.radicationNumber}` : '-';
  }

  public static viewFile(sanitizer: DomSanitizer, data: any, fileName: string): { pdfSrc?: SafeResourceUrl, imgSrc?: SafeUrl, blob?: Blob } {
    const result: { pdfSrc?: SafeResourceUrl, imgSrc?: SafeUrl, blob?: Blob } = {};
    const extension = Utils.getFileExtension(fileName);
    if (extension?.toLowerCase() === 'pdf') {
      const fileBlob = new Blob([data], { type: 'application/pdf' });
      const dataUrl = URL.createObjectURL(fileBlob);
      result.pdfSrc = sanitizer.bypassSecurityTrustResourceUrl(`${dataUrl}`);
      result.blob = fileBlob;
    } else {
      const fileBlob = new Blob([data]);
      const url = window.URL.createObjectURL(fileBlob);
      result.imgSrc = sanitizer.bypassSecurityTrustUrl(url);
      result.blob = fileBlob;
    }

    return result;
  }

  public static downloadFile(blob: Blob, fileName: string): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  public static getFormattedInvoiceNumber(invoice: Invoice): string {
    return invoice.prefix
           ? invoice.prefix + invoice.invoiceNumber
           : invoice.invoiceNumber
  }

  public static convertListToMap<T extends { id?: string | number | null }>(list: T[], keyId?: keyof T): Map<string, T> {
    const map = new Map<string, T>();

    list.forEach(item => {
      const key = keyId ? item[keyId] : item.id;
      if (key !== undefined && key !== null) {
        map.set(key.toString(), item);
      }
    });

    return map;
  }

  public static validateInput(input: string): boolean {
    
    const regex = /^(\d+)(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = input.match(regex);

    if (!match) {
        
        return false;
    }

    
    const day = match[2];
    const month = match[3];
    const year = match[4];

    
    const dateStr = `${day}-${month}-${year}`;
    const date = moment(dateStr, 'DD-MM-YYYY', true);

    if (!date.isValid()) {
        
        return false;
    }

    return true;
}

 static validateFileSizes(files: FileCustom[], maxSize: number): boolean {
  return files.every((file: any) => file.sizeNumber <= maxSize);
}

  static isValidUUID(uuid: string) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
}
