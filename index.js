const section = document.querySelector('#country');

const getCountryByName = async (countryName) => {
    const response = await fetch ('https://restcountries.com/v3.1/name/' + countryName);
    const jsonData = await response.json();
    
    console.log(countryName);
};

getCountryByName('South Korea');
