# NexusHub - User Management Interface

NexusHub is a responsive frontend application built with React and Bootstrap that demonstrates a complete user authentication flow. The project features a modern, card-based UI for user registration, secure login validation, and a dynamic profile management dashboard.

This project utilizes browser LocalStorage to simulate backend database operations, allowing for persistent user sessions and data management without an external server.

## Features

### Authentication
* **User Registration:** Comprehensive sign-up form including full name, age, email, password validation, and area of interest selection.
* **Login System:** Secure authentication logic that verifies credentials against stored records.
* **Form Validation:** Real-time checks for empty fields, password matching, and existing user verification.
* **Session Management:** Uses LocalStorage to persist user login state across page reloads.

### Profile Management
* **Protected Routes:** Unauthenticated users are automatically redirected to the login page.
* **Profile Dashboard:** Users can view their account details upon successful login.
* **Editable Fields:** Implements a "read-only" vs. "edit mode" toggle, allowing users to update their personal information (Name, Age) dynamically.
* **Unique Username Validation:** Ensures that updated usernames do not conflict with existing users in the system.

### UI/UX Design
* **Responsive Layout:** Fully responsive design that works seamlessly on desktop and mobile devices.
* **Visual Feedback:** Professional success and error alerts for user actions (e.g., "Login Successful", "Password mismatch").
* **Component Architecture:** Clean separation of concerns using a Parent-Child component structure (Page Layout vs. Content Card).
* **Custom Styling:** Implemented using CSS Modules for scoped styling to prevent class name conflicts.

## Tech Stack

* **Frontend Framework:** React.js (Vite)
* **Styling:** Bootstrap 5 (React-Bootstrap) & Custom CSS Modules
* **Routing:** React Router DOM v6
* **Data Persistence:** Browser LocalStorage API
* **Version Control:** Git & GitHub

## Installation and Setup

Follow these steps to run the project locally on your machine.

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/YourUsername/NexusHub.git](https://github.com/YourUsername/NexusHub.git)
    cd NexusHub
    ```

2.  **Install Dependencies**
    Ensure you have Node.js installed. Run the following command to install the required packages:
    ```bash
    npm install
    ```

3.  **Start the Development Server**
    ```bash
    npm run dev
    ```

4.  **Access the Application**
    Open your browser and navigate to the local host link provided in the terminal (usually http://localhost:5173).

## Usage Guide

To test the application's full functionality:

1.  **Register:** Navigate to the "Get Started" page and create a new account.
2.  **Login:** Use the credentials you just created to sign in.
3.  **View Profile:** Upon login, you will be redirected to the Profile Dashboard.
4.  **Edit Data:** Click the "Edit Profile" button to unlock the input fields. Change your Name or Age and click "Save Changes" to persist the data.
5.  **Logout:** Click the Logout button to clear the session and return to the Login screen.

## Future Improvements

* **Backend Integration:** Connect to a Node.js/Express backend for real-time database management.
* **Password Encryption:** Implement hashing for passwords before storage for enhanced security.
* **Dark Mode:** Add a global theme toggle for dark/light mode preference.

## Author

Devarsh Doshi
Frontend Developer
https://github.com/Daredevil124