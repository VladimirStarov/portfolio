import Vue from "vue";

const display = {
    template: "#reviews-display",
    props:["reviews"]
}

new Vue({
    el: "#reviews-components",
    template: "#reviews-container",
    components: {display},
    data: () => ({
        reviews: []
    }),
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredAva = require(`../images/avatar/${item.avatar}`);
                item.avatar = requiredAva;
                return item
            }); 
        }
    },
    created() {
        const data = require('../data/reviews.json');
        this.reviews = this.makeArrWithRequiredImages(data);
    }
});