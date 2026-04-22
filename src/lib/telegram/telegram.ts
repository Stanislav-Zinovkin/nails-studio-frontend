
export async function sendTelegramNotification(data: any, bookingId: string) {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
            const chatID = process.env.TELEGRAM_CHAT_ID;
            if (!botToken || !chatID) return;
            const message = `
                  ✨ *Новий запис у Wita Mosondz!* 
                  🆔 ID: ${bookingId.slice(-5)}
                  👤 *Клієнт:* ${data.name}
                  📞 *Телефон:* ${data.phone}
                  💅 *Послуга:* ${data.service}
                  📅 *Дата:* ${data.date}
                  ⏰ *Час:* ${data.time}
            `.trim();

            try { await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            });
        } catch (err) {
            console.error("TG notification error:", err);
        }
    }
