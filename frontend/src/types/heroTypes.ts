export interface imageType {
  url: string
}

export interface powerstatsTypes {
  combat: string,
  durability: string,
  inteligence: string,
  power: string,
  speed: string,
  strength: string
  [key: string]: any;
}

export interface appearanceTypes {
  'eye-color': string,
  gender: string,
  'hair-color': string,
  weight: string
}

export interface biographyType {
  aliases: Array<string>,
  alignment: string,
  'alter-egos': string,
  'first-appearance': string,
  'full-name': string,
  'place-of-birth': string,
  publisher: string,
}

export interface connectionsTypes {
  'group-affiliation': string,
  relatives: string,
}

export interface workTypes {
  base: string,
  occupation: string,
}

export interface heroTypes {
  id: string,
  image: imageType,
  name: string,
  powerstats: powerstatsTypes,
  appearance: appearanceTypes,
  biography: biographyType,
  connections: connectionsTypes,
  work: workTypes,
  response?: boolean
}

export interface heroModulesTypes {
  [key: string]: any;
  charter: Array<heroTypes>,
  filters: any,
  currFilter: string,
  countShow: number,
  load: boolean,
}

export interface heroActionTypes {
  type: string,
  payload: any
  id?: number
  filter: string
}
