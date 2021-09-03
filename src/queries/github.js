import graphql from 'babel-plugin-relay/macro';

export const RepositoryNameQuery = graphql`
  query githubRepoNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

export default {};
