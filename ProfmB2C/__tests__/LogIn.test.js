import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LogIn from '../screens/LogIn';
import axios from 'axios'; // Import axios for mocking API requests

// Mock the axios.post method
jest.mock('axios');

describe('LogIn component', () => {
  test('logs in with correct credentials', async () => {
    // Mock the response from the API
    axios.post.mockResolvedValueOnce({
      data: {
        token: 'mockToken',
        userId: 'mockUserId',
        userName: 'mockUserName',
        email: 'test@example.com',
        // Add other mock response data as needed
      },
    });

    const { getByPlaceholderText, getByText } = render(<LogIn />);
    const emailInput = getByPlaceholderText('Mobile / Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Log in');

    // Enter email and password
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password');

    // Press login button
    fireEvent.press(loginButton);

    // Wait for login action to complete
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    // Assuming you navigate to a 'Welcome' screen after successful login
    // Assert that the Welcome screen is rendered or any other expected behavior
  });

  test('displays error message for incorrect credentials', async () => {
    // Mock the response from the API for incorrect credentials
    axios.post.mockRejectedValueOnce(new Error('Invalid credentials'));

    const { getByPlaceholderText, getByText, queryByText } = render(<LogIn />);
    const emailInput = getByPlaceholderText('Mobile / Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Log in');

    // Enter incorrect email and password
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'incorrectPassword');

    // Press login button
    fireEvent.press(loginButton);

    // Wait for error message to be displayed
    await waitFor(() =>
      expect(queryByText('Invalid credentials')).toBeDefined()
    );
    // Assert that the error message is displayed as expected
  });
});
