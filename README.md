# React Interactive Components

This project includes three interactive React components for practicing JavaScript and React functionality:
1. **Add a Box**: Allows users to create new boxes by clicking a button.
2. **Counter**: A component to increase, decrease, and reset a number.
3. **Calculator**: A basic calculator that performs simple arithmetic operations.

## Features

### 1. Add a Box Component

- **Description**: Users can click an "Add Box" button to create new boxes that appear stacked below each other. Each box is styled with Tailwind CSS.
- **CSS**: Tailwind CSS classes provide color, size, and layout styling for the boxes.

### 2. Counter Component

- **Description**: The counter displays a number that can be modified with three buttons:
  - **Increase**: Increases the number by 1.
  - **Decrease**: Decreases the number by 1.
  - **Reset**: Resets the count to 0.

### 3. Calculator Component

- **Description**: The calculator allows the user to perform basic arithmetic operations (addition, subtraction, multiplication, division).
- **Input Fields**: Users can enter two numbers and perform calculations by pressing corresponding buttons.

## Screenshot

![reactTest](https://github.com/user-attachments/assets/db674905-6fc6-4707-aeac-6569dba984a1)


> Screenshot showing the layout with the Box, Counter, and Calculator components.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Development tool for a fast development environment.

## Getting Started

To set up this project locally:

1. **Clone the repository**:
   ```bash
   git https://github.com/karinEkenberg/ReactTesting/
   cd react-interactive-components
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application** in your browser:
   - Go to `http://localhost:3000` to view the app.

## Project Structure

- **App Component**: Contains the main structure and includes the Header, Main (Box, Counter, and Calculator components), and Footer components.
- **AddBox Component**: Manages the creation of new boxes with each click of the "Add Box" button.
- **Counter Component**: Displays a count that can be increased, decreased, or reset.
- **Calculator Component**: Allows users to perform basic arithmetic calculations.
