<template lang="pug">
  div.root-wrapper-container
    div.root-container
      template
        header.header-container
          app-header
        section.tabs-container
          tabs
        main.content-container
          router-view
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    appHeader: () => import("components/header"),
    tabs: () => import("components/tabs")
  }
};
</script>


<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.root-wrapper-container {
  height: 100%;
}

.header-container {
  background: linear-gradient(to right, #3e3e59, #454573);
  padding: 15px 0;

  @include phones {
    padding: 20px 0;
  }
}

.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.admin-wrapper {
  display: flex;
}

.maincontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

.content-container {
  background: url("~images/bg/admin.jpg") center center no-repeat / cover;
  flex: 1;
  padding-top: 60px;

  @include phones {
    padding-top: 30px;
  }
}

.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}

.about {

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    
    @include tablets {
      flex-direction: column;
    }
}

  &__item {
    flex-basis: calc(50% - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
    min-height: 387px;
  }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}

.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;

  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }

  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}
.card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  padding: 30px;
  height: 100%;

  &__add {
    justify-content: center;
    align-items: center;
    box-shadow: none;
    padding: 0;
    background-color: #3f35cb;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }

  &__works:hover {
    cursor: pointer;
    opacity: .7;
    box-shadow: none;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 15px;
    border-bottom: 1px solid rgba(#1f232d, .15);
  }

  &__works > &__header {
    padding: 0;
    margin: -30px -30px 0 -30px;
    border-bottom: none;
  }

  &__column:nth-child(1) {
    flex-basis: 60%;
  }

  &__column:not(:last-child) {
    margin-right: 20px;
  }

  &__content {
    padding: 20px 10px 20px;
    flex: 1;
  }

  &__works > &__content {
    padding-left: 0;
    padding-right: 0;
  }

  &__footer {
    padding: 0 10px;
  }

  &__works > &__footer {
    padding-left: 0;
    padding-right: 0;
  }

  &__add-new-skill-group {
    flex-basis: 65%;
  }
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &__column:not(:last-child) {
    color: rgba($text-color, .5);
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    margin-right: 10px;
  }

  &__link {
    color: #383bcf;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }


  &__add {
    font-size: 0;
    display: flex;
    align-items: center;

    &:before {
      content: '+';
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      border-radius: 50%;
      font-size: 15px;
      width: 21px;
      height: 21px;
      color: #fff;
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    }

    &.btn__big:before {
      font-size: 30px;
      width: 40px;
      height: 40px;
    }

    &.btn--text {
      color: #4b6fd7;
      font-size: 16px;
      font-weight: 700;
      line-height: 2;

      &:before {
        margin-right: 10px;
      }
    }

    &.btn__admin-big {
      color: #fff;
      display: flex;
      justify-content: center;
      width: 150px;
      height: 150px;
      border: 2px solid currentColor;
      border-radius: 50%;

      &:before {
        font-size: 72px;
        font-weight: 300;
        line-height: 30px;
        background-image: none;
      }
    }
  }

  &__gradient {
      width: 181px;
      height: 50px;
      border-radius: 25px;
      color: #ffffff;
      font-weight: 700;
      line-height: 48px;
      text-transform: uppercase;
      background-color: #fff;
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }
}

.btn-icon {
  &__tick {
    background-image: svg-load("tick.svg", fill=#00d70a);
    width: 15px;
    height: 12px;
  }

  &__cancel {
    background-image: svg-load("cross.svg", fill=#bf2929);
    width: 14px;
    height: 12px;
  }

  &--pencil {
    background-image: svg-load("pencil.svg", fill=#414c63);
    width: 16px;
    height: 15px;
  }

  &__delete {
    background-image: svg-load("trash.svg", fill=#414c63);
    width: 13px;
    height: 15px;
  }

  &__blue {
    fill: #383bcf;
  }

  &__red {
    fill: #c92e2e;
  }
}

.btn--feedback {
  position: relative;
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  width: 347px;
  height: 80px;
  color: #fff;
  background-image: linear-gradient(90deg, #9300e8, #4a00ed);
  border-radius: 40px 5px;
  z-index: 9;
  overflow: hidden;

  @include phones {
    width: 259px;
    height: 60px;
    border-radius: 30px 0;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-image: linear-gradient(90deg, #b0f, #5900ff);
    transition: opacity .5s linear;
  }

  &:hover:not(:disabled):before {
    opacity: 1;
  }

  &:disabled {
    color: rgba(currentColor, .8);
  }
}

.add-new-skill {
  display: flex;
  flex-grow: 0;
  justify-content: flex-end;

  &__cell {
    margin-right: 20px;

    &:nth-child(1) {
      flex-basis: 45%;
    }

    &:nth-child(2) {
      flex-basis: 20%;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &.is-blocked {
    opacity: .3;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
  }
}

.skills {
  width: 100%;
  //padding: 27px 2%;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    //padding-bottom: 15px;
  }

  &__cell {
    &:nth-child(1) {
      flex-basis: 70%;
      margin-right: 30px;
    }
    &:nth-child(2) {
      flex-basis: 20%;
      margin-right: 30px;
    }
    &:nth-child(3) {

    }
  }
}

.form {
  &__input-wrap {
    position: relative;
  }

  &__label {
    display: inline-block;
    color: rgba($text-color, 0.5);
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 10px;
  }

  &__input,
  &__textarea {
    color: $text-color;
    line-height: 28px;
    padding: 0;
    background: transparent;
    width: 100%;

    &__strong {
      font-weight: 600;

      &::placeholder {
        color: inherit;
        font-weight: inherit;
      }
    }

    &:focus,
    &:focus {
      border-bottom-color: #5500f2;
    }

    &:focus ~ .form__icon {
      fill: #5500f2
    }

    &--error {
      .form__icon {
        fill: #cd1515;
      }

      & > input[type="text"],
      & > input[type="password"] {
        border-color: #cd1515;
      }
    }
  }


  &__input {
    padding-bottom: 10px;
    border: 0;
    border-bottom: 1px solid #1f232d;
  }

  &__textarea {
    height: 146px;
    padding: 20px;
    resize: none;
    border: 1px solid rgba($text-color, 0.3);
  }

  &__p-left {
    padding-left: 40px;
  }

  &__icon {
    display: flex;
    position: absolute;
    top: 4px;
    width: 26px;
    height: 30px;
    fill: #cfd2d7;
  }
}

.form {
  &__strong {
    .form__input,
    .form__textarea {
      font-weight: 600;
    }
  }

  &--18 {
    .form__input {
      font-size: 18px;
      font-weight: 700;
    }
  }
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__btn {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.edit-form {
  display: flex;

  &__file {
    display: none;
  }

  &__button {
    display: flex;
    justify-content: center;
  }

  &__column {
    flex-basis: 50%;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  &--reviews > &__column:nth-child(1){
    flex-basis: auto;
  }
  &--reviews > &__column:nth-child(2){
    flex-basis: 60%;
  }

  &__row-double {
    display: flex;
    justify-content: space-between;
  }

  &__row-double > &__row {
    flex-basis: calc(50% - 15px);
  }

  &__row {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__row:not(:last-child) {
    margin-bottom: 30px;
  }

  &__frame {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    overflow: hidden;
    object-fit: cover;
    object-position: center;

    img {
      height: auto;
      max-height: initial;
    }
  }

  &--reviews {
    .edit-form__frame {
      width: 200px;
      height: 200px;
      border: none;
      border-radius: 50%;
      img {
        object-fit: cover;
      }
    //background-color: #dee4ed;
    }
  }

  &__info {
    width: 50%;
    text-align: center;
    color: rgba(#414c63, .5);
    font-size: 16px;
    font-weight: 600;
    line-height: 2;
    margin-bottom: 20px;
  }

  &__btns {
    justify-content: flex-end;
  }
}

.page {
    &-title,
    &-subtitle {
      color: $text-color;
      font-weight: 700;
      line-height: 34px;
    }

    &-title {
      font-size: 21px;
    }

    &-subtitle {
      font-size: 18px;
    }

    &__container {
      position: relative;
      max-width: 92.5rem;
      width: 95%;
      margin: 0 auto;
      padding: 60px 0 30px 0;
    }

    &__header {
      display: flex;
      margin-bottom: 55px;
    }

    &__row:not(:last-child) {
      margin-bottom: 30px;
    }

    &__columns:not(:last-child) {
      margin-right: 30px;
    }
  }
.user {
  display: flex;
  align-items: center;

  &__column:not(:last-child) {
    margin-right: 30px;
  }

  &__row:not(:last-child) {
    margin-bottom: 10px;
  }

  &__name {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    @include tablets {
      font-size: 16px;
    }
  }

  &__occ {
    color: rgba($text-color, .3);
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    @include tablets {
      font-size: 14px;
    }
  }
}

.user--admin-header {
  .user__name {
    color: #fff;
  }

  .user__column:not(:last-child) {
    margin-right: 20px;
  }
}
</style>

