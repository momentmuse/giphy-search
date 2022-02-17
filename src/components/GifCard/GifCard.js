import { useState } from 'react';
import { GifModal } from '../GifModal/GifModal';
import { StyledCard } from './GifCard.styled';

export const GifCard = ({ gifURL, title, author, uploadDate, originalURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <StyledCard>
        <img src={gifURL} alt={title} onClick={toggleModal} />
      </StyledCard>

      <GifModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        title={title}
        author={author}
        uploadDate={uploadDate}
        originalURL={originalURL}
      />
    </div>
  );
};
