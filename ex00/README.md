# Exercise 00 — Personal Portfolio

## Files
- `index.html`
- `style.css`
- `script.js`
- `assets/`

## Requirements covered
- Semantic HTML5 structure with Header/Navbar, About Me, Skills, Projects 00–03, Hobbies, Contact Form, and Footer.
- Responsive layout using Flexbox and CSS media queries.
- No Bootstrap, Tailwind, WordPress, framework, template, or UI library.
- Interactive theme switcher implemented with JavaScript.
- Contact form handles submit with JavaScript without reloading the page.

## Event lifecycle — theme switcher
1. **User action:** The user clicks the `Theme` button.
2. **Event firing:** The browser fires a `click` event on the button.
3. **JavaScript callback:** The callback registered by `addEventListener('click', ...)` runs.
4. **DOM/CSS mutation:** JavaScript toggles the `light-theme` class on `<body>` using `classList.toggle()`.
5. **Visual result:** CSS variables change because the `.light-theme` selector defines new values, so the page changes theme immediately without reloading.

### In code
```js
themeButton.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    updateThemeButton();
});
```

## Personalization
Replace `assets/profile-placeholder.svg` with your real profile photo and update the `<img>` source in `index.html`.
Also replace the `#` project links with your real GitHub/project URLs before submission.
