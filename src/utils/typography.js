import Typography from 'typography';

const typography = new Typography({
  // baseFontSize: '16px',
  // baseLineHeight: 1.5,
  headerFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400'],
    },
  ],
  overrideStyles: () => ({
    html: {
      overflowY: 'auto',
    },
  }),
});

export default typography;
