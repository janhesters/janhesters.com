import { screen } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const {
  TDD_protocol: protocol = 'http',
  TDD_host: host = 'localhost',
  TDD_port: port = 3000,
} = process.env;

fixture`Desktop: About page`.page(`${protocol}://${host}:${port}/about`);

test('Page should load and display a description', async t => {
  const actual = Selector('body').hasClass('dark-mode');
  const expected = true;

  await t.expect(actual).eql(expected);
});

test("'Imprint' button should redirect to the imprint page", async t => {
  const imprintButton = screen.getByText('Imprint');

  await t.click(imprintButton).wait(500); // wait for navigation to happen

  const actual = Selector('title').innerText;
  const expected = 'Impressum';

  await t.expect(actual).eql(expected);
});
