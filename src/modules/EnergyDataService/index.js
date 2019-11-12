import useFetch from '../../hooks/useFetch';
import { capitalizeFirstLetter } from '../../utils';


const apiUrl = 'https://api.carbonintensity.org.uk';


const parseGenerationData = ({ data }) => {
  const parsedGenerationmix = data.generationmix
    .map(energyUnit => {
      const capitalizedFuel = capitalizeFirstLetter(energyUnit.fuel);
      return {...energyUnit, fuel: capitalizedFuel};
    })
    .sort((a, b) => (a.perc < b.perc) ? 1 : -1);

  return {...data, generationmix: parsedGenerationmix};
}


export const getGenerationData = () => {
  const url = new URL('/generation', apiUrl);
  const req = useFetch(url);

  const parsedData = req.data && parseGenerationData(req.data)

  return {...req, data: parsedData};
}
