function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  buttonTitle,
  children,
  onSubmit,
}) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-cross opacity"
          aria-label="Закрыть попап"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          onSubmit={onSubmit}
          className="popup__inputs"
          name={`${name}_form`}
        >
          {children}
          <button
            className="popup__submit-btn"
            type="submit"
            aria-label="Кнопка Сохранить"
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
