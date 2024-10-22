# QA Automation Challenge

Thank you for participating in our QA Automation code challenge. Please follow the instructions below to complete and submit your solution.

## Instructions:

1. Clone this repository to your local machine.
2. Implement your solution using Node.js, TypeScript, and Playwright (you can use a different end-to-end browser testing tool if you are not familiar with Playwright).
3. Update this `README.md` file with instructions on how to run your application locally.
4. Commit and push your changes to this repository.
5. Email us when your solution is ready.
6. We will follow your instructions to run your application locally and evaluate your solution.

## Important Notes:

* __Do not include any sensitive information__ (e.g., credentials or API keys) in this repository.
* __Bonus__: If possible, use Docker to enable us to run your project with minimal setup.

## Code Challenge

We would like you to create an automated test to validate the functionality of GitHub's website. Your test should be able to change a file, commit your changes, open a pull request and verify that the pull request is present in the pull request page. On a high level, these are the steps your test should perform:

1. Sign into GitHub.
2. Open this repository on GitHub.
3. Open the file `file-to-update.txt`, which is located at the root level of this repository.
4. Append a new line to `file-to-update.txt`.
5. Commit your changes to a new branch.
6. Open a pull request proposing to merge your changes into the `main` branch from the branch you created.
7. Navigate to the _pull requests_ page and verify that the pull request is listed under the filters `is:pr is:open`.

## Considerations

* __Keep it simple:__ We are primarily interested in assessing your proficiency with TypeScript and Playwright, as well as your problem-solving approach. Avoid unnecessary complexity such as many levels of abstraction.
* __Stick to the essence:__ While you should follow the general guidelines provided in the Code Challenge section, feel free to exercise some creative freedom in your implementation.
* __It is alright to ask questions:__ If you are unsure about any aspect of the challenge, don't hesitate to reach out for clarification.

## Instruction to run playwight test:

- Clone this repo
- Please add your your Git username and password in "github.pr.creation.flow.spec" file.
- Run following cmds in bash to run test in headed mode

```sh {"id":"01JA8XP3NHYYZY2N4MSGHP08XS"}

 cd playwright
 npm i
 npx playwright install chromium
 npx playwright test github.pr.creation.flow.spec

```

