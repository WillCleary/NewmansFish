import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FishReport from './FishReport';

describe('<FishReport />', () => {
  test('it should mount', () => {
    render(<FishReport />);
    
    const fishReport = screen.getByTestId('FishReport');

    expect(fishReport).toBeInTheDocument();
  });
});