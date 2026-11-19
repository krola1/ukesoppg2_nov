// useState  -> remembers values (state) inside the component
// useEffect -> runs code AFTER the component has been shown on the screen.
//              Perfect for things like fetching data from the internet.
import { useEffect, useState } from "react";

// Fetches 5 cat facts from an API (a web service that sends us data)
// and shows them on the page.
export default function CatFacts() {
  // We need three pieces of state:
  // facts   -> the data from the API. Starts as null because we have no data yet.
  // loading -> true while we are waiting for the data
  // error   -> becomes true if something goes wrong
  const [facts, setFacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // The address (URL) we get the data from.
  // "?limit=5" asks the API for only 5 facts.
  const url = "https://catfact.ninja/facts?limit=5";

  // Hente data:

  //Bruk useEffect for å hente data når komponenten monteres.
  // useEffect takes two things:
  //   1. A function with the code we want to run
  //   2. A "dependency array" -> [ ]
  // An EMPTY array [] means: run this only ONE time, when the component
  // first appears on the page. Without it, the code could run on every
  // render and cause an endless loop.
  useEffect(() => {
    // "async" lets us use "await" inside the function.
    // "await" means: wait here until this finishes, then continue.
    // (We make a separate function because useEffect itself
    //  can not be async.)
    const fetchData = async () => {
      // try to fetch data
      // try / catch / finally:
      //   try     -> try to run this code
      //   catch   -> if anything inside "try" fails, jump here
      //   finally -> ALWAYS run this at the end, success or not
      try {
        // fetch sends a request to the URL and waits for the answer (response).
        const res = await fetch(url);
        // catch http fails
        // res.ok is false if the server answered with an error (like 404 or 500).
        // "throw" creates an error, which makes the code jump to "catch".
        if (!res.ok) throw new Error(" HTTP feil");
        // The response comes as text. .json() turns it into a JavaScript object.
        const apiObj = await res.json();
        // The list of facts is inside the "data" property of the object.
        // Saving it in state makes React show it on the screen.
        setFacts(apiObj.data);
        //catch general errors
      } catch (err) {
        // Print the error in the browser console (F12) so we can debug it.
        console.error(err);
        setError(true);
        // always set loading == false
      } finally {
        // Whether it worked or not, we are not loading anymore.
        setLoading(false);
      }
    };
    // Remember to actually CALL the function we just made!
    fetchData();
  }, []);

  // "Early returns": show a different message depending on the state.
  // The code below each line will not run if we return here.
  if (error) return <h1>Error!</h1>;
  if (loading) return <h1>Loading...</h1>;

  // If we get here, there is no error and loading is done -> show the facts.
  return (
    <>
      <h1>Catfacts</h1>
      {/* .map() goes through every item in the array and turns
          each one into JSX (here: a <p> tag).
          factObj -> the current item, for example { fact: "...", length: 42 }
          i       -> the index (position) of the item: 0, 1, 2 ...
          React needs a unique "key" on each item in a list so it can
          keep track of them. */}
      {facts.map((factObj, i) => (
        <p key={i}>{factObj.fact}</p>
      ))}
    </>
  );
}
