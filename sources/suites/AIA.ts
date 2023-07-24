import { test, expect } from '@playwright/test';


test('test go the correct page', async ({ page }) => {
  await page.goto('https://www.aia.com.vn/vi.html');
  await expect(page.getByText('AIA+')).toBeVisible();
});


test('test login succesfully', async ({ page }) => {
  await page.goto('https://www.aia.com.vn/vi.html');
  await page.((//span[text()='AIA+'])[1])).click();
  await page.getByText('Đăng nhập / Đăng Ký').click();
  await page.getByTestId('login-username').fill('0902488589');
  await page.getByTestId('login-password').fill('Dung05021990?');
  await expect(page.getByPlaceholder('avatar-component__name')).toHaveText('Dung');
});

