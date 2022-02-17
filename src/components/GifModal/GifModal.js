import Modal from 'react-modal';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './GifModal.css';

export const GifModal = ({
  isOpen,
  toggleModal,
  title,
  author,
  uploadDate,
  originalURL,
}) => {
  const sanitizeAuthor = (author) => {
    return author.length > 0 ? author : 'Anon';
  };

  const sanitizeDate = (uploadDate) => {
    return moment(uploadDate).format('Do MMMM YYYY');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="gif modal"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      closeTimeoutMS={500}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div>
        <button className="close-button" onClick={toggleModal}>
          {' '}
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h1>{title}</h1>
        <img src={originalURL} alt={title} />
        <h2>
          Posted by {sanitizeAuthor(author)} on {sanitizeDate(uploadDate)}
        </h2>
      </div>
    </Modal>
  );
};
