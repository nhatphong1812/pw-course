import { test } from '@playwright/test';
test('Basic actions', async ({ page }) => {
    await test.step("Truy cap web", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click chon theo yeu cau", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    await test.step("Them moi list todo", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    await test.step("Xoa cac todo co so le", async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
        for (let j = 1; j <= 99; j+=2) {
            if (j % 2 !== 0) {
                await page.locator(`//button[@id='todo-${j}-delete']`).click();
            };
        };
    });
});