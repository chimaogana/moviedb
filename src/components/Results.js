import React from "react";
import Result from "./Result";

function Results({ results, openPopup }) {
	return (
		<selection className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</selection>
	);
}

export default Results;
