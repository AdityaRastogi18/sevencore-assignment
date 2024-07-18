##React + Vite Blog Assignment

###Dear Developer,

Thank you for this assignment opportunity. It has been an enriching experience, allowing me to delve deeper into React, Vite, and testing practices.

###Project Overview

This project is a blog application built using React and Vite. Here are some key points and decisions made during the development:

	1.	Environment Variables: Due to Jest’s inability to recognize meta.import in Vite, environment variables are passed directly.
	2.	React Query: I used React Query instead of the traditional useEffect hook for data fetching. React Query provides powerful state management with built-in loading and error handling states.
	3.	Routing and State Management: Router parameters are used to pass data from the post list to the post details page. This approach avoids prop drilling and the unnecessary complexity of context API for a single data object.
	4.	Styling: Tailwind CSS is used for its ease of customization and utility-first approach.
	5.	Content Handling: As the content was not fully available, a “Read Full Article” button is provided instead of implementing web scraping.

###Challenges Faced

	•	Testing: The test cases required a significant amount of time (5 hours) to configure correctly, but it was a great learning experience.
	•	Deployment: I faced issues with hosting the project on GitHub Pages due to CORS errors when making API requests to https://newsapi.org.



    ```Access to XMLHttpRequest at 'https://newsapi.org/v2/top-headlines?country=in&page=1&pageSize=10' from origin 'https://adityarastogi18.github.io' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.