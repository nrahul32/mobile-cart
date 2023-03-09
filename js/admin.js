function admin() {
    this.form = document.getElementById('form');
}

admin.prototype.bindEvents = function() {
    this.form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formMap = {};
        for(const [key, value] of formData.entries()) {
            formMap[key] = value;
        }
        console.log(formMap);
    });
}

const adminInstance = new admin();
adminInstance.bindEvents();
