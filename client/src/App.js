import './App.css';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from "react-scroll-to-top";
function App() {
 // const [theme] = useTheme();
  return (
    <>
  
      <Navbar/>
    
    <ScrollToTop smooth
    color='#f29f67'
    style={{backgroundColor:'#1e1e2c', borderRadius:'80px'}} />
  </>
  );
}

export default App;