import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import TodoApp from './Todo';
import React from 'react';
import {
  savePreview,
  resetPreviews,
} from '@react-native-test-preview/test-preview';

describe('Todo', () => {
  beforeAll(() => resetPreviews());
  afterEach(() => cleanup());

  async function addTask(taskName: string) {
    const inputField = await screen.findByPlaceholderText('Add a new task...');
    fireEvent.changeText(inputField, taskName);
    const addButton = await screen.findByTestId('addTodoBtn');
    fireEvent.press(addButton);
  }

  it('should add a task', async () => {
    render(<TodoApp />);

    await addTask('New todo task');
    await addTask('Another todo task');
    await addTask('Yet another todo task');
    await addTask('New task');

    savePreview('should add a task', screen.toJSON());

    expect(screen.getByText('Another todo task')).toBeTruthy();
  });
});
