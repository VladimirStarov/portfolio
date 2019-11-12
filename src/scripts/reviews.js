import Vue from "vue";
import { Carousel, Slide } from 'vue-carousel';

const EventBus = new Vue();

const display = {
    template: "#reviews-display",
    components: {
        Carousel,
        Slide
    },
    props:["reviews"],
    mounted() {
        EventBus.$on('slide', direction => {
            switch (direction) {
                case "prev" : 
                    document.querySelector('.VueCarousel-navigation-prev').click();
                    break;
                case "next":
                    document.querySelector('.VueCarousel-navigation-next').click();
                    break;
            }
        })
    }
};

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
                const requiredPic = require(`../images/reviews/${item.photo}`);
                item.photo = requiredPic;
                return item
            });
        },
        
        slide(direction) {
            EventBus.$emit('slide', direction)
        }
    },
    
    created() {
        const data = require('../data/reviews.json');
        this.reviews = this.makeArrWithRequiredImages(data);
    }
});