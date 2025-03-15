import { FC } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import MembersPage from "./pages/MembersPage";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="onas" element={<AboutUsPage />} />
        <Route path="clenove" element={<MembersPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="kontakt" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
