import React from 'react';

export default function Header() {
    return (
        <header className='App-header'>
            <main>Chintan</main>
            <menubar className='menubar'>
                <a href='#section-Home'>Home</a>
                <a href='#section-About'>About</a>
                <a href='#section-Skills'>Skills</a>
                <a href='#section-Servies'>Servies</a>
                <a href='#section-Portfolio'>Portfolio</a>
                <a>😈</a>
            </menubar>
        </header>
    );
}

// const body = document.querySelector('body')
// const initialTheme = 'light'
// const setTheme = (theme) => {
//     localStorage.setItem('theme', theme)
//     body.setAttribute('data-theme', theme)
// }

// const ToggleTheme = () => {
//     alert("working")
//     const activeTheme = localStorage.getItem('theme');
//     if (activeTheme === 'light') {
//         setTheme('dark');
//         document.getElementById('toggle').innerHTML = `😈`;
//     } else {
//         setTheme('light');
//         document.getElementById('toggle').innerHTML = `😛`;
//     }
// }

// const setThemeOnInit = () => {
//     const savadTheme = localStorage.getItem('theme');
//     document.getElementById('toggle').innerHTML = `😛`;
//     savadTheme
//         ?
//         body.setAttribute('data-theme', savadTheme) :
//         setTheme(initialTheme);
// }
// setThemeOnInit();