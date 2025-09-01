import React, { useState, useRef, useEffect } from "react";
import BgVideo from "../../assets/Jersey/footbalteam.mp4";

const jerseyCategories = [
  "Cricket Jersey",
  "Football Jersey",
  "Hockey Jersey",
  "Basketball Jersey",
  "Tennis Jersey",
  "Badminton Jersey",
  "Baseball Jersey",
  "Rugby Jersey",
  "Volleyball Jersey",
  "Athletics Jersey",
  "Swimming Jersey",
  "Cycling Jersey",
  "Kabaddi Jersey",
  "Table Tennis Jersey",
  "Wrestling Jersey",
  "Boxing Jersey",
];

export default function JerseyPage() {
  const [activeTab, setActiveTab] = useState(jerseyCategories[0]);
  const sectionRefs = useRef([]);

  const handleScrollTo = (index) => {
    sectionRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        const rect = ref.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveTab(jerseyCategories[index]);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">
      {/* ✅ Sticky Subheader */}
      <div className="fixed top-28 z-20 bg-black/70 backdrop-blur-sm shadow-md w-full">
        <div className="flex overflow-x-auto scrollbar-hide justify-center gap-6 px-4 py-3 text-sm font-semibold">
          {jerseyCategories.map((jersey, index) => (
            <button
              key={jersey}
              onClick={() => handleScrollTo(index)}
              className={`pb-2 transition relative whitespace-nowrap ${
                activeTab === jersey ? "text-blue-400" : "text-white"
              }`}
            >
              {jersey}
              {activeTab === jersey && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Jersey Sections */}
      <div className="relative z-10 mt-28 px-6 md:px-20">
        {jerseyCategories.map((jersey, index) => (
          <section
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="relative min-h-screen flex flex-col items-center justify-center border-b border-white/20 overflow-hidden"
          >
            {jersey === "Football Jersey" && (
              <>
                <video
                  className="absolute inset-0 w-full h-full object-cover -z-10"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={BgVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 -z-10"></div>
              </>
            )}

            <h2 className="text-4xl font-bold mb-6">{jersey}</h2>
            <p className="max-w-2xl text-center text-lg text-white/90">
              Explore our premium {jersey} collection crafted with high-quality
              fabrics and stylish designs. Perfect for sports and lifestyle.
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
