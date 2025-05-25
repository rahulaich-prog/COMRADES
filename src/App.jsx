// In your page or parent component:
import CoastalDerbyTrophy from "./pages/CostalDerbyTrophy";
import GallerySection from "./pages/Gallary";
import PlayersRankingSection from "./pages/PlayersRanking";
import UpcomingMatches from "./pages/UpcomingMatches";

function MyPage() {
  return (
    <div style={{ backgroundColor: "" }}>
      
      <UpcomingMatches />
      <CoastalDerbyTrophy />
      <GallerySection />
      <PlayersRankingSection />
    </div>
  );
}

export default MyPage;


















// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";
// import { Signup } from "./pages/Signup";
// import { Signin } from "./pages/Signin";
// import CoastalDerbyTrophy, { Dashboard } from "./pages/Dashboard";


// // function App() {
// //   return (
// //     <>
// //        <BrowserRouter>
// //         <Routes>
// //           <Route path="/signup" element={<Signup />} />
// //           <Route path="/signin" element={<Signin />} />
// //           <Route  element={<CoastalDerbyTrophy/>} />
// //         </Routes>
// //       </BrowserRouter>
// //     </>
// //   )
// // }

// export default App
