const api_key = "6c74a991";

document.getElementById("searchBtn").addEventListener("click",()=>{
    let input= document.getElementById("query").value;
    console.log(input);
    searchMovie(input);
}
);

async function searchMovie(title) {
    const res = await fetch(
        `http://www.omdbapi.com/?apikey=${api_key}&s=${title}`
    );
    const data= await res.json();
    console.log(data); 
    
     let resultsDiv = document.getElementById("results");

    // If no movie found
    if (data.Response === "False") {
        resultsDiv.innerHTML = `<p style="color:red; font-size: 20px;">${data.Error}</p>`;
        return;
    }

    // Display movie results
    let output = "";
    data.Search.forEach(movie => {
        output += `
            <div class="movie-card">
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>Year: ${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
            </div>
        `;
    });

    resultsDiv.innerHTML = output;
}