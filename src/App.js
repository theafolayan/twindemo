// import logo from "./logo.svg";
import "./App.css";
import "twin.macro";
import tw from "twin.macro";
// const Button = tw.button`border hover:border-black bg-green-200 p-3`;
const PrimaryButton = tw.button`bg-blue-800 text-white px-6 py-2 m-6 rounded-md hover:bg-blue-600`;

function App() {
  return (
    <div className="App">
      <PrimaryButton onClick={console.log("clicked")}> Click me</PrimaryButton>
    </div>
  );
}

export default App;
