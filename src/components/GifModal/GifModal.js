import Modal from 'react-modal';
import moment from 'moment';

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
    >
      <div>
        <h1>{title}</h1>
        <img src={originalURL} alt={title} />
        <h2>
          Posted by {sanitizeAuthor(author)} on {sanitizeDate(uploadDate)}
        </h2>
        <button onClick={toggleModal}>Close modal</button>
      </div>
    </Modal>
  );
};
