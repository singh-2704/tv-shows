
import { Routes, Route } from "react-router-dom";
import ShowListPage from "./pages/ShowsListPage";
import ShowDetailPage from "./pages/ShowDetailPage";



export const App = ()=>{
  return(
    <Routes>
      <Route path="/" element={<ShowListPage/>}/>
      <Route path="/show/:showId"element={<ShowDetailPage/>}/>
    </Routes>
  );
}