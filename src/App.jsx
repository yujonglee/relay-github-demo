import { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useQueryLoader } from 'react-relay/hooks';

import RepoPage from './components/RepoPage';

const App = () => {
  const [queryReference, loadQuery] = useQueryLoader(graphql`
  query AppQuery {
    repository(owner: "facebook", name: "relay") {
      owner {
        id
      }
      ...RepoId_id
      ...RepoName_name
    }
  }`);

  return (
    <>
      <button type="button" onClick={() => loadQuery()}>Load</button>
      <Suspense fallback="Loading...">
        {(queryReference !== null) ? <RepoPage queryRef={queryReference} /> : null}
      </Suspense>
    </>
  );
};

export default App;
