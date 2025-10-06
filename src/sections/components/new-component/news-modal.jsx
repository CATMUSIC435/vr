"use client";
import { motion, AnimatePresence } from "framer-motion";

export function NewsModal({ link, onClose }) {
  return (
    <AnimatePresence>
      {link && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="relative bg-white/40 w-full h-full shadow-2xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { type: "spring", stiffness: 120, damping: 15 },
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
              transition: { duration: 0.25, ease: "easeInOut" },
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-10 text-white hover:rotate-180 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <iframe
              src={link}
              className="w-full h-full border-none"
              title="Chi tiết bài viết"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
