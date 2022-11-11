// Copyright 2022 Google LLC
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

function main() {
  // [START texttospeech_v1beta1_generated_TextToSpeech_ListVoices_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. Recommended.
   *  BCP-47 (https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
   *  If not specified, the API will return all supported voices.
   *  If specified, the ListVoices call will only return voices that can be used
   *  to synthesize this language_code. For example, if you specify `"en-NZ"`,
   *  all `"en-NZ"` voices will be returned. If you specify `"no"`, both
   *  `"no-\*"` (Norwegian) and `"nb-\*"` (Norwegian Bokmal) voices will be
   *  returned.
   */
  // const languageCode = 'abc123'

  // Imports the Texttospeech library
  const {TextToSpeechClient} = require('@google-cloud/text-to-speech').v1beta1;

  // Instantiates a client
  const texttospeechClient = new TextToSpeechClient();

  async function callListVoices() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await texttospeechClient.listVoices(request);
    console.log(response);
  }

  callListVoices();
  // [END texttospeech_v1beta1_generated_TextToSpeech_ListVoices_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));