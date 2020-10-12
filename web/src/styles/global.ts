import { createGlobalStyle } from 'styled-components';

import "leaflet/dist/leaflet.css";

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;

    --color-button-text: #312E38;
    --color-input: #232129;
    --color-input-text: #F4EDE8;
    --color-input-placeholder: #666360;

    --color-error: #C53030;

    --box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    --color-toast-default: #EBF8FF;
    --color-toast-default-text: #3172B7;
    --color-toast-success: #E6FFFA;
    --color-toast-success-text: #2E656A;
    --color-toast-error: #FDDEDE;
    --color-toast-error-text: #C53030;

    --color-white-600: #C3BDB9;
    --color-white-700: #F4EDE8;
    --color-white-900: #FFFFFF;

    --color-orange-400: #CC7300;
    --color-orange-500: #FF9000;
    --color-gray-300: #312E38;

    --color-yellow-300: #FFD666;

    --color-blue-200: #88c7c7;
    --color-blue-400: #29b6d1;
    --color-blue-500: #15C3D6;
    --color-blue-550: #17D6Eb;
    --color-blue-600: #96FEFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background);
    color: var(--color-white-900);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    border: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;
