import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).click();
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).fill('automation');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).press('Enter');
  await page
    .getByRole('link', {
      name: 'AUTOMATION | Định nghĩa trong Từ điển tiếng Anh Cambridge cambridge.org https://dictionary.cambridge.org › dictionary › english',
    })
    .click();
  await page
    .locator('#page-content')
    .getByRole('link', { name: 'Chia sẻ trên Facebook' })
    .click();
});
