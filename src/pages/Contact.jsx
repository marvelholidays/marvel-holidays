import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// 1. Supabase Initialization
const SUPABASE_URL = "https://aykroeczwleemzoprquq.supabase.co";
const SUPABASE_KEY = "sb_publishable_XXmItakChfRx_IW4FTqtnw_Hmvzc0NU";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const Contact = () => {
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS with your Public Key when component mounts
  useEffect(() => {
    emailjs.init("swgkKUaUHOaKrbxvX");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const payload = {
      full_name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      destination: formData.get("destination"),
      heard_from: formData.get("heardFrom"),
      message: formData.get("message"),
    };

    try {
      // Step A: Save entry to Supabase database table
      const { error: dbError } = await supabase
        .from("contact_inquiries")
        .insert([payload]);

      if (dbError) throw dbError;

      // Step B: Send Email Notification via EmailJS
      await emailjs.send(
        "service_grpq7cj", 
        "template_p38ddlb", 
        {
          fullName: payload.full_name,
          email: payload.email,
          phone: payload.phone,
          subject: payload.subject,
          destination: payload.destination,
          heardFrom: payload.heard_from,
          message: payload.message,
        },
        "swgkKUaUHOaKrbxvX"
      );

      alert("Thank you! Your enquiry has been saved and sent to our team.");
      event.target.reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please try again or check key settings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      {/* Hero banner */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>WE’RE HERE TO HELP</span>
          <h1>Let’s Plan Your Next Adventure</h1>
          <p>
            Have a question about a holiday package? Our team is ready
            to help you plan your perfect trip.
          </p>
        </div>
      </section>

      {/* Contact information and form */}
      <section className="contact-main">
        <div className="contact-information">
          <h2>Get in Touch</h2>
          <p className="contact-intro">
            We’d love to hear from you. Reach out through any of the
            channels below.
          </p>

          <div className="contact-cards">
            {/* Phone */}
            <div className="contact-card">
              <span className="contact-icon">☎</span>
              <div>
                <h3>Call Us</h3>
                <p>Talk to our travel team directly.</p>
                <strong>
                  <a href="tel:+917824887999">
                    +91 78248 87999
                  </a>
                </strong>
              </div>
            </div>

            {/* Email */}
            <div className="contact-card">
              <span className="contact-icon">✉</span>
              <div>
                <h3>Email Us</h3>
                <p>Send us your travel enquiries.</p>
                <strong>
                  <a href="mailto:support@marvelholidays.in">
                    support@marvelholidays.in
                  </a>
                </strong>
              </div>
            </div>

            {/* Office address */}
            <div className="contact-card">
              <span className="contact-icon">⌖</span>
              <div>
                <h3>Visit Our Office</h3>
                <p>We’re here to help you plan your next trip.</p>
                <strong>
                  Vinayak Avenue, Thuraipakkam,
                  Chennai, Tamil Nadu 600097
                </strong>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-card">
              <span className="contact-icon">◉</span>
              <div>
                <h3>Chat on WhatsApp</h3>
                <p>Quick responses and travel assistance.</p>
                <strong>
                  <a
                    href="https://wa.me/917824887999"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message us on WhatsApp
                  </a>
                </strong>
              </div>
            </div>
          </div>

          {/* Chennai office map */}
          <div className="contact-map">
            <iframe
              title="MARVEL Holidays office location in Thuraipakkam, Chennai"
              src="https://maps.google.com/maps?q=Marvel%20Holidays%2C%20Vinayak%20Avenue%2C%20Thuraipakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600097&t=&z=17&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* Contact form */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p>
            Fill in the details below and we’ll get back to you as soon
            as possible.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <label>
                Full Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Email Address *
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </label>

              <label>
                Subject *
                <select name="subject" defaultValue="" required>
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option>Holiday Package</option>
                  <option>Honeymoon Trip</option>
                  <option>Visa Enquiry</option>
                  <option>Customized Trip</option>
                  <option>Other Enquiry</option>
                </select>
              </label>
            </div>

            <label className="contact-full-field">
              Destination / Travel Interest *
              <select name="destination" defaultValue="" required>
                <option value="" disabled>
                  Select destination
                </option>
                <option>Domestic Holidays</option>
                <option>International Holidays</option>
                <option>Honeymoon</option>
                <option>Family Trip</option>
                <option>Customized Trip</option>
                <option>Visa Enquiry</option>
                <option>Not Decided Yet</option>
              </select>
            </label>

            {/* How did you hear about us? */}
            <fieldset className="source-question">
              <legend>✈ How did you hear about us? *</legend>

              <div className="source-options">
                {[
                  "Instagram",
                  "Google Search",
                  "Friend / Family",
                  "Advertisement",
                  "Other",
                ].map((source) => (
                  <label key={source}>
                    <input
                      type="radio"
                      name="heardFrom"
                      value={source}
                      required
                    />
                    {source}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="contact-full-field">
              Message *
              <textarea
                name="message"
                placeholder="Tell us about your travel plans, questions, or requirements..."
                rows="4"
                maxLength="500"
                required
              />
            </label>

            <button className="contact-submit" type="submit" disabled={loading}>
              {loading ? "Sending..." : "➤ \u00A0 Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp call-to-action */}
      <section className="contact-whatsapp">
        <div className="whatsapp-plane">✈</div>

        <div>
          <h2>Prefer WhatsApp?</h2>
          <p>Get quick answers to your travel queries.</p>
        </div>

        <a
          className="whatsapp-button"
          href="https://wa.me/917824887999"
          target="_blank"
          rel="noreferrer"
        >
          ◉ &nbsp; Chat on WhatsApp
        </a>
      </section>
    </main>
  );
};

export default Contact;