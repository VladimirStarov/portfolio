
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

new Vue({
    el: ".hero__menu",
    template: "#menu-templates",
    data: () => ({
        links: []
    }),
    created() {
        this.links = require('../data/links.json');
    }
  });