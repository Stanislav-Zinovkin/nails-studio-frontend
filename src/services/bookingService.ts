export interface BookingDetails {
    name: string;
    phone: string;
    service: string;
    date: string;
    time: string;
}

export const sendBooking = async (data: BookingDetails) => {
    const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    if(!response.ok) {
        throw new Error('Failed to send booking');
    }

    return await response.json();
};