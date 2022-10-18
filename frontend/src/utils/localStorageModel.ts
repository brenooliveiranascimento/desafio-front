export const updateLocalStore = (key: string, value: any) => localStorage
  .setItem(key, JSON.stringify(value));

export const getLocalStorage = (key:any) => {
  const localStore = localStorage.getItem(key);
  return localStore;
};
