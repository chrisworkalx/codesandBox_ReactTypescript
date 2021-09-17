import "./styles.css";
import propTypes from "prop-types";
import { filterList } from "../utils/request";

const list = {
	name: "小李",
	sex: "男",
	age: 20
};

filterList(list);

const App: React.FC<{
	title: string;
	children?: JSX.Element | React.ReactNode;
}> = ({ title }) => {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<p style={{ color: "red" }}>hello</p>
			<p style={{ color: "red" }}>{title}</p>
		</div>
	);
};

App.defaultProps = {
	title: "哈哈哈哈"
};

App.propTypes = {
	title: propTypes.string.isRequired
};

export default App;
