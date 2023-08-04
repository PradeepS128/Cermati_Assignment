# Cermati_Assignment

## Test Scenarios for eBay Website

### Scenario 1: Access a Product via Category after Applying Multiple Filters

1. Go to www.ebay.com.
2. Navigate to "Search by category" > "Electronics" > "Cell Phones & accessories."
3. Click on "Cell Phones & Smartphones" in the left-hand side navigation section.
4. Click on "See All" (appears under "Shop by brand" or "Shop by Network").
5. In the pop-up, add 3 filters - "screen size," "Price," and "Item location."
6. Click on "Apply" to apply the selected filters.
7. Verify that the filter tags are applied to the search results.

### Scenario 2: Access a Product via Search

1. Go to www.ebay.com.
2. Type any search string in the search bar. For example: "MacBook."
3. Change the search category to "Computers/Tablets & Networking."
4. Click on "Search."
5. Verify that the page loads completely.
6. Verify that the first result's name matches the search string ("MacBook").

## Here are some key points about my approach and findings:

### **Choice of Testing Tool:** 
Cypress is well-suited for this assignment due to its features like real-time reloading, debugging capabilities, and built-in DOM manipulation. It provides a great development experience, making it efficient to create and maintain test scripts.

### **Test Script Organization:** 
I have structured the test scripts into a dedicated "Testscript" folder

### **beforeEach Usage:** 
To ensure independence and reusability of individual test scripts, I have used the beforeEach hook and called a "signin" method. This method handles login or signup logic, reducing duplication across the test scripts.

## **Steps to run the test scripts: please use terminal**

**Step 1:** Install VS Code

**Step 2:** Run npm init in cmd

**Step 3:** Run npm install cypress --save-dev in cmd

**Step 4:** Run npm i cypress-mochawesome-reporter

**Step 5:** Run npm install -D cypress-xpath

**Step 6:** Run npx cypress run in cmd

**Step 7:** Open reports folder to see results in .html format followed by screenshot folder in case of test scripts failed.
