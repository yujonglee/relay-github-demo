/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepoName_name$ref: FragmentReference;
declare export opaque type RepoName_name$fragmentType: RepoName_name$ref;
export type RepoName_name = {|
  +name: string,
  +$refType: RepoName_name$ref,
|};
export type RepoName_name$data = RepoName_name;
export type RepoName_name$key = {
  +$data?: RepoName_name$data,
  +$fragmentRefs: RepoName_name$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoName_name",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '26a9112b00fe220c6a3b418a9640addd';

module.exports = node;
