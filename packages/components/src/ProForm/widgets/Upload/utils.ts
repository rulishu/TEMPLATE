import { FileListType } from './types';

export const openFileDialog = (inputRef:any): void => {
  if (inputRef.current)  inputRef.current.click();
};

export const getAcceptTypeString = (accept?: Array<string>) => {
  return accept && accept.length > 0
    ? accept.map((item) => `.${item}`).join(', ')
    : 'image/*';
};

export const getBase64 = (file: File): Promise<string> => {
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.addEventListener('load', () => resolve(String(reader.result)));
    reader.readAsDataURL(file);
  });
};

export const getImage = (file: File): Promise<HTMLImageElement> => {
  const image = new Image();
  return new Promise((resolve) => {
    image.addEventListener('load', () => resolve(image));
    image.src = URL.createObjectURL(file);
  });
};

export const getListFiles = (
  files: FileList,
  dataURLKey: string
): Promise<FileListType> => {
  const promiseFiles: Array<Promise<string>> = [];
  for (let i = 0; i < files.length; i += 1) {
    promiseFiles.push(getBase64(files[i]));
  }
  return Promise.all(promiseFiles).then((fileListBase64: Array<string>) => {
    const fileList: FileListType = fileListBase64.map((base64, index) => ({
      [dataURLKey]: base64,
      file: files[index],
    }));
    return fileList;
  });
};
