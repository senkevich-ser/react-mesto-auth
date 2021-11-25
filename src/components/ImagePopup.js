function ImagePopup({ card, onClose }) {
  return (
    <div className={`foto-open popup ${card.link ? "popup_opened" : ""}`}>
      <div className="foto-open__container">
        <img
          className="foto-open__image"
          src={`${card.link}`}
          alt={`${card.name}`}
        />
        <button
          aria-label="Закрыть фото"
          type="button"
          className=" popup__close-cross opacity"
          onClick={onClose}
        ></button>
        <h2 className="foto-open__name">{`${card.name}`}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
