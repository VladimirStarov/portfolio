<template lang="pug">
  form(@submit.prevent="addNewSkill" :class="{ 'is-blocked': formBlocked }").add-new-skill
    .add-new-skill__cell
      input.form__input(
        required="required"
        type="text"
        name="title"
        placeholder='Новый навык'
        v-model="skill.title")
    .add-new-skill__cell
      input(
        required="required"
        type="number"
        name="percent"
        v-model="skill.percent").form__input
    .add-new-skill__cell
      button(type="submit").btn.btn__add.btn__big
</template>

<script>
import { mapActions } from "vuex";
import SimpleVueValidator from 'simple-vue-validator';

const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  name: 'skills-group',
  props: ['category'],
  data () {
    return {
      formBlocked: !this.category,
      skill: {
        title: '',
        percent: 0
      }
    };
  },
  validators: {
    'skill.title': value => {
    
    },
    'skill.percent': value => {
      return Validator.value(value)
        
    }
  },
 
  methods: {
    ...mapActions('skills', ['addSkill']),
    async addNewSkill () {
      if (await this.$validate()) {
        this.formBlocked = true;
        this.skill.category = this.category.id;
        await this.addSkill(this.skill);
        this.formBlocked = this.skill.title = '';
        this.skill.percent = 0;
        this.validation.reset();
      }
    }
  }
};
</script>
