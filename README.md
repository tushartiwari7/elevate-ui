# Elevate-ui

Elevate-UI is a utility-first styling framework with classes like `flex`, `grid`, `mx-md` etc. It helps you to build the front-end of your web App in no time.

Furthermore, it also includes plenty of Components build on top of utility classes. That means just grab the code, put it under your codebase, make personalized adjustments using utility Classes and you're good to go. 🚀🚀🚀

## Sneak-peek

![component library (1)](https://user-images.githubusercontent.com/66322728/154056519-a543de99-57cf-4b43-baa2-7295313bca62.gif)

## Components

- Avatar
- Alert
- Badge
- Button
- Cards
- Image
- Input
- Forms
- Lists
- Navigation
- Modal
- Rating
- Slider
- Toast
- Text Utilities
- Grid Utility

## How to Use?

Go to Installation Section of [Elevate UI](https://elevate-ui.vercel.app). <br/>
And just follow the instructions to feel elevate-ui in your application.

## File Structure

Below are the directions for walking through the code maze -

- ### `index.html`

  It Provides the basic layout of our application including `Header`, `Sidebar`, `Navbar` and `Documentation` area.

- ### `styles.css`
  It collects all `CSS` to be used in Elevate-UI and helps in linking just one single file in `index.html`
- ### `/components`
  Components is the folder containing the component pages which includes component documentation, code example and list of variants in nav.html, along with their dedicated css file.
- ### `/helpers` and `/layout`
  It includes all the extra `CSS` such as `reset.css`and `sidebar.css` which is needed to build elevate-ui but is not relevant to the user importing elevate-ui.
- ### `/script`
  It contains script to embed the components documentation file inside `<main></main>` of `index.html` and navigation file inside `<nav></nav>`. when the click event is triggeredon sidebar item.
- ### `/assets`
  includes images to demonstrate the components in documentation.
