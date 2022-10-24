export const updateLocalStore = (key: string, value: any) => localStorage
  .setItem(key, JSON.stringify(value));

export const getLocalStorage = (key:string) => {
  const localStoreResult = JSON.parse(localStorage.getItem(key) || '{}');
  return localStoreResult;
};
