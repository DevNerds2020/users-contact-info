import { createBrowserRouter } from "react-router-dom";
import ContactInfo from "./components/ContactInfo";

const customRoutes = createBrowserRouter([
    {
      path: "/users/:username",
      element: <ContactInfo />,
    },
]);

export default customRoutes;