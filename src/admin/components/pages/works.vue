<template lang="pug">
  .works
    .container
      h1.page-title Блок "Мои работы"
      .page__content
        .page__row
          .card
            .card__header
              .card__column
                .page-subtitle Редактирование работы
            .card__content
              form.edit-form.form__strong
                .edit-form__column
                  input(type="file", name="work-image")#upload-pic.edit-form__file
                  .edit-form__row
                    .edit-form__frame
                      .edit-form__info
                        | Перетащите или загрузите для загрузки изображения
                      .edit-form__button
                        button(type="button").btn
                          label(for="upload-pic").btn.btn__gradient ЗАГРУЗИТЬ
                .edit-form__column
                  .edit-form__row
                    .form__row
                      label(for="form_work-name").form__label Название 
                      .form__input-wrap
                        input(type="text" name="work-name" id="form_work-name" placeholder="Дизайн сайта для авто салона Porsche" required="required" class="form__input") 
                  .edit-form__row
                    .form__row
                      label(for="form_work-link").form__label Ссылка
                      .form__input-wrap
                        input(type="text" name="work-link" id="form_work-link" placeholder="https://www.porsche-pulkovo.ru" required="required" class="form__input")
                  .edit-form__row
                    .form__row
                      label(for="form-work-desc").form__label Описание
                      .form__input-wrap
                        textarea(name="work-desc" id="form-work-desc" placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей" required="required" class="form__textarea")
                  .edit-form__row
                    .form__row
                      label(for="form_work-tags").form__label Добавление тэга
                      .form__input-wrap
                        input(type="text" name="work-tags" id="form_work-tags" placeholder="Jquery, Vue.js, HTML5" required="required" class="form__input")
                  .edit-form__row
                    .controls.edit-form__btns
                      .controls__btn
                        button(type="reset").btn.btn__link Отмена
                      .controls__btn
                        button(type="submit").btn.btn__gradient Сохранить
        .page__row
          ul.works__list
            li.works__item
              .card.card__add
                button(type="button").btn.btn__add.btn__admin-big
            each i in [1, 2, 3, 4]
              li.works__item
                .card.card__works
                  .card__header
                    img(src=`~images/admin/works/${i}.jpg`)
                  .card__content
                    .works__row
                      h3.page-subtitle Сайт школы образования
                    .works__row
                      p
                        | Этот парень проходил обучение веб-разработке не где-то,
                        | а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .works__row
                      a(href="#").btn.btn__link http://loftschool.ru
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

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.works {
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
</style>