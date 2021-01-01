async function getDataConfirmed() {
    const baseUrl = 'https://covid19.mathdro.id/api';
    try {
        const response = await fetch(`${baseUrl}`);
        const responseJson = await response.json();
        renderConfirmed(responseJson.confirmed.value);
        renderRecovered(responseJson.recovered.value);
        renderDeaths(responseJson.deaths.value);
        renderLastUpdate(responseJson.lastUpdate);
    } catch (error) {
        showResponseMessage(error);
    }
}

const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
};

const renderConfirmed = (value) => {
    const card = document.getElementById('confirmed');
    const text = document.createElement('h2');
    text.innerText = `${value}`
    card.appendChild(text);
};

const renderRecovered = (value) => {
    const card = document.getElementById('recovered');
    const text = document.createElement('h2');
    text.innerText = `${value}`
    card.appendChild(text);
};

const renderDeaths = (value) => {
    const card = document.getElementById('death');
    const text = document.createElement('h2');
    text.innerText = `${value}`
    card.appendChild(text);
};


const renderLastUpdate = (value) => {
    const card = document.getElementsByClassName('case');
    for (let i = 0; i < card.length; i++) {
        const element = card[i];

        const last = document.createElement('p');
        last.classList.add('update');
        last.innerHTML = `<b>Last Update</b> : ${value}`;
        element.appendChild(last);
    }
};

export default getDataConfirmed;