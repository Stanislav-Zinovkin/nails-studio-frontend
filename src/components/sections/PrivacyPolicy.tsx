import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdate = "15.04.2026";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-slate-900 px-8 py-10 text-white">
          <div className="flex items-center gap-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <h1 className="text-3xl font-bold tracking-tight">Polityka Prywatności</h1>
          </div>
          <p className="text-slate-400">Ostatnia aktualizacja: {lastUpdate}</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3 border-b pb-2">1. Informacje ogólne</h2>
            <p>Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej jest:</p>
            <div className="mt-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 italic">
              <p className="font-medium text-slate-900">[Twoja Nazwa Firmy / Imię i Nazwisko]</p>
              <p>Poznań, Polska</p>
              <p>NIP: [Twój NIP]</p>
              <p>Email: [Twój email kontaktowy]</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3 border-b pb-2">2. Podstawa i Cel Przetwarzania</h2>
            <p>Dane osobowe są przetwarzane zgodnie z rozporządzeniem **RODO**. Cele przetwarzania obejmują:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
              <li><strong>Obsługa zapytań:</strong> Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes).</li>
              <li><strong>Realizacja usług:</strong> Art. 6 ust. 1 lit. b RODO (niezbędne do wykonania umowy).</li>
              <li><strong>Analityka:</strong> Art. 6 ust. 1 lit. f RODO (optymalizacja działania serwisu).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3 border-b pb-2">3. Twoje Prawa</h2>
            <p>W związku z przetwarzaniem danych osobowych, użytkownikowi przysługuje prawo do:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {[
                "Dostępu do danych",
                "Sprostowania danych",
                "Usunięcia (Prawo do zapomnienia)",
                "Ograniczenia przetwarzania",
                "Przenoszenia danych",
                "Sprzeciwu wobec przetwarzania"
              ].map((right) => (
                <div key={right} className="flex items-center gap-2 p-2 rounded border border-gray-100 bg-gray-50/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">{right}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">
              Skargi można kierować do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3 border-b pb-2">4. Pliki Cookies</h2>
            <p>Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania oraz w celach analitycznych. Możesz zarządzać ustawieniami cookies bezpośrednio w swojej przeglądarce.</p>
          </section>

          <section className="bg-gray-900 text-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Kontakt</h2>
            <p className="text-gray-400 text-sm mb-4">
              Masz pytania dotyczące Twoich danych? Napisz do nas bezpośrednio.
            </p>
            <a 
              href="mailto:[email]" 
              className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2 rounded-md font-medium"
            >
              Wyślij zapytanie
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;