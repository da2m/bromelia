const templateProgressBar = document.createElement('template');
templateProgressBar.innerHTML = `
    <style>
        .progress-component {
            background-color: ghostwhite;
            background: -webkit-linear-gradient(#A9F1DF 0%, #FFBBBB 100%);
            background: -moz-linear-gradient(#A9F1DF 0%, #FFBBBB 100%);
            background: -o-linear-gradient(#A9F1DF 0%, #FFBBBB 100%);
            background: linear-gradient(#A9F1DF 0%, #FFBBBB 100%);
            padding: 1rem;
            border-radius: 1rem;
            box-shadow: 0 0 4px rgba(0,0,0,.5), 0 0 5px rgba(0,0,0,.3);
        }
        .progress-widget {
            font-family: 'Roboto', Font Awesome\ 5 Brands, Arial;
            font-weight: 600;
            margin: 1rem .3rem;
        }
        .progress-widget.css3 label {
        	color: #126dc5;
        }
        .progress-widget.css3 label:before {
            content: "\f38b";
            color: dodgerblue;
            font-size: 1.9rem;
         }
         .progress-widget.html5 label {
         	color: #ad3103;
        }
        .progress-widget.html5 label:before {
            content: "\f13b";
            color: orangered;
            font-size: 1.9rem;
        }
        .progress-widget.css3 label,
        .progress-widget.html5 label {
        background: -webkit-linear-gradient(left, white 0%, white 20%, transparent 22%, transparent 100%);
        background: -moz-linear-gradient(left, white 0%, white 20%, transparent 22%, transparent 100%);
        background: -o-linear-gradient(left, white 0%, white 20%, transparent 22%, transparent 100%);
        background: linear-gradient(to right, white 0%, white 20%, transparent 22%, transparent 100%);
        }
        .progress-widget.js label {
            background: rgba(5,5,5,1);
background: -moz-linear-gradient(left, rgba(5,5,5,1) 0%, rgba(5,5,5,1) 20%, rgba(246,246,246,1) 23%, transparent 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(5,5,5,1)), color-stop(20%, rgba(5,5,5,1)), color-stop(23%, rgba(246,246,246,1)), color-stop(100%, transparent));
background: -webkit-linear-gradient(left, rgba(5,5,5,1) 0%, rgba(5,5,5,1) 20%, rgba(246,246,246,1) 23%, transparent 100%);
background: -o-linear-gradient(left, rgba(5,5,5,1) 0%, rgba(5,5,5,1) 20%, rgba(246,246,246,1) 23%, transparent 100%);
background: -ms-linear-gradient(left, rgba(5,5,5,1) 0%, rgba(5,5,5,1) 20%, rgba(246,246,246,1) 23%, transparent 100%);
background: linear-gradient(to right, rgba(5,5,5,1) 0%, rgba(5,5,5,1) 20%, transparent 23%, transparent 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#050505', endColorstr='transparent', GradientType=1);
color: #c3a60a;
        }
        .progress-widget.js label:before {
            content: "\f3b8";
            color: gold;
        }
        .progress-widget label {
            letter-spacing: -1px;
        }
        .progress-widget label:before {
            vertical-align: middle;
            margin-right: .5rem;
            font-size: 1.8rem;
            margin-left: -2px;
        }
        .progress-box {
            box-shadow: 0 0 5px #000;
            border: 1px solid #000;
            background-color: #aaa;
            margin-top: .2rem;
            font-size: 1rem;
        }
        .progress-content {
            box-shadow: 0 0 5px #000;
            line-height: 1.5rem;
            position: relative;
            overflow: hidden;
            height: 1.5rem;
        }
        .progress-widget.css3 .progress-content {
            width: 80%;
        }
        .progress-widget.html5 .progress-content {
            width: 70%;
        }
        .progress-widget.js .progress-content {
            width: 75%;
        }
        .progress-content:after {
            background: black;
            background: -webkit-linear-gradient(black, gray);
            background: -moz-linear-gradient(black, gray);
            background: -o-linear-gradient(black, gray);
            background: linear-gradient(black, gray);
            animation: progress-animation 1.5s ease 2s 1 reverse;
            transition: background linear 1s;
            position: absolute;
            padding-left: 5px;
            font-size: .8rem;
            font-weight: 600;
            display: block;
            height: 100%;
            color: #fff;
            z-index: 10;
            width: 100%;
            top: 0px;
        }
        .progress-widget.css3 .progress-content:after {
            content: "80%";
        }
        .progress-widget.html5 .progress-content:after {
            content: "70%";
        }
        .progress-widget.js .progress-content:after {
            content: "75%";
        }
        .progress-content:before {
            animation: changing-background 1.5s ease-out 4s infinite;
            background-color: #fff;
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            z-index: 10;
            width: 100%;
        }
        .progress-widget.css3 .progress-content:before {
        	background-color: dodgerblue;
        }
        .progress-widget.html5 .progress-content:before {
        	background-color: orangered;
        }
        .progress-widget.js .progress-content:before {
        	background-color: gold;
        }
        @keyframes changing-background {
            from {
                transform: translate(100%);
            }
            to {
                z-index: 1000;
                opacity: 0;
            }
        }
        @keyframes progress-animation {
            from {
                transform: translateX(0%);
            }
            to {
                transform: translateX(100%);
            }
        }
    </style>

    <div class="progress-component" role="group">
        <div class="progress-widget css3" role="progressbar">
            <label>CSS3</label>
            <div class="progress-box">
                <div class="progress-content" aria-label="80%"></div>
            </div>
            <progress value="80" max="100" hidden aria-hidden="true">80%</progress>
        </div>
        
        <div class="progress-widget html5" role="progressbar">
            <label>HTML5</label>
            <div class="progress-box">
                <div class="progress-content" aria-label="70%"></div>
            </div>
            <progress value="70" max="100" hidden aria-hidden="true">70%</progress>
        </div>
        
        <div class="progress-widget js" role="progressbar">
            <label>JavaScript</label>
            <div class="progress-box">
                <div class="progress-content" aria-label="75%"></div>
            </div>
            <progress value="75" max="100" hidden aria-hidden="true">75%</progress>
        </div>
    </div>
`;

class ProgressBar extends HTMLElement {
    constructor() {
        super();
        //this._root = this.attachShadow({'mode': 'open'});
    }

    connectedCallback() {
        console.log('Progress Bar added to the DOM');
        this.appendChild(templateProgressBar.content.cloneNode(true));
    }

    disconnectedCallback() {
        console.log('Progress Bar removed from the DOM');
    }
}

window.customElements.define('progress-bar', ProgressBar);