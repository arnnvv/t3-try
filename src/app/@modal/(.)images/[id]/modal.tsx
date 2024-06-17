"use client";

import {
  type ElementRef,
  useEffect,
  useRef,
  type ReactNode,
  type ReactPortal,
} from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }): ReactPortal => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = () => {
    router.back();
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      className="h-screen w-screen bg-black/90 text-white"
      onClose={onDismiss}
    >
      {children}
      {/*<button onClick={onDismiss} className="close-button" />*/}
    </dialog>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
