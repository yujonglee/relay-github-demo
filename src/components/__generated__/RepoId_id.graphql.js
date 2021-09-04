/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepoId_id$ref: FragmentReference;
declare export opaque type RepoId_id$fragmentType: RepoId_id$ref;
export type RepoId_id = {|
  +id: string,
  +$refType: RepoId_id$ref,
|};
export type RepoId_id$data = RepoId_id;
export type RepoId_id$key = {
  +$data?: RepoId_id$data,
  +$fragmentRefs: RepoId_id$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoId_id",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '0c4417309cd962211cb0d3158bc17d12';

module.exports = node;
