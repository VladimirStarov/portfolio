import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";

import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
