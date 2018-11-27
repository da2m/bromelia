const templateComboBox = document.createElement('template');
templateComboBox.innerHTML = `
    <style>
        .combobox-widget {
            position: absolute;
            min-width: 5rem;
            font-size: .8rem;
            color: #fff;
            top: 50%;
            left: 50%;
        }
        .combobox-widget > label {
            border-radius: 5px 5px 0 0;
            text-transform: uppercase;
            background-color: navy;
            cursor: pointer;
            display: block;
            padding: .8rem;
        }
        .combobox-widget > label:hover {
            background-color: #03033e;
        }
        .drop-down-list {
            transition-timing-function: linear;
            transition-property: visibility;
            transition-duration: 1s;
            transition-delay: 1s;
        }
        .combobox-widget #collapseList:checked + .drop-down-list {
            transition: display linear .5s;
            display: block;
        }
        #collapseList:checked + .drop-down-list {
            visibility: visible;
        }
        .drop-down-item {
            display: block;
            background-color: #666;
            text-align: left;
            transform: perspective(600px) rotateX(-90deg);
            transform-style:preserve-3d;
            transform-origin: top;
            transition-duration: .5s;
            transition-property: transform;
            transition-timing-function: ease-in;
        }
        .drop-down-item:hover {
            background-color: ghostwhite;
            color: #666;
        }
        .drop-down-item:last-child {
            border-radius: 0 0 5px 5px;
        }
        #collapseList:checked + .drop-down-list > .drop-down-item {
            transform: rotateX(0deg);
        }
        .drop-down-item > span {
            text-transform: uppercase;
            cursor: pointer;
            display: block;
            padding: .8rem;
        }
        #collapseList:checked + .drop-down-list > .drop-down-item:first-child,
        #collapseList + .drop-down-list > .drop-down-item:last-child {
            transition-delay: .1s;
        }
        #collapseList:checked + .drop-down-list > .drop-down-item:last-child,
        #collapseList + .drop-down-list > .drop-down-item:first-child {
            transition-delay: .8s;
        }
    </style>
    <div class="combobox-widget">
        <label for="collapseList" role="button">Location <i class="fas fa-map-marker-alt"></i></label>
        <input id="collapseList" type="checkbox" hidden aria-haspopup="true">
        <div class="drop-down-list invisible" role="listbox">
            <label class="drop-down-item">
                <input type="radio" name="myselect" id="city" value="nat" hidden onclick="">
                <span role="option">Natal, RN</span>
            </label>
            <label class="drop-down-item">
                <input type="radio" name="myselect" id="country" value="br" hidden onclick="">
                <span role="option">Brazil</span>
            </label>
        </div>
        
        <select name="theme" hidden aria-hidden="true">
            <option id="city" value="nat">Light</option>
            <option id="country" value="br">Brazil</option>
        </select>
    </div>
`;


class ComboBox extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({
            'mode': 'open'
        });
    }

    connectedCallback() {
        console.log('Combo Box added to the DOM');
        this._root.appendChild(templateComboBox.content.cloneNode(true));
    }

    disconnectedCallback() {
        console.log('Combo Box removed from the DOM');
    }
}

window.customElements.define('combo-box', ComboBox);