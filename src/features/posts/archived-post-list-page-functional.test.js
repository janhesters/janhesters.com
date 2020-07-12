import { screen } from '@testing-library/testcafe';
import { Selector } from 'testcafe';

const {
  TDD_protocol: protocol = 'http',
  TDD_host: host = 'localhost',
  TDD_port: port = 3000,
} = process.env;

fixture`Destkop: Jan Hesters Archive Page`.page(
  `${protocol}://${host}:${port}/bonus`,
);

test('Page should load and display the correct title', async t => {
  const actual = screen.getByText('Bonus Posts').exists;
  const expected = true;

  await t.expect(actual).eql(expected);
});

test('Page should load and display a description', async t => {
  const actual = Selector('.archived-post-list-page--description').exists;
  const expected = true;

  await t.expect(actual).eql(expected);
});
