import { Suspense } from 'react';
import { loadQuery } from 'react-relay/hooks';

import Repo from './components/Repo';
import { RepositoryNameQuery } from './queries/github';
import RelayEnvironment from './relay/RelayEnvironment';

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery);

const App = () => (
  <Suspense fallback="Loading...">
    <Repo queryReference={preloadedQuery} />
  </Suspense>
);

export default App;
