function app() {

    this.listing = document.getElementById('listing');
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

const instance = new app();
instance.render();
