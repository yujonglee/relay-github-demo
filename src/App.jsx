import { Suspense } from 'react';
import { useQueryLoader } from 'react-relay/hooks';

import Repo from './components/Repo';
import { RepositoryNameQuery } from './queries/github';
import RelayEnvironment from './relay/RelayEnvironment';

const App = () => {
  const [queryReference] = useQueryLoader(RelayEnvironment, RepositoryNameQuery);

  return (
    <Suspense fallback="Loading...">
      <Repo queryReference={queryReference} />
    </Suspense>
  );
};

export default App;
