import { salon } from "@/data/salon";

/**
 * @typedef {Object} BookingPayload
 * @property {string} name
 * @property {string} phone
 * @property {string} service
 * @property {string} date
 * @property {string} time
 * @property {string} [notes]
 */

/**
 * @typedef {Object} BookingResult
 * @property {'ready'|'sent'|'error'} status - 'ready' means the visitor still has
 *   to send it themselves (no backend); it is never a confirmed booking.
 * @property {string} message
 */

const STRATEGY = salon.bookingEnabled ? "whatsapp" : "none";

/**
 * Submits an enquiry. There is no backend yet, so the default strategy 'none'
 * simply hands back a 'ready' result the UI renders as "ready to send" — never
 * as a confirmed appointment. Flipping salon.bookingEnabled + wiring a real
 * strategy here is the only change needed once a backend exists.
 * @param {BookingPayload} payload
 * @returns {Promise<BookingResult>}
 */
export async function submitBooking(payload) {
  switch (STRATEGY) {
    case "whatsapp": {
      if (!salon.whatsapp.enabled || !salon.whatsapp.number) {
        return {
          status: "ready",
          message: "Your details are ready — call the salon to confirm.",
        };
      }
      return {
        status: "ready",
        message: "Your details are ready to send over WhatsApp.",
      };
    }
    case "none":
    default:
      void payload;
      return {
        status: "ready",
        message:
          "Your details are ready — call the salon to confirm your slot.",
      };
  }
}
