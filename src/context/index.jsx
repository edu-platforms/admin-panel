import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        show: handleShow,
        close: handleCancel,
        visible,
        setVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
