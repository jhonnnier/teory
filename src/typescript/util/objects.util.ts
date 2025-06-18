export class Objects {

  public static listNullOrEmpty(list: any[]): boolean {

    if (list === undefined || list === null || list.length === 0) {
      return true;
    }

    return false;
  }

  public static isNullOrEmpty(object: any): boolean {

    if (object === undefined || object === null || object.length === 0) {
      return true;
    }

    return false;
  }

  public static cleanObjects = (obj: any): any => {
    if (this.isNullOrEmpty(obj)) return {};
  
    Object.keys(obj).forEach(key => {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    });

    return obj;
  }
  
  public static objectToString(obj: Record<string, any>): string {
    let result = '{';

    const keys = Object.keys(obj);
    const lastKey = keys[keys.length - 1];

    keys.forEach((key) => {
      const value = obj[key];

      result += key + ': ';

      if (typeof value === 'number' || typeof value === 'boolean') {
        result += value + ',';
      } else if (typeof value === 'string') {
        result += '"' + value + '",';
      } else if (typeof value === 'object' && value !== null) {
        result += this.objectToString(value) + ',';
      }

      if (key === lastKey) {
        result = result.slice(0, -1);
      }
    });

    result += '}';
    return result;
  }

}
