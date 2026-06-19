import { useState } from "react";
import { COMPANY } from "../data/siteData";
import "./PlanForm.css";

export default function PlanForm({ compact = false }) {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    dates: "", nights: "7", dest: "", budget: "", guests: "2",
    name: "", email: "", phone: "", notes: "",
  });

  const set = (key, value) => {
    setError("");
    setForm(current => ({ ...current, [key]: value }));
  };

  const enquiryText = [
    "Hello Ebby Adventures & Safaris,",
    "",
    "I would like help planning a Tanzania trip.",
    "",
    `Preferred arrival date: ${form.dates || "Flexible / not sure yet"}`,
    `Length of stay: ${form.nights} nights`,
    `Main interest: ${form.dest || "Not selected yet"}`,
    `Guests: ${form.guests}`,
    `Budget level: ${form.budget || "Not selected yet"}`,
    `Notes: ${form.notes || "None shared yet"}`,
    "",
    "Contact details:",
    `Name: ${form.name}`,
    `Email: ${form.email || "Not provided"}`,
    `Phone / WhatsApp: ${form.phone || "Not provided"}`,
  ].join("\n");

  const emailHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent("New Tanzania trip enquiry")}&body=${encodeURIComponent(enquiryText)}`;
  const whatsappHref = `${COMPANY.whatsapp}?text=${encodeURIComponent(enquiryText)}`;

  const submit = () => {
    if (!form.name.trim()) {
      setError("Please enter your name so we know who to reply to.");
      return;
    }

    if (!form.email.trim() && !form.phone.trim()) {
      setError("Please add either your email or WhatsApp number.");
      return;
    }

    setDone(true);
    window.location.href = emailHref;
  };

  if (done) {
    return (
      <div className={`plan-form${compact ? " compact" : ""}`}>
        <div className="plan-done">
          <div className="plan-done-icon">✓</div>
          <h3>Your enquiry is ready to send!</h3>
          <p>Your email app should open with all the trip details filled in. If it doesn't, use the buttons below.</p>
          <div className="plan-done-actions">
            <a href={emailHref} className="btn-dark">Open email again</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-whatsapp">💬 Send on WhatsApp</a>
          </div>
          <button type="button" className="plan-edit" onClick={() => setDone(false)}>Edit enquiry</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`plan-form${compact ? " compact" : ""}`}>
      <div className="form-progress">
        {[1,2,3].map(s => (
          <div key={s} className={`form-step-dot${step >= s ? " active" : ""}`}>{s}</div>
        ))}
      </div>

      {step === 1 && (
        <div className="form-body">
          <h3>When & where?</h3>
          <label>Preferred arrival date
            <input type="date" value={form.dates} onChange={e => set("dates", e.target.value)} />
          </label>
          <label>Length of stay
            <select value={form.nights} onChange={e => set("nights", e.target.value)}>
              {[3,4,5,6,7,8,9,10,12,14,21].map(n => <option key={n} value={n}>{n} nights</option>)}
            </select>
          </label>
          <label>What interests you most?
            <select value={form.dest} onChange={e => set("dest", e.target.value)}>
              <option value="">Select an experience</option>
              <option>Serengeti & Ngorongoro Safari</option>
              <option>Kilimanjaro Trek</option>
              <option>Safari & Zanzibar Beach</option>
              <option>Southern Tanzania (Selous)</option>
              <option>Family Safari</option>
              <option>Honeymoon Safari</option>
              <option>Cultural Tour</option>
              <option>Full Tanzania Circuit</option>
            </select>
          </label>
          <button type="button" className="btn-form-next" onClick={() => setStep(2)}>Continue →</button>
        </div>
      )}

      {step === 2 && (
        <div className="form-body">
          <h3>Who's travelling?</h3>
          <label>Number of guests
            <select value={form.guests} onChange={e => set("guests", e.target.value)}>
              {[1,2,3,4,5,6,8,10,12].map(n => <option key={n}>{n} {n===1?"person":"people"}</option>)}
            </select>
          </label>
          <label>Budget level
            <select value={form.budget} onChange={e => set("budget", e.target.value)}>
              <option value="">Select budget range</option>
              <option>Value — budget-conscious adventure</option>
              <option>Mid-range — comfort & quality</option>
              <option>Premium — upmarket lodges</option>
              <option>Luxury — exclusive properties</option>
            </select>
          </label>
          <label>Any specific wishes or questions?
            <textarea rows={3} placeholder="E.g. celebrate anniversary, need child-friendly lodges, want hot air balloon..." value={form.notes} onChange={e => set("notes", e.target.value)} />
          </label>
          <div className="form-row">
            <button type="button" className="btn-form-back" onClick={() => setStep(1)}>← Back</button>
            <button type="button" className="btn-form-next" onClick={() => setStep(3)}>Continue →</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-body">
          <h3>Your contact details</h3>
          <label>Full name
            <input type="text" placeholder="Your name" value={form.name} onChange={e => set("name", e.target.value)} />
          </label>
          <label>Email address
            <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set("email", e.target.value)} />
          </label>
          <label>Phone / WhatsApp (inc. country code)
            <input type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={e => set("phone", e.target.value)} />
          </label>
          {error && <div className="form-error">{error}</div>}
          <div className="form-row">
            <button type="button" className="btn-form-back" onClick={() => setStep(2)}>← Back</button>
            <button type="button" className="btn-form-submit" onClick={submit}>Send enquiry →</button>
          </div>
        </div>
      )}
    </div>
  );
}
