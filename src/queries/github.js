import graphql from 'babel-plugin-relay/macro';

export const RepositoryNameQuery = graphql`
  query githubRepoNameQuery($name: String!) {
    repository(owner: "facebook", name: $name) {
      name
      id
    }
  }
`;

export default {};
