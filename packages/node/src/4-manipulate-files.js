import fs from 'fs';

export const constManipulateFiles = async (filePathAndFileExtension) => {
  const fileRead = fs.readFileSync(filePathAndFileExtension, 'utf-8');

  const charsNumber = fileRead.length;

  return {
    text: fileRead,
    number_of_chars: charsNumber,
  };
};

export async function funcManipulateFiles(filePathAndFileExtension) {
  const fileRead = fs.readFileSync(filePathAndFileExtension, 'utf-8');

  const charsNumber = fileRead.length;

  return {
    text: fileRead,
    number_of_chars: charsNumber,
  };
}
