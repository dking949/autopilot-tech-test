# AutoPilot Technical Test Submission

Here's my attempt

## Notes on my implementation (before starting)

- How to create a dropdown WITH a text input?
  - SuggestionsList Component
  - Input Component
  - Combine as AutoComplete component?
- li component should be conditionally rendered if user has focused input
- Fetch countries from API once and save in Redux store? (Need to extract name & flag from response)
- On input change, search the list and assign to new ‘matchingCountries’ array in redux store
- “Performance of the dropdown by using load more”
  - Would i load all countries first and then limit what is viewable in SuggestionDropdown?
  - Would load more trigger a new API call
    - I don’t think this option possible with provided API
- Keep most of logic in AutoComplete so that other 2 components can be pure functions

## Notes on actual implementation
I know you were probably looking for how I would handle the performance of the API. Maybe something along the lines of fetching only some of the data first and then lazy loading the rest of it was needed. The country API didn't have an option to load a partial list so I just fetched them all once at the start. Would be happy to talk over how I **would** implement it in an interview if i get one.

One of the tests in the tests for the AutoComplete doesn't pass. I believe it is because I did not use RTK Query or thunks when writing the API fetching code. This is an area of Redux I'm looking to improve on.

I didn't have access to Sketch when doing this challenge so I hop you won't punish me too much for the CSS specifics

## Features I didn't have time to complete
- If a country is already selected in the input, auto scroll to that country in the dropdown when the dropdown is open again
- Displaying the Flag AND the name in the input after user has performed a selection, currently have just the name
- Navigating the dropdown with keyboard. Not sure if this was actually a requirement but didn't have time to implement anyways
- Some validation on user input