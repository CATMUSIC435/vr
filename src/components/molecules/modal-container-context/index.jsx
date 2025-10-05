import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../../../contexts/modal-context";

export function ModalContainer({ chidren }) {
  const { isOpen, closeModal, content } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative shadow-lg w-[80vw] h-[80vh] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-2 right-2 z-10 text-white transform hover:rotate-180 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
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

            <div className="w-full h-full">{content}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
