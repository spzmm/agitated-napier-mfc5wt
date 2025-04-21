import { useState } from "react";

// Иконки
function LeftArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
}

function RightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
}

// Компоненты
function NavLink({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="text-sm mx-2 hover:underline"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="bg-pink-500 text-black py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-xl font-bold mb-4">ELIZAVETA ARTWORK</h1>
        <p className="text-sm mb-4">
          Visuals · Experimental Video · Performance Art · Music Video
        </p>
        <nav className="flex justify-center flex-wrap">
          <NavLink>HOME</NavLink>
          <NavLink>2024</NavLink>
          <NavLink>BOOKINGS</NavLink>
          <NavLink>COLLABS</NavLink>
          <NavLink>LIVE PERFORMANCES</NavLink>
          <NavLink>UNPUBLISHED</NavLink>
          <NavLink>PROJECTS</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { src: "images/P1070291.JPG", alt: "Image 1" },
    { src: "images/P1070302.JPG", alt: "Image 3" },
    { src: "images/P1070501.JPG", alt: "Image 2" },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <LeftArrowIcon />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <RightArrowIcon />
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="bg-pink-500 py-4 text-center">
        <NavLink href="https://tinyurl.com/4hf8649m">Instagram</NavLink>
        <NavLink href="mailto:example@mail.com">Mail</NavLink>
      </div>
    </div>
  );
}
