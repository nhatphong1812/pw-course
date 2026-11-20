import { test } from '@playwright/test';
test('Basic actions', async ({ page }) => {
    await test.step("Truy cap web", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click chon theo yeu cau", async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    await test.step("Chon san pham 1", async () => {
        await page.locator("//button[@data-product-id='1']").click({clickCount : 2});
        });
    await test.step("Chon san pham 2", async () => {
        await page.locator("//button[@data-product-id='2']").click({clickCount : 3});
        });

    await test.step("Chon san pham 3", async () => {
        await page.locator("//button[@data-product-id='3']").click();
        });
    });