import { test, expect } from '@playwright/test';

test('test go to correct page', async ({ page }) => {
  await page.goto('https://www.aia.com.vn/vi.html');
  await expect (page.getByRole('button', { name: 'AIA+' })).toBeVisible();
});


test('test login succesfully', async ({ page }) => {
  await page.goto('https://www.aia.com.vn/vi.html');
  await page.getByRole('button', { name: 'AIA+' }).click();
  page.waitForTimeout(3);
  await page.getByRole('link', { name: 'Đăng nhập / Đăng Ký' }).click();
  await page.goto('https://myaia.aia.com.vn/login');
  await page.locator('#login-username').click();
  await page.locator('#login-username').fill('0902488589');
  await page.locator('#login-password').click();
  await page.locator('#login-password').fill('Dung05021990?');
  await page.getByLabel('Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Cam kết bảo mật').check();
  await page.getByRole('button', { name: 'Tiếp tục' }).click();
  await expect (page.locator("//div[text()='Yêu cầu bồi thường']")).toBeVisible();
});

test('Upload file succesfully', async ({ page }) => {
  await page.goto ('https://demo.guru99.com/test/upload/');
  await page.locator('#upload_options').setInputFiles('/upload/test.png');
  await page.getByRole ('checkbox', {name: 'terms'}).check();
  await page.getByRole ('button', {name :'Submit File'}).click();
  await expect (page.locator ("//h3[@class='demo']//center[1]")).toContainText('has been successfully uploaded.');
});

test('download file succesfully', async ({ page }) => {
  await page.goto ('https://filesamples.com/');
  await page.locator("//span[text()='Document']").click();
  await page.getByText('Get .docx samples').click();
  await page.locator("(//span[text()='Download'])[2]").click();
  await page.saveAs('sources/download/sample3.docx');

});

