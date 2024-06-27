const stringToU8Array = (str: string) => new TextEncoder().encode(str);
const base64ToU8Array = (str: string) =>
  Uint8Array.from(Buffer.from(str, 'base64'));

export { base64ToU8Array, stringToU8Array };
