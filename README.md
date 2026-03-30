## React custom hooks

-I created a React custom Hook called **useFetch** using **useState**, **useEffect** and **useCallback** to hendle API data fetching.

-This hooks manages Loding, Error and Data states efficently.


## Key Decisions Made

1. Using custom Hook (**useFetch**)

- Create reusable logic for API calls
- State variables for data, Loder and ErrorScreen
- Used useCallback to memoize the fetch function 
- Reduced code duplication


2. components seperations

- Used **ProuductList** for UI
- Used **Loder** and **ErrorScreen** for better stste handling 


3. Error Hendeling 

- handled neteork errors using try-catch
- Displayed error messages

5. With Netlify Link
- https://react-custom-hooks-usefetch.netlify.app/

4. Using Tailwind CSS

- For fast and responsive UI design
- Implemented responsive photo gRid system for different screen sizes


## Run this

- npm run dev

