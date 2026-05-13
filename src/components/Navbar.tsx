"use client";
import Image from "next/image";
import AnimatedNavLink from "./AnimatedNavLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathName = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const timerRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (openMenu == true) {
      setOpenMenu((prev) => !prev);
    }
  }, [pathName]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     // Clear any existing timeout
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current);
  //     }

  //     // Scrolling down - hide navbar
  //     if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
  //       gsap.to(navRef.current, {
  //         y: -100,
  //         duration: 0.3,
  //         ease: "power2.out",
  //         onComplete: () => setIsVisible(false),
  //       });
  //     }
  //     // Scrolling up - show navbar
  //     else if (currentScrollY < lastScrollY.current) {
  //       setIsVisible(true);
  //       gsap.to(navRef.current, {
  //         y: 0,
  //         duration: 0.3,
  //         ease: "power2.out",
  //       });
  //     }

  //     lastScrollY.current = currentScrollY;

  //     // Set timeout to handle when scrolling stops
  //     timerRef.current = setTimeout(() => {
  //       if (currentScrollY <= 10) {
  //         setIsVisible(true);
  //         gsap.to(navRef.current, {
  //           y: 0,
  //           duration: 0.3,
  //           ease: "power2.out",
  //         });
  //       }
  //     }, 500);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current);
  //     }
  //   };
  // }, []);

  return (
    <nav
      ref={navRef}
      className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:justify-between sticky top-0 z-[1000] bg-white px-5 py-4 md:px-10 lg:px-[100px] transition-transform duration-300"
      style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="w-full flex justify-between xl:w-1/5">
        <Link href="/">
          <Image
            loading="eager"
            decoding="async"
            src={"/Images/logo.svg"}
            alt="logo"
            width={100}
            height={50}
          />
        </Link>
        <div className="flex lg:hidden">
          <RxHamburgerMenu
            onClick={() => setOpenMenu((prev) => !prev)}
            className={` ${
              openMenu ? "hidden" : "flex"
            } text-3xl text-dodo-black self-start transform-3d ease-in-out duration-300 cursor-pointer`}
          />

          <IoCloseOutline
            onClick={() => setOpenMenu((prev) => !prev)}
            className={` ${
              openMenu ? "flex" : "hidden"
            } text-3xl text-dodo-black self-start transform-3d ease-in-out duration-300 cursor-pointer`}
          />
        </div>
      </div>

      <nav
        className={`${
          openMenu ? "flex lg:hidden" : "hidden"
        } flex-col bg-white h-[80dvh] items-start w-full gap-6 uppercase py-3 font-medium text-black`}
      >
        <AnimatedNavLink href="/about">About</AnimatedNavLink>
        <AnimatedNavLink href="/services">Services</AnimatedNavLink>
        <AnimatedNavLink href="/work">Work</AnimatedNavLink>
        <AnimatedNavLink href="/chronicles">Chronicles</AnimatedNavLink>
        <AnimatedNavLink href="/contact">Contact</AnimatedNavLink>
      </nav>
      <nav className="hidden lg:flex items-center gap-10 uppercase py-3 font-medium text-black">
        <AnimatedNavLink href="/about">About</AnimatedNavLink>
        <AnimatedNavLink href="/services">Services</AnimatedNavLink>
        <AnimatedNavLink href="/work">Work</AnimatedNavLink>
        <AnimatedNavLink href="/chronicles">Chronicles</AnimatedNavLink>
        <AnimatedNavLink href="/contact">Contact</AnimatedNavLink>
      </nav>
    </nav>
  );
}

export default Navbar;
