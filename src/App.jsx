import Awards from "./components/Awards";
import ITvendors from "./components/ITvendors";
import Upcomingeve from "./components/Upcomingeve";
import Latestnews from "./components/Latestnews";
import Solving from "./components/solving";
import Howwedo from "./components/Howwedo";
import Whatwedo from "./components/Whatwedo";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Successstory from "./components/Successstory";
import Videotext from "./components/Videotext";
import Emailus from "./components/Emailus";


const App = () => {
  return (
    
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    
    <Heading />
    <Whatwedo />
    <Howwedo />
    <Solving />
    <Latestnews />
    <Upcomingeve />
    <ITvendors />
    <Awards />
    <Successstory />
    <Videotext />
    <Emailus />
    </div>
    </>
  );
};

export default App;