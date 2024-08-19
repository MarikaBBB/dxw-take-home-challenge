# dxw-take-home-challenge

## UK Government Acronym Search

This is a simple web application that allows users to search for UK Government acronyms and find the corresponding organisation names. The application includes an autocomplete feature and supports partial matching of acronyms.

### Features

- **Acronym Search:** Enter an acronym to find the associated organisation.
- **Autocomplete:** As you type, matching acronyms will appear in a dropdown list.
- **Partial Matching:** Search for partial acronyms (e.g., "DC") to see all relevant results.
- **Error Handling:** Displays a user-friendly message if the acronym data fails to load.

### Running the Application Locally

#### Prerequisites

- Node.js installed on your machine.

#### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/MarikaBBB/dxw-take-home-challenge.git
   cd your-repo-name


2. Install dependencies (if any):
```npm install```

3. Running the Application
Start the server:
```node server.js```

4. Open your web browser and go to:
http://localhost:5001

This will load the application locally on your machine.

### How to Use
- **Search for an Acronym**: Type an acronym (e.g., "BEIS") into the search box and press Enter or click the "Search" button. The corresponding organisation name will be displayed.
- **Autocomplete**: Start typing an acronym, and suggestions will appear in the dropdown list. Click on a suggestion to search for it directly.
- **Partial Matching**: You can type part of an acronym (e.g., "DC") to see all matching results.

### Known Issues
- This is a basic implementation intended for demonstration purposes. Not all edge cases may be handled.
- The application is not yet fully optimised for mobile devices.

### Future Improvements
- Add a database to store and manage acronyms more efficiently.
- Implement additional user stories and edge case handling.
- Improve the UI/UX design for a better user experience.



