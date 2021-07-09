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
    return data;
}

getSongDetail(detailSongUrl) 
    .then(data => {
        renderSongData(data);
    })
    .catch(reason => alert(reason.message))
