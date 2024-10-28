import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      hamburgerBtn.classList.toggle("toggle-btn");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);

    // Clean up event listeners when the component is unmounted
    return () => {
      hamburgerBtn.removeEventListener("click", toggleMenu);
      mobileMenu.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header
      className="bg-emerald-500 py-10 w-full mx-auto sticky text-white top-0 z-10"
    >
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <a href="#hero">
          <h1 className="text-white text-4xl font-medium font-mono">
            React Test
          </h1>
        </a>
        <div>
          <button
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
          >
            <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#welcome" className="hover:opacity-90">
              Start
            </a>
            <a href="#counter" className="hover:opacity-90">
              Counter
            </a>
            <a href="#calculator" className="hover:opacity-90">
              Calculator
            </a>
            <a href="#add-a-box" className="hover:opacity-90">
              Add a Box
            </a>
            <a href="#footer" className="hover:opacity-90">
              Legal
            </a>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className="absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden"
      >
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <a
            href="#welcome"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Start
          </a>
          <a
            href="#counter"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Counter
          </a>
          <a
            href="#calculator"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Calculator
          </a>
          <a
            href="#add-a-box"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Add a Box
          </a>
          <a
            href="#footer"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <header
//       id="hero"
//       className="bg-emerald-500 py-10 w-full mx-auto sticky text-white top-0 z-10"
//     >
//       <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
//         <a href="#hero">
//           {" "}
//           <h1 className="text-white text-4xl font-medium font-mono">
//             React Test
//           </h1>
//         </a>
//         <div>
//           <button
//             id="hamburger-button"
//             className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
//           >
//             <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
//           </button>
//           <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
//             <a href="#welcome" className="hover:opacity-90">
//               Start
//             </a>
//             <a href="#counter" className="hover:opacity-90">
//               Counter
//             </a>
//             <a href="#calculator" className="hover:opacity-90">
//               Calculator
//             </a>
//             <a href="#add-a-box" className="hover:opacity-90">
//               Add a Box
//             </a>
//             <a href="#footer" className="hover:opacity-90">
//               Legal
//             </a>
//           </nav>
//         </div>
//       </section>
//       <section id="mobile-menu" className="absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden">
//         <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
//         <a href="#welcome" className="w-full text-center py-6 hover:opacity-90">
//               Start
//             </a>
//             <a href="#counter" className="w-full text-center py-6 hover:opacity-90">
//               Counter
//             </a>
//             <a href="#calculator" className="w-full text-center py-6 hover:opacity-90">
//               Calculator
//             </a>
//             <a href="#add-a-box" className="w-full text-center py-6 hover:opacity-90">
//               Add a Box
//             </a>
//             <a href="#footer" className="w-full text-center py-6 hover:opacity-90">
//               Legal
//             </a>
//         </nav>
//       </section>
//     </header>
//   );
// };

// export default Header;
