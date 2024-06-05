export type PlanetInfoType = {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  films: string[]
  created: string
  edited: string
  url: string
};

export type FiltersType = {
  column: string
  comparison: 'maior que' | 'menor que' | 'igual a'
  value: number
};

export type InputType = {
  label?: string
  id: string
  type?: string
  name: string
  placeholder: string
  dataTestid?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number
};

export type SelectType = {
  label: string
  id: string
  name: string
  dataTestid: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  value: string
  options: string[]
};
