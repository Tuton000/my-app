import {render, screen} from '@testing-library/react';
import BookingForm from './BookingForm';

test('choose date and time', () => {
    render(<BookingForm />);
});