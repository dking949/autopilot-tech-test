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


## Features I didn't have time to complete
