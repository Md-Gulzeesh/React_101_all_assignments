import './App.css';
import Card from "./components/Card";
function App() {
  let data = [
    {
    date:'28/10/2020',
    heading:"Amazon Gift",
    subheading :"Pay",
    devices:"Desktop - Mobile",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
    bgColor:"#ffa500"
  },
  {
    date:'17 Sep 2020',
    heading:"Apple Gift",
    subheading :"Payment",
    devices:"MacOS - Mobile",
    logo:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    bgColor:"#f5f5f5"
  }
  ];
  return (
    <div className="App">
      <Card data = {data[0]}/>
      <Card data = {data[1]}/>
      {/* <Card data = {data[2]}/> */}
    </div>
  );
}

export default App;
