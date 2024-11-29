import React from 'react';

export const ToastContext = React.createContext();
function ToastProvider({children}) {

  const [toastList, setToastList] = React.useState([]);

  const dismissToast = (id) => {
    setToastList(toastList.filter((toast) => toast.id !== id));
  };

  const addToast = (message, type) => {
    setToastList([...toastList, { message, type, id: crypto.randomUUID() }]);
  };

  useKeyDown('Escape', () => {
    setToastList([]);
  });

  return (
    <ToastContext.Provider value={{ addToast, dismissToast, toastList }}>
      {children}
    </ToastContext.Provider>
  );
}

function useKeyDown(key, callback) {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === key) {
        callback();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [key, callback])
}

export default ToastProvider;
