import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';
import useFetch from './index';

const successData = {data: 'successs'};

fetchMock
  .mock('/test-success', successData)
  .mock('/test-error', 500)
  .mock('/test-network-error', {throws: new TypeError('Failed to fetch')});

describe('useFetch', () => {
  test('make successfull req', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('/test-success'))

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);

    await waitForNextUpdate();

    expect(result.current.data).toMatchObject(successData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
  });

  test('handle error response', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('/test-error'))

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(true);
  });

  test('handle network error response', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('/test-network-error'))

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(true);
  });
});
