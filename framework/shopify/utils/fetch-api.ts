import { ApiFetcherOptions, ApiFetcherResults } from '@common/types/api';
// import { API_URL, STOREFRONT_TOKEN } from '@framework/const';

const fetchApi = async <T>({
  url,
  query,
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  // const url = 'http://localhost:4000/graphql';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }
  return { data };
};

export default fetchApi;
