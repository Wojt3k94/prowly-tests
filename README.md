# prowly-tests

This repository contains Gherkin syntax test scenarios for searching on Bing and Google.

## Features - Test scenarios

- `bing_test.feature`: Scenarios for searching "semrush" on Bing with content filters.
- `google_test.feature`: Scenarios for searching "prowly" on Google with date filters.

## Spec - Test scenarios - automation

`bing_test.spec.ts`: Test automation for searchching "semrush" on bing with content filters check.

There are three tests in the file that check if the content is displayed (Video, News and Images).
The tests work locally, although after uploading the image build to github actions there was a problem, probably due to the page overloading after a click. This is to be corrected, although I think that the topic is for a deeper analysis.

To run all tests use the following command:

```bash
npx playwright test
```

To run test in github actions:

1. Click the "Actions" Tab in repo.
2. Select the Playwright Tests (Manual Trigger) workflow and run workflow.
