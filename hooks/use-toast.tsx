"use client";

import * as React from "react";

type Toast = {
  title?: string;
  description?: string;
};

const ToastContext = React.createContext<{
  toast: (toast: Toast) => void;
}>({
  toast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = React.useState<Toast | null>(null);

  const showToast = (data: Toast) => {
    setToast(data);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-background border border-border rounded-lg p-4 shadow-lg max-w-sm">
          <p className="font-semibold">{toast.title}</p>
          <p className="text-sm text-muted-foreground">
            {toast.description}
          </p>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return React.useContext(ToastContext);
}
