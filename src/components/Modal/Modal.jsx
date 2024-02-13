import { createPortal } from "react-dom"
import styles from "./Modal.module.css"
import { useCallback, useEffect } from "react"
import CloseIcon from "@/assets/icons/icons.svg?react"

export const Modal = ({ children, isOpened, onClose, zIndex = 0 }) => {
  const handleKeyPress = useCallback(
    event => {
      if (
        event.key === "Escape" ||
        event.key === "Esc" ||
        event.keyCode === 27 ||
        event.keyCode === 9
      ) {
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleKeyPress])

  if (!isOpened) return null

  return createPortal(
    <>
      <div
        className={styles.modalWindow}
        onClick={() => onClose()}
        style={{ zIndex: 1000 + zIndex }}
      />
      <div
        className={styles.modalWindowContent}
        style={{ zIndex: 1000 + zIndex }}
      >
        <button className={styles.closeModalButton} onClick={() => onClose()}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </>,
    document.getElementById(`modal-window`),
  )
}
