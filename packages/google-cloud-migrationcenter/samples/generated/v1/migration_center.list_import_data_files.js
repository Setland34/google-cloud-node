// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START migrationcenter_v1_generated_MigrationCenter_ListImportDataFiles_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the parent of the `ImportDataFiles` resource.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of data files to return. The service may return
   *  fewer than this value. If unspecified, at most 500 data files will be
   *  returned. The maximum value is 1000; values above 1000 will be coerced to
   *  1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListImportDataFiles` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListImportDataFiles`
   *  must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Filtering results.
   */
  // const filter = 'abc123'
  /**
   *  Field to sort by. See https://google.aip.dev/132#ordering for more details.
   */
  // const orderBy = 'abc123'

  // Imports the Migrationcenter library
  const {MigrationCenterClient} = require('@google-cloud/migrationcenter').v1;

  // Instantiates a client
  const migrationcenterClient = new MigrationCenterClient();

  async function callListImportDataFiles() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await migrationcenterClient.listImportDataFilesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListImportDataFiles();
  // [END migrationcenter_v1_generated_MigrationCenter_ListImportDataFiles_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));