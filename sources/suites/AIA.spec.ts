import { test, expect } from '@playwright/test';

test('test go to correct page', async ({ page }) => {
  await page.goto('https://www.aia.com.vn/vi.html');
  await expect (page.getByRole('button', { name: 'AIA+' })).toBeVisible();
});


test('test login succesfully', async ({ page }) => {
  await page.goto('https://www.aia.com.vn/vi.html');
  await page.getByRole('button', { name: 'AIA+' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Đăng nhập / Đăng Ký' }).click();
  const page1 = await page1Promise;
  await page1.locator('#login-username').click();
  await page1.locator('#login-username').fill('0902488589');
  await page1.locator('#login-password').click();
  await page1.locator('#login-password').fill('Dung05021990?');
  await page1.getByLabel('Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Cam kết bảo mật').check();
  await page1.getByRole('button', { name: 'Tiếp tục' }).click();
  await page1.goto('https://myaia.aia.com.vn/');
  await expect (page.getByTitle('Yêu cầu bồi thường')).toBeVisible();
});


  