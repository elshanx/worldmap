import { useEffect, useState } from 'react';
import { getAllCountries } from '../services/countries';
import type { CountryT } from '../types';

const TEN_MINUTES_IN_MS = 600000;

export function useCountries() {
  const [countries, setCountries] = useState<CountryT[]>([]);

  const fetchData = async () => {
    const data = await getAllCountries();
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchData, TEN_MINUTES_IN_MS);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { countries };
}
