import image from '../../assets/mask-group.png';
class NavBar extends HTMLElement {
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
            }
            :host {
                display: inline-block;
                position:fixed;
                z-index: 99;
                width: 100%;
                background-color: white;
                font-family: 'Roboto', sans-serif;
                color: black;
                box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.1);
                border-radius: 0 0 10px 10px;
                padding: 10px;

            }
            img {
                width: 202px;
                height: 53px
            }
            .bungkus {
                padding-top: 12px;
                display:flex;
                flex-direction:column;       
            }
            ul.ul {
                display: flex;
                flex-direction:row;
                list-style-type: none;
                align-items: center;
            }
            .nav {
                display:flex;
                flex-direction:row;
                justify-content: space-between;
            }
            :host ul li a{
                margin-right:10px;
                color: black;
                text-decoration: none; !important
                padding: 5px;
                font-weight: 100;
            }
            :host ul li a:hover{
                color: green;
            }
            #home {
                font-weight: bold;
            }
        </style>
        `;
        //container
        const div = document.createElement('div');
        div.classList.add('container');
        div.classList.add('nav');

        //throw brand picture
        const imgs = new Image();
        imgs.src = image;

        const img = document.createElement('img');
        img.setAttribute('src', imgs.src);
        div.appendChild(img);

        // throw list
        const bungkus = document.createElement('div');
        bungkus.classList.add('bungkus');
        const ul = document.createElement('ul');
        ul.setAttribute('class', 'ul');
        bungkus.appendChild(ul);
        div.append(bungkus);

        const menu = ['Home', 'Global Data', 'Country Data'];

        menu.forEach((element, index) => {
            const li = document.createElement('li');
            li.setAttribute('class', `item`);
            ul.appendChild(li);
            const anchor = document.createElement('a');
            anchor.setAttribute('href', '#items' + (index + 1));
            anchor.setAttribute('id', element.toLowerCase().replace(' ', '-'));
            anchor.innerHTML = anchor.innerHTML + element;
            li.appendChild(anchor);
        });

        // finishing
        this.shadowDOM.appendChild(div);


    }
}

customElements.define("nav-bar", NavBar);