import React, { useState } from "react";
import Search from "./components/Search";
import Detail from "./components/Detail";
import "./App.css";
import axios from "axios"

function App() {
	const [state, setState] = useState({
		s: "",
		results: [],
		selected: {},
	});
	const apiurl =
		"https://www.omdbapi.com/?apikey=8857cb53";
//setting the search query//
	const searchInput = (e) => {
		let s = e.target.value;
		setState((prevState) => {
			return { ...prevState, s: s };
		});
	};// fetching the data as soon as user clicks on enter key
	const search = (e) => {
        if (e.key === "Enter") {
            axios(apiurl + "&s=" + state.s).then(
                ({ data }) => {
                    let results = data.Search;
 
                    console.log(results);
 
                    setState((prevState) => {
                        return {
                            ...prevState,
                            results: results,
                        };
                    });
                }
            );
        }
    };
	// opening the details as soon as user click on a particular movie
	const openDetail = (id) => {
		fetch(apiurl + "&i=" + id)
			.then(response => response.json()) 
			.then(result => {
				setState(prevState => {
					return { ...prevState, selected: result };
				});
			})
			.catch(error => {
				console.error('Error fetching movie details:', error);
			});
	};
	
	const closeDetail = () => {
		setState((prevState) => {
			return { ...prevState, selected: {} };
		});
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>MovieKhoj
				</h1>
			</header>
			<main>
				<Search
					searchInput={searchInput}
					search={search}/>

				<div className="container">
					{state.results.map((e) => (
						<div
							className="item"
							onClick={() =>
								openDetail(e.imdbID)
							}>
							<img style={{ width: "300px" }} src={e.Poster}/>
							<h3 style={{ color: "white" }}>
								{e.Title}
							</h3>
						</div>
					))}
				</div>

				{typeof state.selected.Title !=
				"undefined" ? (
					<Detail
						selected={state.selected}
						closeDetail={closeDetail}
					/>
				) : (
					false
				)}
			</main>
		</div>
	);
}

export default App;
