import { faker } from '@faker-js/faker';
import { test } from '@playwright/test';
import SignInPage from '../pages/conduitPage';

let password = faker.string.uuid();

test('Create an account successfully @conduit', async ({ page }) => {
  let username = faker.person.firstName() + Date.now();
  let email = faker.internet.email();
  const login = new SignInPage(page);
  await page.goto('https://react-redux.realworld.io/');
  await login.createUser(username, email, password);
  await login.verifyHomePage();
});

test('Create an account failed @conduit', async ({ page }) => {
  let email_wrong = 'test_wrong_email@mailinator.com';
  const login = new SignInPage(page);
  await page.goto('https://react-redux.realworld.io/');
  await login.signIn(email_wrong, password);
  await login.verifySignIn(false);
});
