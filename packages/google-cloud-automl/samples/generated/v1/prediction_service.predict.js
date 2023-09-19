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

function main(name, payload) {
  // [START automl_v1_generated_PredictionService_Predict_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the model requested to serve the prediction.
   */
  // const name = 'abc123'
  /**
   *  Required. Payload to perform a prediction on. The payload must match the
   *  problem type that the model was trained to solve.
   */
  // const payload = {}
  /**
   *  Additional domain-specific parameters, any string must be up to 25000
   *  characters long.
   *  AutoML Vision Classification
   *  `score_threshold`
   *  : (float) A value from 0.0 to 1.0. When the model
   *    makes predictions for an image, it will only produce results that have
   *    at least this confidence score. The default is 0.5.
   *  AutoML Vision Object Detection
   *  `score_threshold`
   *  : (float) When Model detects objects on the image,
   *    it will only produce bounding boxes which have at least this
   *    confidence score. Value in 0 to 1 range, default is 0.5.
   *  `max_bounding_box_count`
   *  : (int64) The maximum number of bounding
   *    boxes returned. The default is 100. The
   *    number of returned bounding boxes might be limited by the server.
   *  AutoML Tables
   *  `feature_importance`
   *  : (boolean) Whether
   *  feature_importance google.cloud.automl.v1.TablesModelColumnInfo.feature_importance 
   *    is populated in the returned list of
   *    TablesAnnotation google.cloud.automl.v1.TablesAnnotation 
   *    objects. The default is false.
   */
  // const params = [1,2,3,4]

  // Imports the Automl library
  const {PredictionServiceClient} = require('@google-cloud/automl').v1;

  // Instantiates a client
  const automlClient = new PredictionServiceClient();

  async function callPredict() {
    // Construct request
    const request = {
      name,
      payload,
    };

    // Run request
    const response = await automlClient.predict(request);
    console.log(response);
  }

  callPredict();
  // [END automl_v1_generated_PredictionService_Predict_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));