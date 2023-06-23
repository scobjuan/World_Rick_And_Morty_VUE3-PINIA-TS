import ILocationModel from './ILocationModel';

export default interface ICharacter {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  status: string;
  url: string;
  image: string;
  origin: ILocationModel;
  location: ILocationModel;
  episode: string[];
  created: string;
}
