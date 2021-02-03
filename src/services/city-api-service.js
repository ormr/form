import cities from '../../public/cities.json';

export class CityApiService {
  data = cities;

  getAll = () => {
    return this.data;
  };

  getBigCitiesOnly = () => {
    const newData = this.data
      .sort((data) => data.city)
      .filter((city) => +city.population > 50000);
    return newData;
  };
}
