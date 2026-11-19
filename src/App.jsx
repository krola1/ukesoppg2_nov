// Import the components we made ourselves, from the "components" folder.
// A component is a reusable piece of the page, like a LEGO brick.
import CatFacts from "./components/CatFacts";
import CookieClicker from "./components/CookieClicker";
import Users from "./components/Users";

// App is the main (top) component. main.jsx shows it on the page.
// A component is just a JavaScript function that returns JSX
// (JSX = HTML-like code written inside JavaScript).
export default function App() {
  return (
    // <> ... </> is called a "Fragment".
    // A component can only return ONE parent element, so we wrap
    // everything in a Fragment. It does not add any extra HTML to the page.
    <>
      {/* To try a different exercise, remove the comment around it.
          Note: comments inside JSX must be wrapped in curly braces,
          with slash-star at the start and star-slash at the end. */}
      {/* <CookieClicker /> */}
      {/* <CatFacts /> */}

      {/* Use a component like an HTML tag: <ComponentName /> */}
      <Users />
    </>
  );
}
