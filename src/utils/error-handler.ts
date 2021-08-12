// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function handleServiceError(error: any): string {
  return error?.data?.message || error?.message || error;
}
