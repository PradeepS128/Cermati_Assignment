# Cermati_Assignment

**Here are some key points about my approach and findings:**

**Choice of Testing Tool:** Cypress is well-suited for this assignment due to its features like real-time reloading, debugging capabilities, and built-in DOM manipulation. It provides a great development experience, making it efficient to create and maintain test scripts.

**Test Script Organization:** I have structured the test scripts into a dedicated "Testscript" folder

**beforeEach Usage:** To ensure independence and reusability of individual test scripts, I have used the beforeEach hook and called a "signin" method. This method handles login or signup logic, reducing duplication across the test scripts.

**Steps to run the test scripts: please use terminal**

**Step 1:** Install VS Code

**Step 2:** Run npm init in cmd

**Step 3:** Run npm install cypress --save-dev in cmd

**Step 4:** Run npm i cypress-mochawesome-reporter

**Step 5:** Run npm install -D cypress-xpath

**Step 6:** Run npx cypress run in cmd

**Step 7:** Open reports folder to see results in .html format followed by screenshot folder in case of test scripts failed.
