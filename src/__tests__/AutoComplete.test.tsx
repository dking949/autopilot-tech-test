import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AutoComplete from '../components/AutoComplete';
import { render, screen } from '../testUtils';
import { mockApiResponse } from '../resources/mockApiResponse';
import { QueryClient, QueryClientProvider } from 'react-query';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get('https://restcountries.com/v3.1/all', (req, res, ctx) => {
    return res(
      ctx.json(mockApiResponse),
      ctx.status(200)
      )
  })
]

const server = setupServer(...handlers)
const queryClient = new QueryClient();

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())


test('renders the CountryInput Component but not the SuggestionDropdown Component', async () => {

  render(
    <QueryClientProvider client={queryClient}>
        <AutoComplete />
    </QueryClientProvider>);

  const input = screen.getByLabelText('country-input');
  const suggestionDropdown = screen.queryByLabelText('suggestion-dropdown-ul');

  expect(input).toBeInTheDocument();
  expect(suggestionDropdown).not.toBeInTheDocument();
});

test('when the input is focused, it renders the dropdown', async () => {

  render(
    <QueryClientProvider client={queryClient}>
        <AutoComplete />
    </QueryClientProvider>);

  const input = screen.getByLabelText('country-input');
  input.focus();
  const suggestionDropdown = screen.getByLabelText('suggestion-dropdown-ul');
  
  expect(suggestionDropdown).toBeInTheDocument();
});

test('when API returns data, the SuggestionDropdown is populated', async () => {
  render(
    <QueryClientProvider client={queryClient}>
        <AutoComplete />
    </QueryClientProvider>);

  const input = screen.getByLabelText('country-input');
  input.focus();
  const suggestionDropdown = screen.getByLabelText('suggestion-dropdown-ul');

  expect(suggestionDropdown).toHaveLength(2);
});
