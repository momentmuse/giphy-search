const color = {
  dark: '#282c34',
  light: '#fafafa',
};

const screenWidth = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  highres: '2200px',
};

const device = {
  mobile: `(min-width: ${screenWidth.mobile})`,
  tablet: `(min-width: ${screenWidth.tablet})`,
  laptop: `(min-width: ${screenWidth.laptop})`,
  highres: `(min-width: ${screenWidth.highres})`,
};

const theme = { color, screenWidth, device };
export default theme;
