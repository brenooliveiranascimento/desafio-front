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
}

export interface appearanceTypes {
  'eye-color': string,
  gender: string,
  'hair-color': string,
  weight: [string]
}

export interface heroTypes {
  id: string,
  image: imageType,
  name: string,
  powerstats: powerstatsTypes,
  appearance: appearanceTypes,
}
