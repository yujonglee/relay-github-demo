/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type githubRepoNameQueryVariables = {|
  name: string
|};
export type githubRepoNameQueryResponse = {|
  +repository: ?{|
    +name: string,
    +id: string,
  |}
|};
export type githubRepoNameQuery = {|
  variables: githubRepoNameQueryVariables,
  response: githubRepoNameQueryResponse,
|};
*/


/*
query githubRepoNameQuery(
  $name: String!
) {
  repository(owner: "facebook", name: $name) {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Literal",
        "name": "owner",
        "value": "facebook"
      }
    ],
    "concreteType": "Repository",
    "kind": "LinkedField",
    "name": "repository",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "githubRepoNameQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "githubRepoNameQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2b894e570ba3ce089578d1fa708e1699",
    "id": null,
    "metadata": {},
    "name": "githubRepoNameQuery",
    "operationKind": "query",
    "text": "query githubRepoNameQuery(\n  $name: String!\n) {\n  repository(owner: \"facebook\", name: $name) {\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7dbebadcb071f00f5ad6602c558bb588';

module.exports = node;
