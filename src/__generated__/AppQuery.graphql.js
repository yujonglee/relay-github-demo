/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RepoId_id$ref = any;
type RepoName_name$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +repository: ?{|
    +owner: {|
      +id: string
    |},
    +$fragmentRefs: RepoId_id$ref & RepoName_name$ref,
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  repository(owner: "facebook", name: "relay") {
    owner {
      __typename
      id
    }
    ...RepoId_id
    ...RepoName_name
    id
  }
}

fragment RepoId_id on Repository {
  id
}

fragment RepoName_name on Repository {
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "relay"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "facebook"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RepoId_id"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RepoName_name"
          }
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "3ace031d2622891f1f769ef40da7ffd4",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    owner {\n      __typename\n      id\n    }\n    ...RepoId_id\n    ...RepoName_name\n    id\n  }\n}\n\nfragment RepoId_id on Repository {\n  id\n}\n\nfragment RepoName_name on Repository {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '68bb5ede9ce57642d11bdafa6486e5a5';

module.exports = node;
