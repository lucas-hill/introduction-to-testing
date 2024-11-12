import { screen, fireEvent } from '@testing-library/dom'; //This gives access to the helper functions in the library
import userEvent from '@testing-library/user-event'; //This helps us simulate user events in our mock DOM
// import { screen } from '@testing-library/vue';
// import { screen } from '@testing-library/react';
import { createButton } from './button.js';

describe('createButton', () => {
  //This will clear out the DOM between the tests
  afterEach(() => {
    document.body.innerHTML = '';
  })

  it('should create a button element', () => {
    document.body.appendChild(createButton());
    const button = screen.getByRole('button', { name: 'Click Me' });

    expect(button).toBeInTheDocument();
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button', { name: 'Click Me' });
    await userEvent.click(button); //simulating a user click

    expect(button.textContent).toBe('Clicked!');
  });
});
