import Layout from "./layout/layout";
import Window from "./components/window/window";
import { useState } from "react";
function App() {
  const [level, setLevel] = useState(1)

  return (

    <div className="App">
      <Layout level={level}>
        <Window setLevel={setLevel}/>
      </Layout>
    </div>
  );
}

export default App;
