import { useState } from "react";
import Seo from "@/components/common/Seo";
import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import Field from "@/components/common/Field";
import Button from "@/components/common/Button";
import LocationSection from "@/components/sections/LocationSection";
import FAQSection from "@/components/sections/FAQSection";
import { salon } from "@/data/salon";
import { telHref } from "@/lib/format";
import {
  validateRequired,
  validateIndianMobile,
  hasErrors,
} from "@/lib/validation";
import { submitBooking } from "@/lib/booking";
import { seo } from "@/data/seo";

const initialValues = { name: "", phone: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [resultMessage, setResultMessage] = useState("");

  function handleChange(field) {
    return (event) =>
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {
      name: validateRequired(values.name, "Name"),
      phone: validateIndianMobile(values.phone),
      message: validateRequired(values.message, "Message"),
    };
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) return;

    setStatus("submitting");
    const result = await submitBooking(values);
    setStatus(result.status);
    setResultMessage(result.message);
  }

  return (
    <>
      <Seo {...seo.contact} />
      <Section surface="dark" className="pb-10 pt-14 md:pt-20">
        <Container>
          <h1 className="text-display-2">Contact</h1>
          <p className="mt-3 max-w-[60ch] text-body text-inverse/80">
            Call for the fastest answer, or send your details below — this form
            doesn't book anything by itself.
          </p>
        </Container>
      </Section>

      <Section surface="light">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-heading">Reach us directly</h2>
            <a
              href={telHref(salon.phone.tel)}
              className="mt-4 block text-subheading"
            >
              {salon.phone.display}
            </a>
            <p className="mt-4 text-body text-ink/75">
              {salon.address.line1}, {salon.address.line2},{" "}
              {salon.address.locality}
            </p>
            <p className="mt-1 text-body text-ink/75">
              {salon.hours ?? "Call to confirm timings"}
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={salon.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-body underline"
              >
                Instagram
              </a>
              <a
                href={salon.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-body underline"
              >
                Facebook
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="md:col-span-7">
            {status === "ready" ? (
              <div className="rounded-media border border-line bg-surface p-6 shadow-panel">
                <p className="text-subheading">{resultMessage}</p>
                <p className="mt-2 text-body text-ink/75">
                  This is a request, not a confirmation — call to lock in your
                  slot.
                </p>
                <Button
                  href={telHref(salon.phone.tel)}
                  variant="primary"
                  className="mt-4"
                >
                  Call {salon.phone.display}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <Field label="Name" id="contact-name" error={errors.name}>
                  <input
                    id="contact-name"
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    className="min-h-11 rounded-control border border-line bg-surface px-4 text-body"
                  />
                </Field>
                <Field
                  label="Mobile number"
                  id="contact-phone"
                  error={errors.phone}
                >
                  <input
                    id="contact-phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? "contact-phone-error" : undefined
                    }
                    className="min-h-11 rounded-control border border-line bg-surface px-4 text-body"
                  />
                </Field>
                <Field
                  label="Message"
                  id="contact-message"
                  error={errors.message}
                >
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className="rounded-control border border-line bg-surface px-4 py-3 text-body"
                  />
                </Field>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </Button>
              </div>
            )}
          </form>
        </Container>
      </Section>

      <FAQSection surface="dark" />
      <LocationSection />
    </>
  );
}
