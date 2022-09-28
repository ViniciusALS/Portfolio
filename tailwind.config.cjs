/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                nearWhite: '#F2F2F2',
                nearBlack: '#333333',
                darkBlue: '#272935',
                darkerBlue: '#20222F',
                blueOne: '#2F80ED',
                blueTwo: '#2D9CDB',
                blueThree: '#56CCF2',
                highlightPink: '#E51F3F',
                highlightGreen: '#00D057'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif']
            }
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1400px',
            xl: '1700px'
        }
    },
    plugins: []
}
