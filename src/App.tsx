import "./styles.css";

import Table from "./Table";
import Icon from "./Icon";

import data from "./data";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <Icon id={data[0].statuses[0].id} name={data[0].statuses[0].name} />
      </div>

      <Table />
    </div>
  );
}
