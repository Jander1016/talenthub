import { hash, compare } from "bcrypt";


export const generateHash = async(passwordVisible: string): Promise<string> =>{
  const salt = 10;
  const textToHash = await hash(passwordVisible, salt);

  return textToHash;
}

export const compareHash = async(passwordVisible: string, textHash : string): Promise<any> =>{
  return await compare(passwordVisible, textHash);
}