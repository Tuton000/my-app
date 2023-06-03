import { useReducer } from "react";

import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";

const UpdateTime = (availableTime, bookingDate) =>
    fetchAPI(new Date(bookingDate));

const initializeTimes = (initialAvailableTimes) =>
    [...initialAvailableTimes, ...fetchAPI(new Date())];

const submitForm = formData => submitAPI(formData);

const Bookings = () => {
    const [
        availableItems,
        dispatchOnBookingDateChange
    ] = useReducer(UpdateTime, [], initializeTimes);

    return (
        <div className="container-grid">
            <BookingForm
                availableItems={availableItems}
                dispatchOnBookingDateChange={dispatchOnBookingDateChange}
                submitForm={submitForm}
            />
        </div>
    );
}

export default Bookings;
