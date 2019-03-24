export interface APIResource {
  url: string;
}

export interface NamedAPIResource extends APIResource {
  name: string;
}
