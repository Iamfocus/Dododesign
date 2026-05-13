"use client";
import Button from "@/components/Button";
import PagesHeader from "@/components/PagesHeader";
import { baseMetadata } from "@/Services/shared-metadata";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export const metadata = {
  ...baseMetadata,
  title: "Contact DODO",
  description: "Keep in touch with DODO",
};

function ContactClient() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [startedAt] = useState(() => Date.now());

  useEffect(() => {
    if (submitted) {
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const payload = {
      firstName: (form.elements.namedItem("FNAME") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("LNAME") as HTMLInputElement).value,
      title: (form.elements.namedItem("TITLE") as HTMLInputElement).value,
      email: (form.elements.namedItem("EMAIL") as HTMLInputElement).value,
      organization: (form.elements.namedItem("COMPANY") as HTMLInputElement)
        .value,
      country: (form.elements.namedItem("COUNTRY") as HTMLInputElement).value,
      message: (form.elements.namedItem("MESSAGE") as HTMLTextAreaElement)
        .value,
      jobLevel: (form.elements.namedItem("JOB_LEVEL") as HTMLSelectElement)
        .value,
      consent: (form.elements.namedItem("CONSENT") as HTMLInputElement)
        .checked,
      companyWebsite: (
        form.elements.namedItem("COMPANY_WEBSITE") as HTMLInputElement
      ).value,
      startedAt,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to send message right now.");
      }

      setMessage("");
      setSubmitted(true);
      form.reset();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "There was an error submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 20000);
    }
  };

  return (
    <div className="bg-white w-full flex flex-col items-start justify-center">
      <div className="lg:w-3/5 xl:w-4/5 2xl:w-full ">
        <PagesHeader
          title="Contact us"
          description="Let's talk about how we can work together!"
        />
      </div>

      <div className="bg-dodo-grey-2 w-full flex flex-col lg:flex-row gap-10 lg:gap-20 p-5 md:p-10 lg:p-[100px]">
        {submitted && (
          <div className="flex flex-col gap-10 items-center mx-auto">
            <p className="text-2xl sm:text-5xl md:text-[64px] leading-[100%] tracking-[-3%] font-helvetica-medium text-dodo-black">
              Success!
            </p>
            <p
              className={`text-[18px] sm:text-2xl lg:text-[28px] text-dodo-black w-[90%] sm:w-4/6 md:w-3/4 lg:w-2/4 xl:2/5 2xl:w-2/5 text-center`}
            >
              We've received your message and someone from the team will be in
              touch shortly to continue the conversation.
            </p>
          </div>
        )}
        {!submitted && (
          <div className="contact w-full 2xl:h-[980px] overflow-hidden bg-dodo-grey-2 flex flex-col lg:flex-row gap-20 justify-between items-start">
            <div className="form-fields flex flex-col gap-6 h-full w-full max-w-[1000px] xl:w-1/2 bg-dodo-grey-2">
              <p className="text-[20px] md:text-[28px] leading-[120%] tracking-[-3%] text-black">
                Fill the form below to start the conversation.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-16">
                <div className="input-fields flex flex-col gap-6">
                  <div style={{ display: "none" }} aria-hidden="true">
                    <input
                      type="text"
                      name="COMPANY_WEBSITE"
                      tabIndex={-1}
                      autoComplete="off"
                      defaultValue=""
                    />
                  </div>
                  {/* Visible form fields */}
                  <div className="flex flex-col w-full md:flex-row gap-6 text-[#34393E]">
                    <input
                      type="text"
                      name="FNAME"
                      placeholder="First Name *"
                      className="w-full border-b outline-dodo-black px-4 pb-4 font-inter font-medium placeholder:opacity-100 placeholder:uppercase placeholder:text-[##34393E] border-[##34393E]  py-5 pl-4"
                      required
                    />
                    <input
                      type="text"
                      name="LNAME"
                      placeholder="Last Name *"
                      className="w-full border-b outline-dodo-black px-4 pb-4 font-inter font-medium placeholder:opacity-100 placeholder:uppercase placeholder:text-[##34393E] border-[##34393E]  py-5 pl-4"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="TITLE"
                    required
                    placeholder="Job Title *"
                    className="w-full border-b outline-dodo-black px-4 pb-4 py-5  font-inter font-medium placeholder:opacity-100 placeholder:uppercase placeholder:text-[##34393E] border-[##34393E] pl-4"
                  />{" "}
                  <div className="w-full border-b outline-dodo-black focus:outline-dodo-black uppercase text-dodo-[##34393E] border-[##34393E] ">
                    <select
                      name="JOB_LEVEL"
                      defaultValue=""
                      className="w-full h-full outline-transparent focus:outline-dodo-black m-0! uppercase text-[##34393E] px-4 pb-4 py-5"
                    >
                      <option className="" value="" disabled>
                        Position/Level
                      </option>
                      <option className="" value="Manager">
                        Manager
                      </option>
                      <option className="" value="Operations">
                        Operations
                      </option>
                      <option className="" value="CEO">
                        CEO
                      </option>
                      <option className="" value="Head of Marketing">
                        Head of Marketing
                      </option>
                      <option className="" value="Program Director">
                        Program Director
                      </option>
                      <option className="" value="Project Manager">
                        Project Manager
                      </option>
                      <option className="" value="Other">
                        Other
                      </option>
                    </select>{" "}
                  </div>
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Email Address *"
                    className="w-full border-b outline-dodo-black px-4 pb-4 font-inter font-medium placeholder:opacity-100 placeholder:uppercase placeholder:text-[##34393E] border-[##34393E]  py-5 pl-4"
                    required
                  />
                  <input
                    type="text"
                    name="COMPANY"
                    placeholder="Organization *"
                    className="w-full border-b outline-dodo-black px-4 pb-4 font-inter font-medium placeholder:opacity-100 placeholder:uppercase placeholder:text-[##34393E] border-[##34393E]  py-5 pl-4"
                    required
                  />
                  <input
                    type="text"
                    name="COUNTRY"
                    placeholder="Country"
                    className="w-full border-b outline-dodo-black px-4 pb-4 font-inter font-medium placeholder:opacity-100 placeholder:uppercase placeholder:text-[##34393E] border-[##34393E]  py-5 pl-4"
                  />
                  <textarea
                    rows={5}
                    name="MESSAGE"
                    placeholder="what is the problem you're trying to solve?"
                    className="w-full border-b outline-black px-4 pb-4 font-inter font-medium placeholder:opacity-100 placeholder:uppercase placeholder:text-[##34393E] border-[##34393E]  py-5 pl-4"
                  />
                  <div className="flex items-start gap-2">
                    <input
                      className="w-5 h-5 checked:accent-dodo-black cursor-pointer"
                      type="checkbox"
                      required
                      name="CONSENT"
                      id="CONSENT"
                    />
                    <label
                      htmlFor="CONSENT"
                      className="text-lg text-dodo-black! md:w-3/4 2xl:w-3/4 cursor-pointer"
                    >
                      I agree to DODO collecting my personal information in
                      order to receive updates and communications.
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Button
                    className="w-full max-w-[1000px] hover:border-2"
                    type="submit"
                    text={`${loading ? "SUBMITING..." : "SUBMIT"}`}
                  />
                  <p className="text-lg leading-[120%] tracking-[-1%] text-dodo-black">
                    Please review our{" "}
                    <Link href="/privacy-policy" className="underline">
                      privacy policy
                    </Link>
                  </p>
                </div>
                {message && (
                  <p
                    className={`py-2 px-4 rounded ${"bg-red-100 text-red-700"}`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>

            {/* IMAGE BELOW */}
            <div className="w-full h-full md:h-full xl:w-1/2 object-bottom rounded-md overflow-hidden flex items-center">
              <Image
                loading="eager"
                decoding="async"
                src="/Images/Pages/contactUs.png"
                alt="a picture of some team members"
                width={1050}
                height={50}
                className="object-cover  h-full object-bottom w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactClient;
