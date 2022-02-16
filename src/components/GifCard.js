export const GifCard = ({ gifURL, title }) => {
  return (
    <article>
      <img src={gifURL} alt={title} />
    </article>
  );
};
