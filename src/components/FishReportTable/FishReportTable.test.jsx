import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FishReportTable from './FishReportTable';

describe('<FishReportTable />', () => {
  test('it should mount', () => {
    render(<FishReportTable />);
    
    const fishReportTable = screen.getByTestId('FishReportTable');

    expect(fishReportTable).toBeInTheDocument();
  });
});