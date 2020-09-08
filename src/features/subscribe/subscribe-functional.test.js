import { screen } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const {
  TDD_protocol: protocol = 'http',
  TDD_host: host = 'localhost',
  TDD_port: port = 3000,
} = process.env;

fixture`Desktop: Subscribe container`.page(`${protocol}://${host}:${port}`);

test('Page should load and NOT display the subscribe container', async t => {
  const actual = await screen.queryByPlaceholderText('Email');
  const expected = null;

  await t.expect(actual).eql(expected);
});

test("Click on 'Subscribe' should open the subscribe container", async t => {
  const subscribeButton = screen.getByText('Subscribe');

  await t.click(subscribeButton);

  const actual = screen.getByPlaceholderText('Email').exists;
  const expected = true;

  await t.expect(actual).eql(expected);
});

test("Click on 'Cancel' should close the subscribe container", async t => {
  const subscribeButton = screen.getByText('Subscribe');
  await t.click(subscribeButton);
  const cancelButton = screen.getByText('Cancel');

  await t.click(cancelButton);

  const actual = screen.queryByPlaceholderText('Email');
  const expected = null;

  await t.expect(actual).eql(expected);
});

test('Entering an invalid email should disable the submit button', async t => {
  const subscribeButton = screen.getByText('Subscribe');
  await t.click(subscribeButton);
  const emailInput = screen.getByPlaceholderText('Email');
  const submitButton = await Selector('.subscribe--button');

  await t.typeText(emailInput, 'Hello Placeholder');

  const actual = submitButton.hasAttribute('disabled');
  const expected = true;

  await t.expect(actual).eql(expected);
});

test('Entering a valid email should let you submit it and close the subscribe container', async t => {
  await t.setNativeDialogHandler(() => true);
  const subscribeButton = screen.getByText('Subscribe');
  await t.click(subscribeButton);
  const emailInput = screen.getByPlaceholderText('Email');
  const submitButton = await Selector('.subscribe--button');

  await t.typeText(emailInput, 'test@test.test');
  await t.click(submitButton);

  const actual = screen.queryByPlaceholderText('Email');
  const expected = null;

  await t.expect(actual).eql(expected);
});

fixture`Mobile: Subscribe container`
  .page(`${protocol}://${host}:${port}`)
  .beforeEach(async t => {
    await t.resizeWindowToFitDevice('iphone5', {
      portraitOrientation: true,
    });
  })
  .afterEach(async t => {
    await t.resizeWindow(1024, 768);
  });

test('Entering a valid email should let you submit it', async t => {
  await t.setNativeDialogHandler(() => true);
  const burgerMenuButton = Selector('.burger-menu-button');

  await t.click(burgerMenuButton);
  const emailInput = screen.getByPlaceholderText('Email');
  const submitButton = await Selector('.subscribe--button');

  await t.typeText(emailInput, 'test@test.test');
  await t.click(submitButton);

  const actual = screen.getByPlaceholderText('Email').value;
  const expected = '';

  await t.expect(actual).eql(expected);
});
