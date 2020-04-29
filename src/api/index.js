import axios from "axios"

const url =  "https://covid19.mathdro.id/api"
const fetchedDailyData = "https://covid19.mathdro.id/api/daily"
const countriesList = "https://covid19.mathdro.id/api/countries"

export const fetchData = async (country) => {
    
    let changeableURL = url;

    if (country){
        changeableURL = countriesList + "/"  + country
        console.log("-------here is the url ----- > ",changeableURL)
    }

    try{

        const {data : {confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableURL);
        return {confirmed, recovered, deaths, lastUpdate };
    }
    catch (error){
        console.log(error)
    }
}

export const fetchDailyData = async () => {

    try{
        
        const { data } = await axios.get(fetchedDailyData);

        const requiredData = data.map((Each) => ({
            confirmed : Each.confirmed.total,
            deaths : Each.deaths.total,
            date : Each.reportDate,
        }))

        return requiredData

    }
    catch (error){
        console.log(error)
    }
}


export const fetchCountries = async () => {

    try{
        
        const { data :{ countries } } = await axios.get(countriesList);

        return countries.map((country) => country.name)
        // const requiredData = data.map((Each) => ({
        //     Country : Each.Country,
        //     Slug : Each.Slug,
        //     ISO2 : Each.ISO2,
        // }))

        // return requiredData

    }
    catch (error){
        console.log(error)
    }
}


