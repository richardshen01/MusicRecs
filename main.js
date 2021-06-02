const song1title = document.getElementById('song1Title');
const song2title = document.getElementById('song2Title');
const song3title = document.getElementById('song3Title');
const artist1Name = document.getElementById('artist1Name');
const artist2Name = document.getElementById('artist2Name');
const artist3Name = document.getElementById('artist3Name');


const authUrl = 'https://accounts.spotify.com/api/token';
const url = 'https://api.spotify.com/v1/tracks?ids=3XpDU0Ua6q7wQrZ2g8xNPo%2C22UDw8rSfLbUsaAGTXQ4Z8%2C34xixFi5y3I5FIOH1ZWisx'

async function authorizeAccess() {
    const res = await fetch(authUrl, {
        method: "POST",
        headers: {
            'Authorization': 'Basic a0090c8d28d44eefa2c5401e4fc7ac10:4155fc8debc646e6a9c2989b09b31b53'
        },
        body: {'grant_type': client_credentials}

    });
}


async function fetchData() {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer BQCB90ZlpX2IpCCTZQftA4B6L8-EP81s1niCTaWM6c2Mlhl5H7BGNAwuLi9Gea4ihJKFw2dvo-0b1fCFztHhk_dW_Ye4pCC3hBY-qE-z1IQdkZ59KFdkZKrsPbfi4__UDizWBWo2imUCz9DBeVmROrF2r-DP'
        },

    });

    const data = await res.json();

    console.log(data);
    return data;

}

async function postSongs() {
    const songs = await fetchData();
    const sweetSong = songs.tracks[0];
    const olrelSong = songs.tracks[1];
    const jazzSong = songs.tracks[2];
    song1title.innerHTML = sweetSong.name;
    song2title.innerHTML = olrelSong.name;
    song3title.innerHTML = jazzSong.name;
    artist1Name.innerHTML = ' By: ' + sweetSong.artists[0].name;
    artist2Name.innerHTML = ' By: ' + olrelSong.artists[0].name;
    artist3Name.innerHTML = ' By: ' + jazzSong.artists[0].name;
}

postSongs();
