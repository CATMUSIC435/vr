import { useState } from "react";
import { FloorPlan } from "./floor-plan";
import { motion, AnimatePresence } from "framer-motion";
import { FloorUtility } from "./floor-utility";
import { useIsMobile } from "./hooks/use-is-mobile";
import { zonePositions, zones } from "./constant";


export function Plans() {
  return (
    <div className="w-full h-full">
      <ImageMapHighlight />
    </div>
  );
}

export function ImageMapHighlight() {
  const isMobile = useIsMobile(768);
  const [activeZone, setActiveZone] = useState(null);
  const [hoverZone, setHoverZone] = useState(null);
  const [zone, setZone] = useState(null);


  const getPolygonCenter = (coords) => {
    const points = coords.trim().split(" ").map((pair) => {
      const [x, y] = pair.split(",").map(Number);
      return { x, y };
    });

    if (points.length < 2) return points[0] || null;

    const p1 = points[0];
    const p2 = points[1];

    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };
  };



  return (
    <>

      <div className="mt-[20%] md:mt-0 relative w-[220%] -left-[45%] md:left-0 md:w-full text-black">
        <img
          src="/atsaigonriverside-lologo.png"
          alt="AT Saigon Riverside"
          className="w-full h-auto"
        />

        {zonePositions.map((zone) => (
          <div
            key={zone.id}
            className={`absolute cursor-pointer text-[#1A341B]/80 hover:text-[#1A341B] tex-xs md:text-sm px-2 md:px-4 py-1 border-t-[1px] border-b-[1px] hover:scale-110 transition-all duration-200 font-medium border-dashed
            ${hoverZone === zone.id
                ? "border-indigo-300/60"
                : "border-[#d4ae6f]"
              }`}
            style={{ top: `${zone.top}%`, left: `${zone.left}%` }}
            onMouseEnter={() => {
              setHoverZone(zone.id);
            }}
            onMouseLeave={() => {
              setHoverZone(null);
            }}
            onClick={() => {
              setActiveZone(zone.id);
              setZone(zone);
            }}
          >
            {zone.name}
          </div>
        ))}


        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 2000 1125"
          preserveAspectRatio="none"
        >
          {zones.map((zone) => {
            const center = getPolygonCenter(zone.coords);

            const label = isMobile ? 0 : zonePositions.find((z) => z.id === zone.id);
            const labelX = (label.left / 100) * 2000;
            const labelY = (label.top / 100) * 1125;


            return (
              <g key={zone.id}>
                <polygon
                  points={zone.coords}
                  fill={
                    hoverZone === zone.id
                      ? "transparent"
                      : "rgba(212, 174, 111, 0.6)"
                  }
                  stroke={hoverZone === zone.id ? "#a3b3ff" : "#d4ae6f"}
                  strokeWidth="2"
                  className="pointer-events-auto cursor-pointer transition-all"
                  onMouseEnter={() => setHoverZone(zone.id)}
                  onMouseLeave={() => setHoverZone(null)}
                />

                {isMobile ? <></> : <line
                  x1={center.x}
                  y1={center.y}
                  x2={labelX}
                  y2={labelY}
                  stroke={hoverZone === zone.id ? "#a3b3ff" : "#d4ae6f"}
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />}
              </g>
            );
          })}
        </svg>


        <AnimatePresence>
          {activeZone && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl relative max-w-full max-h-full md:max-h-full w-full h-full p-6"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <button
                  onClick={() => setActiveZone(null)}
                  className="cursor-pointer absolute top-2 right-2 z-10 text-black transform hover:rotate-180 transition-all duration-300 duration-initial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="36" height="36" viewBox="0 0 24 24"
                    fill="none" stroke="#fff"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>

                </button>

                {zone?.area === 1 ? <FloorPlan plan={zone.plan} isBLevel={zone.isBLevel} /> : <FloorUtility plan={zone.plan} level={zone.level} />}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

