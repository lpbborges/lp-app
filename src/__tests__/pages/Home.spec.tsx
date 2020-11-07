import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import Home from '../../pages/Home';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Home page', () => {
  it('should be able to go to Schedules page when a card is pressed', () => {
    const { getByTestId } = render(<Home />);

    fireEvent.press(getByTestId('week-schedules'));
    fireEvent.press(getByTestId('to-receive-schedules'));

    expect(mockedNavigate).toHaveBeenNthCalledWith(2, 'Schedules');
  });
});
