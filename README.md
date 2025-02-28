# PR Ligatures

## Because code reviews deserve beautiful typography 🎨

![PR Ligatures Icon](icons/icon128.png)

Hey there! 👋

I created this extension because I got **really** tired of losing my precious coding ligatures whenever I had to review PRs. You know what I'm talking about - when `=>` becomes a proper arrow, `!=` transforms into that beautiful inequality symbol, and `>=` turns into a proper "greater than or equal to" sign... yeah, that stuff.

After years of using JetBrains Mono in my editor, going back to standard monospace fonts on PR review pages felt like downgrading from a car to a bull cart. Each code review was a sad reminder of what I was missing.

So I built this super simple Chrome extension that does one thing and does it well: **it brings ligatures back to code reviews**, for now on Github PRs.

## Features

- ✨ Adds ligature support to code blocks in pull request reviews
- 🔤 Uses JetBrains Mono (because it's awesome for code)
- 🚀 Works on PR diffs, code snippets, and file views
- 🧠 Doesn't mess with anything else on the page
- 🔄 Automatically applies to dynamically loaded content

## Installation

1. Clone this repo or download it
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right)
4. Click "Load unpacked" and select this folder
5. Enjoy your ligatures and feel smug about it

## Customization

Want to use a different font? You'll need to update two places:

1. Edit `styles.css` to change the font-family:
```css
font-family: "Your Favorite Font", monospace !important;
```

2. Edit `content.js` to load your preferred font from Google Fonts:
```javascript
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Your+Favorite+Font:wght@400;500&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);
```

Make sure your chosen font supports ligatures!

## Contributing

Found a bug? Have an idea for improvement? Want to add support for another code hosting platform? Contributions are welcome!

Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/gitlab-merge-requests`)
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes (`git commit -m 'Adds support for ligatures on GitLab merge requests'`)
6. Push to the branch (`git push origin feature/gitlab-merge-requests`)
7. Open a Pull Request

Some ideas for contributions:
- Support for other code hosting platforms (GitLab, Bitbucket, etc.)
- Options page to customize fonts and settings

Currently, the extension only supports GitHub, but the goal is to expand to other platforms.

## Why Ligatures Matter

Ligatures aren't just about aesthetics (though they do make your code look pretty sweet). They can actually improve readability by turning multi-character symbols into unified glyphs that better represent their meaning.

For example:
- `=>` becomes a proper arrow → 
- `!=` becomes a proper inequality sign ≠
- `<=` becomes a proper less-than-or-equal sign ≤

This helps your brain parse code faster and with less cognitive load.

## License

Feel free to use it, modify it, share it. Just enjoy those sweet, sweet ligatures.

---

Made with ❤️ and an unhealthy attachment to coding ligatures.