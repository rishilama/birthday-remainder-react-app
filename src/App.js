import React from "react";
import data from "./components/Data";
import List from "./components/List";

function App() {
  const [people, setPeople] = React.useState(data)
  

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
