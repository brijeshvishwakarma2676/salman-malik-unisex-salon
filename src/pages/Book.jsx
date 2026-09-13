import { useState } from "react";
import { useLocation } from "react-router-dom";
import Seo from "@/components/common/Seo";
import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import Field from "@/components/common/Field";
import Button from "@/components/common/Button";
import { salon } from "@/data/salon";
import { telHref, whatsappHref, formatDateReadable } from "@/lib/format";
import { validateBookingForm, hasErrors } from "@/lib/validation";
import { submitBooking } from "@/lib/booking";
import { seo } from "@/data/seo";

const initialValues = {
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

export default function Book() {
  const location = useLocation();
  const [values, setValues] = useState(() => ({
    ...initialValues,
    service: location.state?.selectedService || "",
  }));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [resultMessage, setResultMessage] = useState("");

  function handleChange(field) {
    return (event) =>
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateBookingForm(values);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) return;

    setStatus("submitting");
    const result = await submitBooking(values);
    setStatus(result.status);
    setResultMessage(result.message);
  }

  const whatsappMessage = `Hi! I would like to request an appointment:\n- Name: ${values.name}\n- Service: ${values.service}\n- Date: ${formatDateReadable(values.date)}\n- Time: ${values.time}\n- Phone: ${values.phone}`;

  return (
    <>
      <Seo {...seo.book} />
      <Section surface="dark" className="pb-10 pt-14 md:pt-20">
        <Container>
          <h1 className="text-display-2">Book an appointment</h1>
          <p className="mt-3 max-w-[60ch] text-body text-inverse/80">
            Send your details below. This is a request, not a confirmed booking
            — we'll call or text you to lock in the slot.
          </p>
        </Container>
      </Section>

      <Section surface="light">
        <Container className="max-w-[640px]">
          {status === "ready" ? (
            <div className="rounded-media border border-line bg-surface p-6 shadow-panel animate-rise-in">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-inverse text-caption font-bold">
                  ✓
                </span>
                <p className="text-subheading font-display font-semibold">
                  Request Created Successfully!
                </p>
              </div>
              <p className="mt-2 text-body text-ink/80">{resultMessage}</p>
              <dl className="mt-4 grid grid-cols-2 gap-2 text-body text-ink/75 border-t border-line/60 pt-4">
                <dt className="font-display">Name</dt>
                <dd>{values.name}</dd>
                <dt className="font-display">Phone</dt>
                <dd>{values.phone}</dd>
                <dt className="font-display">Service</dt>
                <dd>{values.service}</dd>
                <dt className="font-display">Date</dt>
                <dd>{formatDateReadable(values.date)}</dd>
                <dt className="font-display">Time</dt>
                <dd>{values.time}</dd>
              </dl>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href={telHref(salon.phone.tel)}
                  variant="primary"
                >
                  Call {salon.phone.display} to confirm
                </Button>
                {salon.whatsapp.enabled && salon.whatsapp.number && (
                  <Button
                    href={whatsappHref(salon.whatsapp.number, whatsappMessage)}
                    variant="secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Send Request via WhatsApp
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              {location.state?.selectedService && (
                <div className="rounded-control bg-accent-muted/50 p-3.5 border border-accent/30 text-caption text-accent">
                  ✓ Pre-filled selected service: <strong>{location.state.selectedService}</strong>
                </div>
              )}
              <Field label="Name" id="book-name" error={errors.name}>
                <input
                  id="book-name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "book-name-error" : undefined}
                  className="min-h-11 rounded-control border border-line bg-surface px-4 text-body"
                />
              </Field>
              <Field label="Mobile number" id="book-phone" error={errors.phone}>
                <input
                  id="book-phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "book-phone-error" : undefined
                  }
                  className="min-h-11 rounded-control border border-line bg-surface px-4 text-body"
                />
              </Field>
              <Field label="Service" id="book-service" error={errors.service}>
                <input
                  id="book-service"
                  type="text"
                  value={values.service}
                  onChange={handleChange("service")}
                  placeholder="e.g. Haircut, Bridal Makeup, Hair Colour..."
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={
                    errors.service ? "book-service-error" : undefined
                  }
                  className="min-h-11 rounded-control border border-line bg-surface px-4 text-body"
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Preferred date"
                  id="book-date"
                  error={errors.date}
                >
                  <input
                    id="book-date"
                    type="date"
                    value={values.date}
                    onChange={handleChange("date")}
                    aria-invalid={Boolean(errors.date)}
                    aria-describedby={
                      errors.date ? "book-date-error" : undefined
                    }
                    className="min-h-11 rounded-control border border-line bg-surface px-4 text-body"
                  />
                </Field>
                <Field
                  label="Preferred time"
                  id="book-time"
                  error={errors.time}
                >
                  <input
                    id="book-time"
                    type="time"
                    value={values.time}
                    onChange={handleChange("time")}
                    aria-invalid={Boolean(errors.time)}
                    aria-describedby={
                      errors.time ? "book-time-error" : undefined
                    }
                    className="min-h-11 rounded-control border border-line bg-surface px-4 text-body"
                  />
                </Field>
              </div>
              <Field label="Notes (optional)" id="book-notes">
                <textarea
                  id="book-notes"
                  rows={3}
                  value={values.notes}
                  onChange={handleChange("notes")}
                  className="rounded-control border border-line bg-surface px-4 py-3 text-body"
                />
              </Field>
              <Button
                type="submit"
                variant="primary"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send booking request"}
              </Button>
            </form>
          )}
        </Container>
      </Section>
    </>
  );
}
