import Layout from "./layout/layout";
import Window from "./components/window/window";
import { useState } from "react";
import {createTheme, ThemeProvider, Container} from '@mui/material'
function App() {
  const [level, setLevel] = useState(1)
  const theme = createTheme(
    {
      typography: {
        fontFamily: ['Silkscreen', 'cursive'].join(','),
      }
    }
  )
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={'lg'}>
    <div className="App">
      <Layout level={level}>
        <Window setLevel={setLevel}/>
      </Layout>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
