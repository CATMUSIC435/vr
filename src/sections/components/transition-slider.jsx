import React from "react"
import { motion } from "framer-motion"

export function TransitionSlider({
  value,
  onChange,
  iconStart,
  iconEnd,
  width = "20rem",
  color = "bg-white/80",
}) {
  return (
    <div
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg text-white"
      style={{ width }}
    >
      <label className="w-full relative block text-sm font-medium mb-2">
        <div
          className="absolute -top-8 flex items-center justify-center w-10 h-10"
          style={{
            left: `${value * 100}%`,
            transform: "translateX(-50%)",
          }}
        >
          <motion.div
            className="absolute w-8 h-8 flex items-center justify-center"
            animate={{
              opacity: 1 - value,
              scale: 1 - value * 0.2,
              rotate: -value * 45,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {iconStart}
          </motion.div>

          <motion.div
            className="absolute w-8 h-8 flex items-center justify-center"
            animate={{
              opacity: value,
              scale: 0.8 + value * 0.2,
              rotate: (1 - value) * 45,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {iconEnd}
          </motion.div>
        </div>
      </label>

<input
        type="range"
        min="0"
        max="1"
        step="0.001"
        value={value}
        onChange={onChange}
        className={`slider w-full h-2 rounded-full cursor-pointer appearance-none bg-gradient-to-r from-yellow-400 to-orange-500`}
      />
    </div>
  )
}
