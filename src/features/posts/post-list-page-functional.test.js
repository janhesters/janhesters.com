import { screen } from '@testing-library/testcafe';
import { ClientFunction, Selector } from 'testcafe';

const {
  TDD_protocol: protocol = 'http',
  TDD_host: host = 'localhost',
  TDD_port: port = 3000,
} = process.env;

const getWindowHref = ClientFunction(() => window.location.href);

fixture`Destkop: Jan Hesters home page`.page(`${protocol}://${host}:${port}`);

test('Page should load and display the correct document title', async t => {
  const actual = Selector('title').innerText;
  const expected = 'Jan Hesters';

  await t.expect(actual).eql(expected);
});

test("'Twitter' button should navigate to Jan's Twitter profile", async t => {
  const twitterButton = screen.getByText('Twitter');

  await t.click(twitterButton).wait(500); // wait for navigation to happen

  const actual = await getWindowHref();
  const expected = 'https://twitter.com/janhesters';

  await t.expect(actual).eql(expected);
});

test("'About' button should navigate to the about page", async t => {
  const aboutButton = screen.getByText('About');

  await t.click(aboutButton).wait(500); // wait for navigation to happen

  const actual = Selector('title').innerText;
  const expected = 'About Jan Hesters';

  await t.expect(actual).eql(expected);
});

test("'Jan Hesters' title should navigate to the home page", async t => {
  const aboutButton = screen.getByText('About');
  const pageTitle = Selector('.header--title');

  await t.click(aboutButton).wait(500); // wait for navigation to happen
  await t.click(pageTitle).wait(500);

  const actual = Selector('title').innerText;
  const expected = 'Jan Hesters';

  await t.expect(actual).eql(expected);
});

test("'Archive' button should navigate to the archive page", async t => {
  const archiveButton = screen.getByText('Bonus Posts');

  await t.click(archiveButton).wait(500); // wait for navigation to happen

  const actual = Selector('title').innerText;
  const expected = 'Bonus Posts | Jan Hesters';

  await t.expect(actual).eql(expected);
});

fixture`Mobile: Jan Hesters home page`
  .page(`${protocol}://${host}:${port}`)
  .beforeEach(async t => {
    await t.resizeWindowToFitDevice('iphone5', {
      portraitOrientation: true,
    });
  })
  .afterEach(async t => {
    await t.resizeWindow(1024, 768);
  });

test("'Twitter' button should navigate to Jan's Twitter profile", async t => {
  const burgerMenuButton = Selector('.burger-menu-button');

  await t.click(burgerMenuButton);
  const twitterButton = Selector('.drawer--twitter');
  await t.click(twitterButton).wait(500); // wait for navigation to happen

  const actual = await getWindowHref();
  const expected = 'https://twitter.com/janhesters';

  await t.expect(actual).eql(expected);
});

test("'About' button should navigate to the about page", async t => {
  const burgerMenuButton = Selector('.burger-menu-button');

  await t.click(burgerMenuButton);
  const aboutButton = Selector('.drawer--about');

  await t.click(aboutButton).wait(500); // wait for navigation to happen

  const actual = Selector('title').innerText;
  const expected = 'About Jan Hesters';

  await t.expect(actual).eql(expected);
});

test("'Archive' button should navigate to the archive page", async t => {
  const archiveButton = screen.getByText('Bonus Posts');

  await t.click(archiveButton).wait(500); // wait for navigation to happen

  const actual = Selector('title').innerText;
  const expected = 'Bonus Posts | Jan Hesters';

  await t.expect(actual).eql(expected);
});
