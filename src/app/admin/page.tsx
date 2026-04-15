import { prisma } from "@/lib/prisma";
import BookingActions from "./BookingActions";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
    const bookings = await prisma.booking.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">Керування записами</h1>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Дата / Час</th>
                                <th className="py-3 px-6 text-left">Клієнт</th>
                                <th className="py-3 px-6 text-left">Послуга</th>
                                <th className="py-3 px-6 text-left">Статус</th>
                                <th className="py-3 px-6 text-center">Дії</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {bookings.map((booking) => (
                                <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    {/* 1. Дата та час */}
                                    <td className="py-3 px-6 text-left">
                                        <div className="font-medium text-gray-800">{booking.date}</div>
                                        <div className="text-xs text-gray-500">{booking.time}</div>
                                    </td>
                                    
                                    {/* 2. Клієнт */}
                                    <td className="py-3 px-6 text-left">
                                        <div className="font-medium text-gray-800">{booking.name}</div>
                                        <div className="text-xs text-gray-500">{booking.phone}</div>
                                    </td>
                                    
                                    {/* 3. Послуга */}
                                    <td className="py-3 px-6 text-left">
                                        <span className="bg-purple-100 text-purple-600 py-1 px-3 rounded-full text-xs">
                                            {booking.service}
                                        </span>
                                    </td>

                                    {/* 4. Візуальний статус */}
                                    <td className="py-3 px-6 text-left">
                                        <span className={`py-1 px-3 rounded-full text-xs font-bold ${
                                            booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-600' : 
                                            booking.status === 'CANCELLED' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                            {booking.status}
                                        </span>
                                    </td>

                                    {/* 5. Кнопки дій (BookingActions) */}
                                    <td className="py-3 px-6 text-center">
                                        <BookingActions id={booking.id} currentStatus={booking.status as 'PENDING' | 'CONFIRMED' | 'CANCELLED'}/>
                                    </td>
                                </tr>
                            ))}
                            {bookings.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="py-10 text-center text-gray-500 italic">
                                        Записів поки немає...
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}