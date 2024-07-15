import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

export const encrypt = (text: string) => {
  const password = import.meta.env.VITE_PASSWORD as string;
  if (password === undefined) throw new Error("VITE_PASSWORD is undefined");

  const ciphertext = AES.encrypt(text, password).toString();
  return ciphertext;
};

export const decrypt = (ciphertext: string) => {
  const password = import.meta.env.VITE_PASSWORD as string;
  if (password === undefined) throw new Error("VITE_PASSWORD is undefined");

  const bytes = AES.decrypt(ciphertext, password);
  const originalText = bytes.toString(Utf8);
  return originalText;
};
