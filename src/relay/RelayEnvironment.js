import {
  Environment, Network, RecordSource, Store,
} from 'relay-runtime';

import fetchGraphQL from './fetchGraphQL';

const fetchRelay = async ({ text }, variables) => fetchGraphQL(text, variables);

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
