import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "../Header"


test('Header test', () => {
    render(<Header />)
    const headerDOM = screen.getByTestId('header');
    expect(headerDOM).toBeInTheDocument();
})

