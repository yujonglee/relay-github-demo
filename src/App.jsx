import { Suspense, useState } from 'react';
import { useQueryLoader } from 'react-relay/hooks';

import Repo from './components/Repo';
import { RepositoryNameQuery } from './queries/github';

const App = () => {
  const [queryReference, loadQuery] = useQueryLoader(RepositoryNameQuery);

  const [name, setName] = useState('');

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={() => loadQuery({ name })}>
        Load
      </button>
      <Suspense fallback="Loading...">
        {(queryReference !== null) ? <Repo queryReference={queryReference} /> : null}
      </Suspense>
    </>
  );
};

export default App;
