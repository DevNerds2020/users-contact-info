import { RouterProvider } from "react-router-dom";
import customRoutes from './CustomRoutes';

function App() {
  return (
    <div className="App" style={{background:"#faf8ff" ,display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '96vh',height:'100%', width:'100%', textAlign:'center'}}>
      <RouterProvider router={customRoutes} />
    </div>
  )
}

export default App
