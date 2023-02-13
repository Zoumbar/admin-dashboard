import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from "./scenes/global/topBar"
import SideBar from "./scenes/global/sideBar"
import {Routes, Route} from "react-router-dom"
import Dashboard from "./scenes/dashboard"
import Team from "./scenes/team/index.jsx"
import Invoices from "./scenes/invoices/index.jsx"
import Contacts from "./scenes/contacts"
// import Bar from "./scenes/bar"
import Form from "./scenes/form"
// import Line from "./scenes/line"
// import Pie from "./scenes/pie"
// import FAQ from "./scenes/faq"
// import Geography from "./scenes/geography"
// import Calendar from "./scenes/calendar"

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
