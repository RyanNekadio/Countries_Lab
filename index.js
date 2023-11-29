const section = document.querySelector('#country');

const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();

    // // Display country name
    const commonName = jsonData[0].name.common;
    const officialName = jsonData[0].name.official;
    const nativeName = jsonData[0].name.nativeName;

    const displayCountryName = (countryName) => {
        const countryNameElement = document.createElement('p');
        countryNameElement.innerText = countryName;
        section.appendChild(countryNameElement);
    };

    if (countryName === commonName){
        displayCountryName(`Country name: ${commonName}`);
    } else if (countryName === officialName){
        displayCountryName(`Country name: ${officialName}`);
    } else {
        for (let name in nativeName) {
            const commonNameInLang = nativeName[name].common;
            const officialNameInLang = nativeName[name].official;
    
            if (countryName === commonNameInLang || countryName === officialNameInLang) {
                displayCountryName(`${commonNameInLang} (${name})`);
            }
        }
    };

    // Display capital city
    const capitalElement = document.createElement('p');
    capitalElement.innerText = 'Capital: ' + jsonData[0].capital[0];
    section.appendChild(capitalElement);

    // Display spoken languages
    let languagesString = 'Languages: ';
    const languages = jsonData[0].languages;
    for(let language in languages){
        if(languages.hasOwnProperty(language)){
            languagesString += `${language}: ${languages[language]}, `;
        }
    };

    languagesString = languagesString.slice(0, -2);

    const languageElement = document.createElement('p');
    languageElement.innerText = languagesString;
    section.appendChild(languageElement);

    // Display population 
    const populationElement = document.createElement('p');
    populationElement.innerText = 'Population: ' + jsonData[0].population;
    section.appendChild(populationElement);

    
};

getCountryByName('Peru');

