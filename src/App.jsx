import { useEffect, useState } from "react";

function App() {
	const [data, setdata] = useState([]);
	const [input, setInput] = useState("10");
	const getData = async () => {
		try {
			const response = await fetch(`https://rickandmortyapi.com/api/character`);
			const responseData = await response.json();
			const filteredData = await responseData.results.filter(
				(item) => item.id <= input
			);
			console.log(filteredData);
			// console.log(responseData.results);
			setdata(filteredData);
		} catch (error) {
			console.error(error);
		}
	};
		useEffect(() => {
			getData();
		}, [])
	
	return (
		<div>
			<input type="text" onChange={(e) => setInput(e.target.value)} />
			<button onClick={getData}>update</button>
			{data.map((item) => (
				<div key={item.id}>
					<h4>{item.name}</h4>
					<p>{item.status}</p>
					<img
						src={item.image}
						alt={item.name}
						style={{ width: 200, height: 200 }}
					/>
				</div>
			))}
		</div>
	);
}

export default App;
