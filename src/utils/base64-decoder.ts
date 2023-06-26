function base64ToBytes(base64: string) {
  const binString = atob(base64) as any;
  return Uint8Array.from(binString, (m: any) => m.codePointAt(0));
}

export const base64ToString = (base64: string): string => {
  return new TextDecoder().decode(base64ToBytes(base64))
}