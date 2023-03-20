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
  // [START advisorynotifications_v1_generated_AdvisoryNotificationsService_ListNotifications_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of notifications.
   *  Must be of the form "organizations/{organization}/locations/{location}".
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of notifications to return. The service may return
   *  fewer than this value. If unspecified or equal to 0, at most 50
   *  notifications will be returned. The maximum value is 50; values above 50
   *  will be coerced to 50.
   */
  // const pageSize = 1234
  /**
   *  A page token returned from a previous request.
   *  When paginating, all other parameters provided in the request
   *  must match the call that returned the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Specifies which parts of the notification resource should be returned
   *  in the response.
   */
  // const view = {}
  /**
   *  ISO code for requested localization language.  If unset, will be
   *  interpereted as "en". If the requested language is valid, but not supported
   *  for this notification, English will be returned with an "Not applicable"
   *  LocalizationState. If the ISO code is invalid (i.e. not a real language),
   *  this RPC will throw an error.
   */
  // const languageCode = 'abc123'

  // Imports the Advisorynotifications library
  const {AdvisoryNotificationsServiceClient} = require('@google-cloud/advisorynotifications').v1;

  // Instantiates a client
  const advisorynotificationsClient = new AdvisoryNotificationsServiceClient();

  async function callListNotifications() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await advisorynotificationsClient.listNotificationsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListNotifications();
  // [END advisorynotifications_v1_generated_AdvisoryNotificationsService_ListNotifications_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));