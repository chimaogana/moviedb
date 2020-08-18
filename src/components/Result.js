import React from "react";

function Result({ result, openPopup }) {
	return (
		<selection className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt="" />
			<h3>{result.Title}</h3>
		</selection>
	);
}

export default Result;
