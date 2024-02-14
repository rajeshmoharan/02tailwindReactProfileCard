import "./App.css";
import Card from "./Card";



function App() {

  let myObj = {
    username : 'Rajesh Moharana',
    designation : 'I am React Devloper'
  }

  return (
    <>
      <Card username={myObj.username} designation={myObj.designation} />
    </>
  );
}

export default App;
