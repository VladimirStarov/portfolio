<template lang="pug">
  .about-page-container
    .container
      .about-page__title
        h1.page-title Блок «Обо мне»
        button(type="button" @click="showAddingForm = true").btn.about-page__add-new() Добавить группу
      
    .about-page__content
      .container
        ul.about__list

          li(v-if="showAddingForm").about__item
           .card
            skills-add(:category="{ showAddingForm }" @hideCard="hideCard")
            .card__content
            .card__footer
              skills-group
          
          li(v-for="category, index in getCategories" :key="index").about__item
            .card
              skills-add(:category="category")
              .card__content
                ul.skills
                  li(v-for="skill in category.skills" :key="skill.id")
                    skills-item(:skill="skill")
              .card__footer
                skills-group(:category="category")
                          
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  components: {
    skillsAdd: () => import('components/skills-add.vue'),
    skillsGroup: () => import('components/skills-group.vue'),
    skillsItem: () => import('components/skills-item.vue'),
    errorsTooltip: () => import('components/errors-tooltip.vue'),
  },
  data: () => ({
    showAddingForm: false,
    formBlocked: false,
    title: '',
    skill: {
      title: '',
      percent: 0,
      category: 0
    }
  }),
  computed: {
    ...mapState('user', {
      userID: state => state.user.id
    }),
    ...mapGetters('categories', ['getCategories'])
  },
  methods: {
    ...mapActions('categories', ['loadCategories']),
    hideCard () {this.showAddingForm = false;},
  },
  created () {
    this.loadCategories(this.userID);
  },
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



