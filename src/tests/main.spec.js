// @ts-check
const { test, expect } = require('@playwright/test');

/*
test('TITLE', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // wait until table with class "result-table" is visible
    await page.waitForSelector(".result-table");
    
    // load table data into an array
    const tableData = await page.$$eval("result-table tbody tr", rows => {
        return Array.from(rows, row => {
            const columns = row.querySelectorAll("td");
            return Array.from(columns, column => column.innerText);
        });
    });
    let resultData = [];
    tableData.forEach((row) => {
        resultData.push({
            "Status": row[0].trim(),
            "Name": row[1].trim(),
        })
    })
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});
*/
