import { Fragment } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Actors from "./components/actors";
import ScrollToTop from "./components/scrollTop";
import Sensors from "./components/sensors";
import SideNav from "./components/sideNav";

function App() {
  return (
    <Fragment>
    <ScrollToTop />
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideNav />}>
            <Route index element={<Sensors />} />
            <Route path="/sensors" element={<Sensors />} />
            <Route path="/actors" element={<Actors />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
    </Fragment>
  );
}

export default App;
