export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
    credentials: 'omit',
  });
  return res.json();
};
