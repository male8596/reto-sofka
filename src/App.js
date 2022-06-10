import "./App.css";
import Welcome from "./components/welcome";
import QA from "./components/QA";
import { quest } from "./constant";

export default function App() {
  return (
    <div className="App">
      <Welcome />
      <QA answers={quest[0].options} />
    </div>
  );
}