<template lang="pug">
  .about-page-container
    .container
      .about-page__title
        h1.page-title Блок «Обо мне»
        button.about-page__add-new(
          @click="showAddingForm = true"
          v-if="showAddingForm === false"
        ) Добавить группу

    .about-page__content
      .container
        ul.about__list
          li.about__item
           .card
              .card__header
                .card__column
                  input(type="text", placeholder='Название новой группы').form__input
                .card__column
                  .controls
                    .controls__btn
                      button(type='button').btn.btn-icon__tick
                    .controls__btn
                      button(type='button').btn.btn-icon__cancel
              .card__content
              .card__footer
                .card__column
                  form.add-new-skill.is-blocked
                    .add-new-skill__cell
                      input(type="text", placeholder='Новый навык').form__input
                    .add-new-skill__cell
                      input(type="number").form__input
                    .add-new-skill__cell
                      button(type="submit").btn.btn__add.btn__big
          
          li.about__item
            .card
              .card__header
                .card__column
                  .page-subtitle Workflow
                .card__column
                  .controls
                    .controls__btn
                      button(type='button').btn.btn-icon__tick
                    .controls__btn
                      button(type='button').btn.btn-icon__cancel
              .card__content
                .skills
                  .skills__row(v-for="item in [{ key: 'Git', value: 100 }, { key: 'Terminal', value: 90 }, { key: 'Gulp', value: 80 }, { key:'Webpack', value: 70 }]")
                    .skills__cell {{ item.key }}
                    .skills__cell {{ item.value }} %
                    .skills__cell
                      .controls
                        .controls__btn
                          button(type='button').btn.btn-icon__pencil
                        .controls__btn
                          button(type='button').btn.btn-icon__delete
              .card__footer
                form.add-new-skill
                  .add-new-skill__cell
                    input(type="text", placeholder='Новый навык').form__input
                  .add-new-skill__cell
                    input(type="number").form__input
                  .add-new-skill__cell
                    button(type="submit").btn.btn__add.btn__big   
          li.about__item
            .card
              .card__header
                .card__column
                  .page-subtitle Frontend
                .card__column
                  .controls
                    .controls__btn
                      button(type='button').btn.btn-icon__pencil
              .card__content
                .skills
                  .skills__row
                    .skills__cell
                      input(type="text" value="HTML5").form__input
                    .skills__cell
                      input(type="text" value="25").form__input.form__input__strong
                    .skills__cell
                  .skills__row(v-for="item in [{ key: 'СSS3', value: 100 }, { key: 'JavaScript', value: 90 }, { key: 'Jquery и Vue.js', value: 80 }]")
                    .skills__cell {{ item.key }}
                    .skills__cell {{ item.value }} %
                    .skills__cell
                      .controls
                        .controls__btn
                          button(type='button').btn.btn-icon__tick
                        .controls__btn
                          button(type='button').btn.btn-icon__cancel
              .card__footer
                .card__column
                  form.add-new-skill
                    .add-new-skill__cell
                      input(type="text", placeholder='Новый навык').form__input
                    .add-new-skill__cell
                      input(type="number").form__input
                    .add-new-skill__cell
                      button(type="submit").btn.btn__add.btn__big               
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsAdd: () => import('components/skills-add.vue'),
    skillsGroup: () => import('components/skills-group.vue')
  },
  data() {
    return {
      showAddingForm: false 
    }
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions('categories', ['fetchCategories']),
    ...mapActions('skills', ['fetchSkills']),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    }
  },
  async created() {
    try {
      await this.fetchCategories(); 
    } catch (error) {
      alert('Произошла ошибка при загрузке категорий') 
    }

    try {
      await this.fetchSkills(); 
    } catch (error) {
      alert('Произошла ошибка при загрузке скиллов') 
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

 .skill-container {
  border: 1px solid black;
  padding: 10px;
}

.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }

  .page-subtitle {
    color: #414c63;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  }

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.about-page__add-new {
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}
</style>



