/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function handleServiceError(message: any): string {
  return message?.did_you_mean || message?.error || message;
}
