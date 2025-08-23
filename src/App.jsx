import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Menupage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import AboutUs from "./pages/AboutUs";
import Recipe from "./pages/Recipe";
import RecipeDetails from "./pages/RecipeDetails";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
