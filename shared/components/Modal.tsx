"use client";

// React imports
import {
  cloneElement,
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
  useEffect,
  useRef,
} from "react";

// Type import
import { ModalID } from "@/shared/types/modal";

interface IContextModalProps {
  openId: ModalID;
  open: (id: ModalID) => void;
  close: () => void;
}

const ContextModal = createContext<IContextModalProps | undefined>(undefined);

interface IProviderModalProps {
  children: ReactNode;
}

export default function Modal({ children }: IProviderModalProps) {
  const [openId, setOpenId] = useState<ModalID>("none");

  function open(id: ModalID) {
    setOpenId(id);
  }

  function close() {
    setOpenId("none");
  }

  return (
    <ContextModal.Provider value={{ openId, open, close }}>
      {children}
    </ContextModal.Provider>
  );
}

type ModalIDWithoutNone = Exclude<ModalID, "none">;

interface IWindowProps {
  children: ReactElement<{ onClose: () => void }>;
  id: ModalIDWithoutNone;
}

function Window({ children, id }: IWindowProps) {
  const context = useContext(ContextModal);
  const refWindow = useRef<HTMLDivElement>(null);
  const [scaleClass, setScaleClass] = useState("scale-100");

  if (!context) {
    throw new Error("Modal.Window must be used within a <Modal> component");
  }

  const { close, openId } = context;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (refWindow.current && !refWindow.current.contains(e.target as Node)) {
        setScaleClass("scale-[1.05]");
        setTimeout(() => {
          setScaleClass("scale-100");
          setTimeout(() => {
            setScaleClass("scale-[1.05]");
            setTimeout(() => {
              setScaleClass("scale-100");
            }, 150);
          }, 150);
        }, 150);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (openId !== id) return null;

  return (
    <div className="fixed inset-0 bg-text-primary/60">
      <div
        ref={refWindow}
        className={`transform transition-transform duration-150 ease-in-out absolute bg-white-primary rounded-2xl p-5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-auto ${scaleClass}`}
      >
        {cloneElement(children, { onClose: close })}
      </div>
    </div>
  );
}

interface IOpenProps {
  children: ReactElement<{ onClick: () => void }>;
  id: ModalIDWithoutNone;
}

function Open({ children, id }: IOpenProps) {
  const context = useContext(ContextModal);

  if (!context) {
    throw new Error("Modal.Open must be used within a <Modal> component");
  }

  const { open } = context;

  return cloneElement(children, {
    onClick: () => {
      open(id);
    },
  });
}

Modal.Window = Window;
Modal.Open = Open;
