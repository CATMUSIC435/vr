import React, { createContext, useContext, useState, ReactNode } from "react";

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [index, setIndex] = useState(0);

  const openModal = (newContent, idx) => {
    setContent(newContent);
    setIsOpen(true);
    setIndex(idx);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
    setIndex(0);
  };

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal, index }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
};
