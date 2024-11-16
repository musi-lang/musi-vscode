# 👄 Musi Language Support for Visual Studio Code

This extension provides basic language support for Musi programming language
in Visual Studio Code.

## ✨ Features

- 🖍️ Syntax highlighting for Musi files (`.musi`)
- ⚙️ Basic language configuration

## 🛠️ Building

You'll need [Bun](https://bun.sh) and [Node.js](https://www.npmjs.com/)
installed on your system.

1. Open terminal in project directory.
2. Run these commands:

```sh
bun install npm
bun add -D @vscode/vsce
deno task build
deno task package
```

This creates `.vsix` file in your project directory.

## 📥 Installation

1. In VSCode, go to Extensions:
   - 🪟 Windows: `Ctrl`+`⇧`+`X`
   - 🍎 macOS: `⌘`+`⇧`+`X`
   - 🐧 Linux: `Ctrl`+`⇧`+`X`
2. Click "_..._" at top of EXPLORER and choose "_Install from VSIX..._".
3. Select `.vsix` file you created.

> [!TIP]
> If you're building extension directly, simply right-click on `.vsix` file and select "_Install Extension VSIX_".

## 📝 Example

```musi
# TODO
```

## Known Issues

```musi
# `E` in `Right(E)` is not highlighted
type Either[T, E] = Left(T) | Right(E)
```

## 📜 Licence

This project is licenced under **GNU Affero General Public License v3.0**
(AGPL-3.0). See [LICENSE](LICENSE) file for more details.
