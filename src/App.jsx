import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { Home, Contact, Projects, About, Portfolio } from "./pages";
import Thought from "./components/Thought";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <Thought>
        <ToastContainer
          position="top-right"
          newestOnTop={true}
          autoClose={700}
          hideProgressBar={true}
        />
        <RouterProvider router={router} />
      </Thought>
    </>
  );
}

export default App;
