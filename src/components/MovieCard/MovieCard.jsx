const MovieCard = ({ movieInformation }) => {
	const { poster_path, title, vote_average, overview, genres

 } = movieInformation;
	const baseURL = 'https://image.tmdb.org/t/p/w400';
	const path = baseURL + poster_path;
	return (
		<div>
			<div>
				<img src={path} alt="poster" />
			</div>
			<div>
				<h1>{title}</h1>
				<p>User Score: {vote_average} </p>
				<h2>Overview</h2>
				<p>{overview}</p>
				<h2>Genres</h2>
				<ul>
				{genres.map(({ id, name }) => {
					return (
						<li key={id}>{name}</li>
					)
				})}
					</ul>
			</div>
</div>
	);
}

export default MovieCard;