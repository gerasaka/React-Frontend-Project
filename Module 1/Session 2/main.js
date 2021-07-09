//form handle
function createBtn(){
    alert(`Playlist ${document.getElementById('form-title').value} created!`);
}

//API url
const detailSongUrl = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

//API call
async function getSongDetail(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(`API response = ${response.status}, ok = ${response.ok}`);
    // console.log(data);
    return data;
}

const renderSongData = (data) => {
    const { name, artists, album, external_urls } = data;

    let song = 
        `<img src="${album.images[2].url}" alt="Album cover"><br>
        <p>Title </p>
        <p>${name}<p><br>
        <p>Artists </p>
        <p>${artists[0].name}<p><br>
        <p>Album </p>
        <p>${album.name}</p><br>
        <button onclick="location.href='${external_urls.spotify}'" type="button">
        Listen on Spotify</button>
        `;

    const container = document.getElementsByClassName("container")[0];

    container.innerHTML = song;
}

getSongDetail(detailSongUrl) 
    .then(data => {
        renderSongData(data);
    })
    .catch(reason => alert(reason.message))