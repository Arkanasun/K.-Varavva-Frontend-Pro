const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
console.log('Email:', email);
console.log('Password:', password);
console.log('Screen size:', screenWidth, 'x', screenHeight);

function goBack() {
    window.location.href = 'index.html';
}