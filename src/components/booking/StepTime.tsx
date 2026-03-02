'use client'

import React from "react";

interface StepTimeProps {
    t: any;
    selectedTime: string;
    onSelect: (time: string) => void;
    onNext: () => void;
    onBack: () => void;
}
const StepTime = ({ t, selectedTime, onSelect, onNext, onBack}: StepTimeProps) => {
    const timeSlots = [
        "09:00", "10:30", "12:00",
        "13:30", "15:00", "16:30",
        "17:00", "17:30", "18:00"
        
    ];
    return (
        <div className="animate-fadeIn">
            <h3 className="text-[#10069F] text-xl font-light mb-6 text-center">
                {t.bookingModal.pickTime}
            </h3>
            <div className="grid grid-cols-3 gap-3 mb-8 ">
                {timeSlots.map((time) => (
                    <button key={time} onClick={() => onSelect(time)} className={`py-3 rounded-2xl border transition-all cursor-pointer text-sm ${selectedTime === time ? "bg-[#10069F] text-white border-[#10069F] shadow-lg" : "border-[#10069F]/10 text-[#10069F] hover:border-[#10069F]/40"}`}>
                        {time}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <button 
                   onClick={onNext}
                   disabled={!selectedTime}
                   className={`w-full py-4 rounded-[20px] transition-all font-light cursor-pointer ${
                        selectedTime 
                        ? "bg-[#10069F] text-white shadow-md hover:bg-[#10069F]/90" 
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}>
                        {t.bookingModal.confirmTime}
                    </button>
                    <button onClick={onBack} className="w-full text-[#10069F]/40 text-[9px] uppercase tracking-widest mt-2 cursor-pointer">
                        {t.common.back}
                    </button>
            </div>
        </div>
    );
};

export default StepTime;