function app() {

    // center portion of the page where mobiles are listed
    this.listing = document.getElementById('listing');

    // filters on the left panel
    this.name = document.getElementsByClassName('text-input');
    this.select = document.getElementsByTagName('select');
    this.checkboxes = document.querySelectorAll('input[type="checkbox"]');

    this.items = [
        {
            name: 'Apple iPhone 11',
            rom: '128GB',
            ram: '2GB',
            color: 'Black',
            price: 50000,
            imageUrl: 'images/sample-mobile.webp',
            brand: 'iphone'
        },
        {
            name: 'OnePlus 8T',
            rom: '128GB',
            ram: '8GB',
            color: 'Green',
            price: 43000,
            imageUrl: 'images/sample-mobile.webp',
            brand: 'samsung'
        }
    ]

    this.filters = {}
}

app.prototype.render = function () {

    this.items.forEach((item) => {
        const { name, rom, ram, color, price, imageUrl, brand } = item;

        const template = `<div class="row">
            <div class="mobile-image">
                <img src="images/sample-mobile.webp"/>
            </div>
            <div class="mobile-content">
                <h3>
                    ${name} (${rom} ROM, ${ram} RAM, ${color})
                </h3>
                <h3>
                    INR ${price}
                </h3>
            </div>`;

        const div = document.createElement('div');
        div.innerHTML = template;
        this.listing.appendChild(div);
    })
}

app.prototype.bindEvents = function () {
    this.name[0].addEventListener('change', (event) => {
        this.filters.name = event.target.value
        console.log(this.filters.name);
    });

    this.select[0].addEventListener('change', (event) => {
        this.filters.select = event.target.value
        console.log(this.filters.select);
    });

    this.checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', (event) => {
            if( !this.filters.checkboxes ) {
                this.filters.checkboxes = [];
            }
            this.filters.checkboxes.push(event.target.value)
            console.log(this.filters.checkboxes);
        })
    });

}

const instance = new app();
instance.render();
instance.bindEvents();
