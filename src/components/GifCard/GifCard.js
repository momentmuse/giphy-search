import { StyledCard } from './GifCard.styled';

export const GifCard = ({ gifURL, title }) => {
  return (
    <StyledCard>
      <img src={gifURL} alt={title} />
    </StyledCard>
  );
};
