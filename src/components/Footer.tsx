"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import AnimatedNavLink from "./AnimatedNavLinks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Footer() {
  const [email, setEmail] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [startedAt] = useState(() => Date.now());

  const pathName = usePathname();

  useEffect(() => {
    setSubmitted(() => false);
  }, [pathName]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisableSubmit(true);
    setSubmitting(true);
    const form = event.currentTarget;

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          website: (
            form.elements.namedItem("WEBSITE") as HTMLInputElement
          )?.value,
          startedAt,
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setEmail("");
        setMessage("");
        setSubmitted(true);
        setDisableSubmit(false);
        setSubmitting(false);
      } else {
        throw new Error(data.error || "Unable to subscribe right now.");
      }
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to subscribe right now."
      );
      setDisableSubmit(false);
      setSubmitting(false);
    }
  };

  return (
    <footer
      style={{
        backgroundImage: `url('/Images/footerPattern.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      className="w-full flex flex-col justify-center items-start lg:items-center gap-[100px] p-5 py:10 md:px-10 py-[120px] xl:px-[100px]"
    >
      <div className="w-full flex flex-col justify-center items-start md:items-center gap-5">
        <p className="text-2xl sm:text-5xl md:text-[64px] font-helvetica-medium text-dodo-black">
          Follow our journey
        </p>
        <p
          className={`text-[18px] sm:text-2xl lg:text-[28px] text-dodo-black w-[90%] sm:w-4/6 md:w-3/4 lg:w-2/4 xl:2/5 2xl:w-2/5 text-start md:text-center ${
            submitted ? "hidden" : "flex"
          }`}
        >
          See how we're using human-centered design to address Africa's pressing
          needs
        </p>

        <form
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          onSubmit={handleSubmit}
          className="mc-field-group validate form w-full flex flex-col items-start md:items-center gap-3"
        >
          <div style={{ display: "none" }} aria-hidden="true">
            <input
              type="text"
              name="WEBSITE"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </div>
          <div
            className={`mc-field-group form w-full md:w-4/6 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-2 ${
              submitted ? "hidden" : "flex"
            }`}
          >
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="    Enter email address"
              className="required placeholder:uppercase placeholder:text-sm placeholder:font-inter placeholder:font-medium leading-[24px] tracking-[0.5px] focus:cursor-text w-full sm:w-3/5 self-start md:self-center placeholder:text-black outline-dodo-black ring-dodo-black bg-white border border-dodo-black/10 py-4 duration-200 pl-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              text={`${submitting ? "Submitting..." : "Submit"}`}
              type="submit"
              disabled={disableSubmit}
              className="py-2 px-10 w-full sm:w-3/5 md:w-[280px] self-start md:self-center uppercase  "
            />
          </div>
          <p
            className={`text-[18px] sm:text-2xl lg:text-[28px] text-dodo-black w-[90%] sm:w-4/6 md:w-3/4 lg:w-2/4 xl:2/5 2xl:w-2/5 text-start md:text-center leading-[40px] tracking-[-3%] ${
              submitted ? "visible" : " hidden"
            }`}
          >
            Thanks for subscribing! <br />
            <span>
              You'll now receive updates on how we're designing for impact
              across Africa.
            </span>
          </p>

          <div hidden>
            <input type="hidden" name="tags" value="7232368" />
          </div>
          {message ? (
            <p className="text-base text-red-700">{message}</p>
          ) : null}
        </form>
      </div>
      <div className="footer-logo self-start">
        <Link href="/">
          <Image
            loading="eager"
            decoding="async"
            src="/Images/logo.svg"
            height={50}
            width={150}
            alt="logo"
          />
        </Link>
      </div>

      <div className="w-full flex flex-col gap-10">
        <section className="footer-links w-full flex flex-row gap-10 md:justify-between items-end md:items-center">
          <ul className="flex flex-col items-start text-left gap-4 text-[20px] sm:text-[28px] lg:text-[32px] text-dodo-black">
            <li>
              <AnimatedNavLink href="/work">Work</AnimatedNavLink>
            </li>
            <li>
              <AnimatedNavLink href="/about">About us</AnimatedNavLink>
            </li>
            <li>
              <AnimatedNavLink href="/services">Services</AnimatedNavLink>
            </li>
            <li>
              <AnimatedNavLink href="/contact">Contact</AnimatedNavLink>
            </li>
          </ul>

          <ul className="hidden md:flex flex-col items-start md:items-end justify-center gap-4 text-[20px] sm:text-[28px] lg:text-[32px] text-dodo-black">
            <li>
              <AnimatedNavLink
                target="_blank"
                href="https://www.linkedin.com/company/dodo-africa/"
              >
                LinkedIn
              </AnimatedNavLink>
            </li>
            <li>
              <Link href="mailto:hello@dododesign.africa">
                hello@dododesign.africa
              </Link>
            </li>
            <li>
              <p>+234 809 522 1113</p>
            </li>
          </ul>

          {/* <ul className="flex flex-col items-start md:items-end md:text-right gap-4 text-[20px] sm:text-[28px] lg:text-[32px] text-dodo-black">
            <li>
              <AnimatedNavLink href="">LinkedIn</AnimatedNavLink>
            </li>
            <li>
              <AnimatedNavLink href="">X</AnimatedNavLink>
            </li>
            <li>
              <AnimatedNavLink href="">Instagram</AnimatedNavLink>
            </li>
          </ul> */}
        </section>
        <ul className="flex md:hidden flex-col items-start md:items-center justify-center gap-2 text-[20px] sm:text-[28px] lg:text-[32px] text-dodo-black">
          <li>
            <AnimatedNavLink href="https://www.linkedin.com/company/dodo-africa/">
              LinkedIn
            </AnimatedNavLink>
          </li>{" "}
          <li>
            <Link href="mailto:hello@dododesign.africa">
              hello@dododesign.africa
            </Link>
          </li>
          <li>
            <p>+234 809 522 1113</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
