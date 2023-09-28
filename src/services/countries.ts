export const getAllCountries = async () => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    return await res.json();
  } catch (error) {
    //
  }
};
