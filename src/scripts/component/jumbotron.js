import image from '../../assets/jumbotron.jpg';
class Jumbotron extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link href="../../../node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Roboto', sans-serif;
            }
            :host {
                position:relative;
                z-index:-1;
                padding-top:75px;
                display: inline-block;
                width: 100%;
                color: white;
                margin-bottom: 20px;
            }
            div.slicing {
                position:relative;
                top:220px;
                widht:100%;
                height: 30px;
                max-height:65px;
                background-color:#39CA36;
                transform: rotate(-1.35deg);
                z-index:-1;
            }
            h2 {
                position: relative;
                top:170px;
                color:white;
                text-align:center;
                font-size:3.2rem;
                font-weight: 100;
            }
            p {
                padding: 50px;
                position:relative;
                top:130px;
                text-align:center;
                font-size: 1.5rem;
                font-weight: 100;
            }
            
            a {
                position: relative;
                top:140px;
            }

            .tombol {
                width: 10%;
            }

            .tombol:hover {
                background-color: white;
                cursor: pointer;
            }
        </style>
        `;
        //container
        const div = document.createElement('div');
        div.classList.add('text-center')

        //throw image
        const imgs = new Image();
        imgs.src = image;
        div.style.background = `url(${imgs.src}) no-repeat`;
        div.style.minHeight = '100%';
        div.style.height = '574px';

        // header
        const heading = document.createElement('h2');
        heading.innerText = 'COVID-19 DATA';
        div.appendChild(heading);

        // letter
        const letter = document.createElement('p');
        letter.innerText = 'This website show you covid-19 global update data to inform the details of covid-19 in a global scope, also this website provide you how to apply medical protocol on pandemic period';
        div.appendChild(letter);

        // button
        const but = document.createElement('a');
        but.innerText = 'See More';
        but.classList.add('btn');
        but.classList.add('btn-success');
        but.classList.add('tombol');
        but.setAttribute('href', '#');
        div.appendChild(but);

        // slicing
        const slice = document.createElement('div');
        slice.classList.add('slicing');
        div.appendChild(slice);

        // flex
        const flexContainer = document.createElement('div');
        flexContainer.classList.add('flex-container');

        // implementation
        this.shadowDOM.appendChild(div);
    }
}
customElements.define("jumbotron-section", Jumbotron);