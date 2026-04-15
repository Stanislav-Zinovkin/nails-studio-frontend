'use client'

import { updateBookingStatus, deleteBooking } from "./actions"

type BookingStatus = 'CONFIRMED' | 'CANCELLED' | 'PENDING';

export default function BookingActions({ id, currentStatus }: { id: string, currentStatus: BookingStatus }) {
    return (
        <div className="flex items-center justify_center space-x-2">
            {/*button-confirm*/}
            {currentStatus !== 'CONFIRMED' && (
                <button
                  onClick={() => updateBookingStatus(id, 'CONFIRMED')}
                  className="text-xs bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white py-1 px-2 rounded transition">
                    Підтвердити
                  </button>    
                )}
                {/*button-cancel*/}
                {currentStatus !== 'CANCELLED' && (
                    <button
                    onClick={() => updateBookingStatus(id, 'CANCELLED')}
                    className="text-xs bg-gray-400 hover:bg-gray-500 hover:cursor-pointer text-white py-1 px-2 rounded transition">
                        
                    Скасувати
                    </button>
                )}
                {/*button-delete*/}
                    <button 
                    onClick={() => {
                        if(confirm("Видалити запис назавжди?")) deleteBooking(id);
                    }}
                    className="text-xs bg-red-100 hover:bg-red-200 hover:cursor-pointer text-red-600 py-1 px-2 rounded transition">
                        🗑️
                    </button>
        </div>
    );
}