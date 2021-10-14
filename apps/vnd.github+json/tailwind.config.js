const cdkPrefix = ['cdk', '-'].join('');
module.exports = {
  // mode: 'jit',
  prefix: cdkPrefix,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,ts,tsx,vue}', './public/**/*.html'],
  },
  darkMode: 'class',
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },

    extend: {
      colors: {
        dark: 'var(--cdk-palette-dark)',
        white: 'var(--cdk-palette-white)',
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },

  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['responsive', 'hover'],
    },
  },
  plugins: [
    require('@tailwindcss/jit'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-children'),
  ],
};
