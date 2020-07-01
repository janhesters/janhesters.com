import { Selector } from 'testcafe';

const {
  TDD_protocol: protocol = 'http',
  TDD_host: host = 'localhost',
  TDD_port: port = 3000,
} = process.env;

fixture`Desktop: Dark mode toggle`.page(`${protocol}://${host}:${port}`);

test('Page should load in dark mode by default', async t => {
  const actual = Selector('body').hasClass('dark-mode');
  const expected = true;

  await t.expect(actual).eql(expected);
});

test('Clicking the theme toggle should change the theme', async t => {
  const themeToggle = Selector('.theme-toggle--desktop');

  await t.click(themeToggle);

  const actual = Selector('body').hasClass('light-mode');
  const expected = true;

  await t.expect(actual).eql(expected);
});

fixture`Mobile: Dark mode toggle`
  .page(`${protocol}://${host}:${port}`)
  .beforeEach(async t => {
    await t.resizeWindowToFitDevice('iphone5', {
      portraitOrientation: true,
    });
  })
  .afterEach(async t => {
    await t.resizeWindow(1024, 768);
  });

test('Clicking the theme toggle should change the theme', async t => {
  const themeToggle = Selector('.theme-toggle--mobile');

  await t.click(themeToggle);

  const actual = Selector('body').hasClass('light-mode');
  const expected = true;

  await t.expect(actual).eql(expected);
});
