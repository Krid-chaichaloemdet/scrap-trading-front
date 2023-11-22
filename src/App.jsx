
import Route from "./router/Route";
import { useAuth } from "./hooks/use-auth";
import Loading from "./component/Loading";
import { useEffect } from "react";

function App() {


  const { loading } = useAuth()

// useEffect(()=> {
//   if
// })

//   if(loading) {
//     return <Loading />
//   }
  return (
    <div>

      <Route />
      
    </div>
  
  );
}

export default App;
