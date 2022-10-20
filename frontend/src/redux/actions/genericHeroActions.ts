export const genericUpdateLists = (type: string, id: any) => ({
  type,
  payload: id,
});

export const setChartes = (chartes: any, type: string) => ({
  type,
  payload: chartes,
});

export const updateLoad = (type: string) => ({
  type,
});

export const charterControl = (type: string, id: number, filter: string) => ({
  type,
  id,
  filter,
});
