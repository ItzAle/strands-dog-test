![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

# Dog Breeds Visualization Project

[Versión en Español](README.md) 🇪🇸

## Table of Contents

- [Frontend Technical Test - Strands](#frontend-technical-test---strands)
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Completed Tasks](#completed-tasks)
  - [Task 1: Retrieve Dog Breeds List](#task-1-retrieve-dog-breeds-list)
  - [Task 2: Count Images by Breed](#task-2-count-images-by-breed)
  - [Task 3: Results Visualization](#task-3-results-visualization)
  - [Extra: Unit Tests](#extra-unit-tests)
- [How to Run the Project](#how-to-run-the-project)
- [Project Structure](#project-structure)
- [Unit Tests](#unit-tests)
- [Questions](#questions)
  - [1. Decisions Made During Development](#1-describe-all-the-decisions-you-made-during-development-and-the-reasoning-behind-them)
  - [2. Additional Features](#2-if-you-had-more-time-what-other-features-would-you-add-to-your-application-and-how-would-you-build-them)

## Frontend Technical Test - Strands

This application is the result of the technical test proposed by Strands. The objective was to create an application using React, Redux, and TypeScript to interact with the Dog CEO API and visualize data about dog breeds.

### Original Requirements:

**Task 1: Retrieve the list of all dog breeds**

- Use the API at https://dog.ceo/dog-api/documentation/ to retrieve all dog breeds.
- Save this information in some kind of store.
- No need to retrieve sub-breed lists.

**Task 2: Count dogs**

- For each breed, get all their images (just the links) and count how many there are.
- Save that count somewhere.

**Task 3: Display the results**

- Draw a pie chart showing the percentage of images for each breed (or the top 10 with more images).
- Use Recharts as the chart library.

**Extra: Unit tests**

- Add unit tests to the application (preferably with React Testing Library).

## Description

This project is a web application developed with Next.js and TypeScript that allows visualizing information about dog breeds using the public Dog CEO API. The application displays a list of dog breeds, counts the available images for each breed, and presents this information in a pie chart.

## Technologies Used

- **Next.js 15**: React framework for web applications
- **TypeScript**: For static typing and better development
- **Redux Toolkit**: For application state management
- **Recharts**: For data visualization in charts
- **Tailwind CSS**: For responsive styling
- **Jest and React Testing Library**: For unit testing

## Completed Tasks

### Task 1: Retrieve Dog Breeds List

- ✅ Implemented the connection with the Dog CEO API to retrieve all dog breeds.
- ✅ Data is stored in a Redux store for easy access throughout the application.

### Task 2: Count Images by Breed

- ✅ For each breed, links to its images are obtained.
- ✅ The number of available images per breed is counted.
- ✅ This information is stored in the Redux store.

### Task 3: Results Visualization

- ✅ A pie chart has been implemented using Recharts.
- ✅ The chart shows the percentage of images for each breed.
- ✅ The top 10 breeds with the most images are displayed in the chart.

### Extra: Unit Tests

- ✅ Unit tests have been developed with Jest and React Testing Library.
- ✅ Components, Redux logic, and main functionalities are tested.
- ✅ A testing approach is used that simulates the real user behavior.

## How to Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Run tests:

```bash
npm test
```

## Project Structure

- `/app`: Contains the main application components and routing structure.
- `/components`: Reusable components like BreedsList and PieChart.
- `/store`: Redux configuration and slices for state management.
- `/__tests__`: Contains the application's unit tests.
- `/jest.config.js`: Jest configuration for tests.
- `/jest.setup.js`: Additional setup for tests.

## Unit Tests

Unit tests have been implemented using Jest and React Testing Library. Tests have been created for:

- Verifying correct component rendering
- Checking the filtering functionality in the breeds list
- Validating the operation of the Redux store
- Ensuring the pie chart displays the information correctly

To run the tests, use the command `npm test`.

## Questions

### 1. Describe all the decisions you made during development and the reasoning behind them.

- The first decision was to use Next.js, as for me, it is one of the most complete frameworks available right now, and I have the most experience with it.

- Then I decided to use Redux Toolkit, as it is an updated and simpler version of traditional Redux. It saves a lot of repetitive code, has a simpler configuration, better handling of asynchronous operations, and better performance, making it a more accessible option.

- For styling, I use Tailwind, as it is the fastest way to create a responsive design, and I have considerable experience with it. This way, I can develop a simple and adaptable design.

- For the Dog CEO API calls, I decided to create specific functions for each endpoint, properly handling loading and error states. Additionally, I implemented a basic cache system in Redux to avoid redundant calls.

- For the charts, I used Recharts, as it is recommended and I have some experience with it. It is one of the best libraries available.

- I decided to implement a search filter for the breeds list, which makes it easier for users to find specific breeds if the list is extensive.

- Regarding the project structure, I clearly separated components, Redux logic, and utilities, following the single responsibility principle to facilitate maintenance and testing.

- For unit tests, I used React Testing Library, as suggested, focusing on testing behavior from the user's perspective and not on implementation details.

### 2. If you had more time, what other features would you add to your application and how would you build them?

- Being able to see a random image of each dog breed: the API offers images for each breed, so it would be possible to make a selected breed display a random image of that breed.

- Show only dogs with sub-breeds: implement a filter that displays only those dogs with sub-breeds.

- Implement an image gallery: I would add a section where the user can see a gallery of images for each selected breed, using a pagination system to handle progressive loading of images.

- Add a dark/light mode: I would implement a toggle to switch between light and dark modes, taking advantage of Tailwind's capabilities for themes.

- Data persistence: I would use localStorage to save the results of API queries, which would significantly reduce loading times on subsequent visits.

- Additional data visualizations: in addition to the pie chart, I would add bar charts to directly compare the number of images between breeds, also using Recharts.

- Improve performance: I would implement lazy loading techniques for images and results.

- Favorites system: I would allow users to mark breeds as favorites for quick access, saving these preferences in localStorage.
