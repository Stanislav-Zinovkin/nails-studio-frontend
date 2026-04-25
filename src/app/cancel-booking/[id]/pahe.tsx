'use client'

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CancelBookkingPage() {
    const params = useParams();
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"confirm" | "loading" | "success" | "error">("confirm");
    const handleCancel = async () => {
        setStatus("loading");
        try{
            const res = await fetch(`/api/booking/cancel/${params.id}`, {
                method: 'PATCH',
            });
            const data = await res.json();

            if(res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
                if (data.error === 'TOO_LATE_TO_CANCEL') {
                    setMessage("На жаль, скасувати запис можна не пізніше ніж за 7 годин до візиту.");

                } else if (data.error === "ALREADY_CANCELLED") {
                    setMessage('Цей запис уже був скасований раніше.')
                } else {
                    setMessage("Виникла помилка при скасуванні. Спробуйте пізніше або зв'яжіться з нами.");
                }
            }
        } catch (err) {
            setStatus('error');
            setMessage("Не вдалося з'єднатися з сервером.");
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-sm border border-[#10069F]/5 text-center">
                
                {/* СТАН: ПІДТВЕРДЖЕННЯ */}
                {status === "confirm" && (
                    <div className="animate-fadeIn">
                        <div className="w-16 h-16 bg-[#10069F]/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[#10069F]">
                            ❓
                        </div>
                        <h1 className="font-tenor text-xl text-[#10069F] uppercase tracking-widest mb-4">
                            Скасувати запис?
                        </h1>
                        <p className="text-[#10069F]/60 text-sm mb-8 leading-relaxed">
                            Ви впевнені, що хочете скасувати свій візит? <br/>
                            Цю дію неможливо буде скасувати.
                        </p>
                        <div className="space-y-3">
                            <button 
                                onClick={handleCancel}
                                className="w-full bg-red-500 text-white py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/10"
                            >
                                Так, скасувати запис
                            </button>
                            <button 
                                onClick={() => router.push('/')}
                                className="w-full bg-[#10069F]/5 text-[#10069F] py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-[#10069F]/10 transition-all"
                            >
                                Ні, повернутися
                            </button>
                        </div>
                    </div>
                )}

                {/* СТАН: ЗАВАНТАЖЕННЯ */}
                {status === "loading" && (
                    <div className="space-y-4 py-10">
                        <div className="animate-spin w-8 h-8 border-2 border-[#10069F] border-t-transparent rounded-full mx-auto"></div>
                        <p className="text-[#10069F]/60 text-sm">Скасовуємо ваше бронювання...</p>
                    </div>
                )}

                {/* СТАН: УСПІХ */}
                {status === "success" && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 text-2xl">
                            ✓
                        </div>
                        <p className="text-[#10069F] font-medium">Ваш візит успішно скасовано.</p>
                        <Link href="/" className="block w-full bg-[#10069F] text-white py-4 rounded-xl text-xs uppercase tracking-widest font-bold mt-4">
                            На головну
                        </Link>
                    </div>
                )}

                {/* СТАН: ПОМИЛКА */}
                {status === "error" && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto text-red-500 text-2xl">
                            !
                        </div>
                        <p className="text-[#10069F] font-medium leading-relaxed px-2">
                            {message}
                        </p>
                        <Link href="/" className="block w-full border border-[#10069F]/20 text-[#10069F] py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-[#10069F]/5 transition-colors">
                            На головну
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}