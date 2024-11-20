const Modal = () => {
 

  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  // Modal JSX
    return (
    <div className="modal-backdrop" style={{ display: isVisible ? 'inline-block' : 'none' }} ref={modalRef}>
      <div className="modal-content">
        {/* Modal Body Here */}
      </div>
    </div>
  );
};
const closeModal = () => {
  setIsVisible(false);
};
