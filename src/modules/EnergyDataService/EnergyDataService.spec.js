import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';
import { getGenerationData } from './index';
import testData from '../../../example_api_response.json';

// const testData = {
//   "data": {
//     "from": "2019-11-12T16:30Z",
//     "to": "2019-11-12T17:00Z",
//     "generationmix": [
//       {
//         "fuel": "testf1",
//         "perc": 5.4
//       },
//       {
//         "fuel": "testf2",
//         "perc": 3.9
//       },
//       {
//         "fuel": "testf3",
//         "perc": 8.9
//       },
//     ]
//   }
// }

fetchMock.mock('*', testData);

describe('EnergyDataService', () => {
  describe('getGenerationData', () => {
    test('fetches data and cpitalizes fuels', async () => {
      const { result, waitForNextUpdate } = renderHook(() => getGenerationData())

      await waitForNextUpdate();

      const data = result.current.data;
      const isCapitalized = data.generationmix[0].fuel[0] === data.generationmix[0].fuel[0].toUpperCase();

      expect(isCapitalized).toBe(true);
    });

    test('fetches data and sorts fuels', async () => {
      const { result, waitForNextUpdate } = renderHook(() => getGenerationData())

      await waitForNextUpdate();

      const data = result.current.data;
      const max = testData.data.generationmix
        .reduce((max, energyUnit) => (energyUnit.perc > max) ? energyUnit.perc : max, 0)

      expect(data.generationmix[0].perc).toEqual(max);
    });
  });
});
