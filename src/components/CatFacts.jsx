import { useEffect, useState } from "react";

export default function CatFacts() {
  const [facts, setFacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = "https://catfact.ninja/facts?limit=5";

  // Hente data:

  //Bruk useEffect for å hente data når komponenten monteres.
  useEffect(() => {
    const fetchData = async () => {
      // try to fetch data
      try {
        const res = await fetch(url);
        // catch http fails
        if (!res.ok) throw new Error(" HTTP feil");
        const apiObj = await res.json();
        setFacts(apiObj.data);
        //catch general errors
      } catch (err) {
        console.error(err);
        setError(true);
        // always set loading == false
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error) return <h1>Error!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Catfacts</h1>
      {facts.map((factObj, i) => (
        <p key={i}>{factObj.fact}</p>
      ))}
    </>
  );
}
