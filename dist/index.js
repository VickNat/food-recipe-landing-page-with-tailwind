const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
  } else {
    menu.classList.add('hidden')
  }
})

// const darkMode = document.getElementById('dark-mode');
  
// darkMode.addEventListener('click', () => {
//   const isDarkMode = localStorage.theme === 'dark';
//   console.log("check");
//   console.log(isDarkMode);
//   if (isDarkMode) {
//     localStorage.theme = 'light';
//     document.documentElement.classList.remove('dark');
//   } else {
//     localStorage.theme = 'dark';
//     document.documentElement.classList.add('dark');
//   }
// });
