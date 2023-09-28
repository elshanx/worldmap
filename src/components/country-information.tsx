import { CountryT } from '../types';

const CountryInformation = (c: CountryT) => {
  return (
    <>
      <p>
        {c.flag} Capital city: {c.capital}
      </p>
      <p>{c.area}</p>
      <p>Region: {c.region}</p>
      <p>Population: {c.population}</p>
    </>
  );
};

export default CountryInformation;
