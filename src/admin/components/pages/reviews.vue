<template lang="pug">
  .reviews
    .container
      .page__header
        .page__columns
          h1.page-title.works__title Блок «Отзывы»
      .page__content
        .page__row
          .card
            .card__header
              .card__column
                .page-subtitle Новый отзыв
            .card__content
              form.edit-form.edit-form--reviews.form__strong
                .edit-form__column
                  input(type="file", name="reviews-image")#upload-pic.edit-form__file
                  .edit-form__row
                    .edit-form__frame
                      svg(fill="#fff" width="70%" height="70%")
                        use(xlink:href="sprite.svg#user")
                  .edit-form__row
                    .edit-form__button
                      button(type="button").btn
                        label(for="upload-pic").btn.btn__link Добавить фото
                .edit-form__column
                  .edit-form__row-double
                    .edit-form__row
                      .form__row
                        label(for="form_reviews-name").form__label Имя автора
                        .form__input-wrap
                          input(type="text" name="reviews-name" id="form_reviews-name" placeholder="Ковальчук Дмитрий" required="required" class="form__input")
                    .edit-form__row
                      .form__row
                        label(for="form_reviews-link").form__label Титул автора
                        .form__input-wrap
                          input(type="text" name="reviews-link" id="form_reviews-link" placeholder="Основатель LoftSchool" required="required" class="form__input")
                  .edit-form__row
                    .form__row
                      label(for="form-reviews-desc").form__label Отзыв
                      .form__input-wrap
                        textarea(name="reviews-desc" id="form-reviews-desc" placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!" required="required" class="form__textarea")
                  .edit-form__row
                    .controls.edit-form__btns
                      .controls__btn
                        button(type="reset").btn.btn__link Отмена
                      .controls__btn
                        button(type="submit").btn.btn__gradient Сохранить
        .page__row
          ul.reviews__list
            li.reviews__item
              .card.card__add
                button(type="button").btn.btn__add.btn__admin-big
            each i in [1, 2]
              li.reviews__item
                .card
                  .card__header
                    .user
                      .user__column
                        .avatar.avatar__review
                          img(src=`~images/content/sabantsev.jpg`)
                      .user__column
                        .user__row.user__name Владимир Сабанцев
                        .user__row.user__occ Преподаватель
                  .card__content
                    .reviews__row
                      p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .card__footer
                    .controls
                      .controls__btn
                        button(type="button").btn
                          .btn__column Править
                          .btn__column
                            svg(width="17" height="17").btn-icon__blue
                              use(xlink:href="sprite.svg#pencil")
                      .controls__btn
                        button(type="button").btn
                          .btn__column Удалить
                          .btn__column
                            svg(width="15" height="15").btn-icon__red
                              use(xlink:href="sprite.svg#cross")
              li.reviews__item
                .card
                  .card__header
                    .user
                      .user__column
                        .avatar.avatar__review
                          img(src=`~images/content/kovalchuk.jpg`)
                      .user__column
                        .user__row.user__name Ковальчук Дмитрий
                        .user__row.user__occ Основатель Loftschool
                  .card__content
                    .reviews__row
                      p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .card__footer
                    .controls
                      .controls__btn
                        button(type="button").btn
                          .btn__column Править
                          .btn__column
                            svg(width="17" height="17").btn-icon__blue
                              use(xlink:href="sprite.svg#pencil")
                      .controls__btn
                        button(type="button").btn
                          .btn__column Удалить
                          .btn__column
                            svg(width="15" height="15").btn-icon__red
                              use(xlink:href="sprite.svg#cross")

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {
    appInput: () => import("components/input.vue"),
    appButton: () => import("components/button.vue")
  },
  data() {
    return {
      rendedPhotoUrl: "",
      review: {
        desc: "",
        title: "",
        photo: ""
      }
    };
  },
  methods: {
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.rendedPhotoUrl = reader.result;
        };
      } catch (error) {
        alert("sh*t happens :(");
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";


.reviews{
  img {
    width: 100%;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
  }

  &__item {
    flex-basis: calc(100% / 3 - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
  }

  &__row {
    display: flex;
    margin-bottom: 20px;

    p {
      color: rgba($text-color, .7);
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }
  }
}
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;

  img {
    max-height: initial;
    height: auto;
  }
}

.avatar--45 {
  width: 45px;
  height: 45px;
}

.avatar__review {
  width: 50px;
  height: 50px;
}

.avatar--74 {
  width: 74px;
  height: 74px;
}
</style>


