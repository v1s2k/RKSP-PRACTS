import './App.css';
import styleT from "./components/App.title.css";
import styleM from "./components/App.main.css";
import styleFooter from "./components/App.footer.css";
import MyTitle from "./components/title";
import MyMain from "./components/mymain";
import MyFooter from "./components/footer";



function App() {
  return (
      <div className="App">

         <MyTitle className={styleT.Title}>

         </MyTitle>

          <MyMain className={styleM.Mymain}>

          </MyMain>

          <MyFooter className={styleFooter.Footer}>

          </MyFooter>


      </div>
  );
}
export default App;





