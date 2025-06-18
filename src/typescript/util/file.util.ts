export class FileUtils {

  public static getFileSize(fileSize: number): String {
    const marker = 1024; 
    const decimal = 3; 
    const kiloBytes = marker; 
    const megaBytes = marker * marker; 
    const gigaBytes = marker * marker * marker; 
    const teraBytes = marker * marker * marker * marker; 

    
    if (fileSize < kiloBytes) return `${fileSize} Bytes`;
    
    else if (fileSize < megaBytes) return `${(fileSize / kiloBytes).toFixed(decimal)} KB`;
    
    else if (fileSize < gigaBytes) return `${(fileSize / megaBytes).toFixed(decimal)} MB`;
    
    else return `${(fileSize / gigaBytes).toFixed(decimal)} GB`;
  }

  public static sizeValidate(fileSize: number): number {
    const marker = 1024; 
    const decimal = 3; 
    const kiloBytes = marker; 
    const megaBytes = marker * marker; 
    const gigaBytes = marker * marker * marker; 
    const teraBytes = marker * marker * marker * marker; 

    
    if (fileSize < kiloBytes) return 1;
    
    else if (fileSize < megaBytes) return 2;
    
    else if (fileSize < gigaBytes) return 3;
    
    else return 4;
  }


  public static extensionValid(allowedFiles: any, file: any): boolean {

    const extensions = allowedFiles.split(',').map(
      (obj: any) => obj.trim()
    );

    const type = `.${file.name.split('.').reverse()[0]}`;

    if (extensions.includes(type)) {
      return true;
    }

    return false;
  }


  getExtensionState(allowedFiles: any, extension: string): object {
    const type = extension.split('/').length > 1 ? `.${ extension.split('/')[1]}` : extension;
    const acceptExtensions = allowedFiles.split(',').map((x: any) => x.trim());

    if (!acceptExtensions.includes(type.toLowerCase())) {
      return {
        error: 'ERROR',
        message: 'El formato no es soportado'
      }
    } else {
      return {
        error: 'SUCCESS',
        message: ''
      }
    }
  }

  getUploadState(size: number, allowedSize: number): object {

    if (size > (1024 * 1024 * allowedSize)) {
      return {
        error: 'ERROR',
        message: `El archivo supera los ${allowedSize} MB`
      }
    } else {
      return {
        error: 'SUCCESS',
        message: ''
      }
    }
  }
}
