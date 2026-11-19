import { test } from '@playwright/test';
test('Basic actions', async ({ page }) => {
    await test.step("Truy cap web", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click chon theo yeu cau", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("Nhap thong tin", async () => {
        await page.locator("//input[@id='username']").fill("Nhat Phong");
        await page.locator("//input[@id='email']").pressSequentially("phong@gmail.com", { delay: 100 });
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//select[@id='interests']").selectOption({ value: "music" });
        await page.locator("//select[@id='country']").selectOption({ value: "canada" });
        await page.locator("//input[@id='dob']").pressSequentially("18122002", { delay: 100 });
        await page.locator("//input[@id='profile']").setInputFiles('tests/lesson-05/anh-3x4-example.txt');
        await page.locator("//textarea[@id='bio']").fill("Kiểm thử viên (QA) với 2 năm kinh nghiệm trong lĩnh vực kiểm thử game và đang mở rộng kỹ năng sang kiểm thử ứng dụng web.");
        await page.locator("//button[@type='submit']").click();
    });
});