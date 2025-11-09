import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    theme: {
        extend: {
            colors: {
                navy: "#222222",     // Primary text and dark background (Trust)
                gold: "#DEC05F",     // Call-to-Action buttons (Luxury Accent)
                offwhite: "#F5F5DC", // Main background (Clean White)
            },
        },
    },

    keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        }
      },

    
      // 3. Define the custom animation utility class
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      },

    plugins: [forms],
};
