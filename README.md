# Physiotherapy Program Builder

A full-stack web application designed to help physiotherapists create and manage exercise programs for their patients. The project allows physiotherapists to select exercises, set parameters like sets, reps, hold time, and side, and save customized exercise programs. It is built using **ReactJS** for the frontend and **Node.js with Express** for the backend, with **Tailwind CSS** for styling.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Frontend](#frontend)
- [Backend](#backend)
- [License](#license)

## Project Overview

The Physiotherapy Program Builder allows physiotherapists to create personalized exercise programs for patients by selecting exercises from different categories (e.g., Upper Body, Lower Body). It includes functionality to manage exercise parameters, save programs, and add therapist notes.

## Tech Stack

- **Frontend**: ReactJS, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: Simulated using a `data.json` file
- **Version Control**: Git

## Features

- **Exercise Categories**: Users can view and select exercises categorized by body part (e.g., Upper Body, Lower Body).
- **Exercise Parameters**: Set sets, reps, hold time, and side (Left/Right) for each exercise.
- **Drag-and-Drop**: Rearrange exercises in the list to create customized programs.
- **Program Saving**: Save exercise combos and manage saved entries.
- **Therapist Notes**: Input section for therapists to add patient notes.
- **Clear All**: Reset the program inputs and clear all selections.

## Installation

### Clone the Repository

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/physiotherapy.git
    cd physiotherapy
    ```

### Install Dependencies

2. Install dependencies for both frontend and backend:

    **For Backend**:
    ```sh
    cd backend
    npm install
    ```

    **For Frontend**:
    ```sh
    cd ../frontend
    npm install
    ```

### Run the App

3. **Run the Backend**:
    ```sh
    cd backend
    npm run start
    ```

4. **Run the Frontend**:
    ```sh
    cd ../frontend
    npm run dev
    ```

    The app will run locally, and the frontend will be accessible at `http://localhost:5173`, while the backend will be running at `http://localhost:5000`.

## Frontend

The frontend is built using ReactJS and styled with Tailwind CSS. Users can:

- View and select exercises from various categories like "Upper Body" and "Lower Body."
- Set parameters like sets, reps, hold time, and side for each exercise.
- Save exercise programs and add therapist notes.

## Backend

The backend is built with Node.js and Express. It handles:

- **Exercise Categories**: API to retrieve exercise categories and their associated exercises.
- **Saving Programs**: API for saving and retrieving exercise programs.

### Backend API Endpoints

- **GET /categories**: Retrieve all exercise categories and the exercises under them.
- **POST /programs**: Save a new exercise program.
- **GET /programs**: Retrieve all saved exercise programs.
- **GET /programs/:id**: Retrieve a specific saved exercise program by ID.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For support or inquiries, please contact [028swarajkumar@gmail.com](mailto:028swarajkumar@gmail.com).
