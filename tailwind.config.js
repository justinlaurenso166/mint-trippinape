module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                marquee: 'marquee 25s linear infinite',
                marquee2: 'marquee2 25s linear infinite',
                marquee3: 'marquee3 25s linear infinite',
                marquee4: 'marquee4 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                marquee3: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                marquee4: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            fontFamily: {
                rubik: 'Rubik',
                'blue-goblet-regular': 'Blue Goblet Regular',
            },
            colors: {
                primary: '#64C9AE',
                'semi-dark': '#282833',
            },
            width:{
                'marquee-item-sm': '250px',
                'marquee-item': '300',
            }
        },
    },
    plugins: [],
}
