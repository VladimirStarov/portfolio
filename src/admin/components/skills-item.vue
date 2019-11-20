<template lang="pug">
  .skills__row(v-if="editMode" @keyup.enter="editExistedSkill" @keyup.esc="editMode = !editMode")
    .skills__cell
      input(type="text" name="skillTitle" v-model="editedSkill.title").form__input
    .skills__cell
      input(type="number" name="skillPercent" :strong="true" v-model="editedSkill.percent").form__input.form__input__strong
    .skills__cell
      .controls
        .controls__btn
          button(type='button' @click="editExistedSkill").btn.btn-icon__tick
        .controls__btn
          button(type='button' @click="editMode = !editMode").btn.btn-icon__cancel

  .skills__row(v-else)
    .skills__cell {{ skill.title }}
    .skills__cell {{ skill.percent }} %
    .skills__cell
      .controls
        .controls__btn
          button(type='button' @click="editMode = !editMode").btn.btn-icon__pencil
        .controls__btn
          button(type='button' @click="deleteSkill(skill)").btn.btn-icon__delete
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: Object
  },
  data () {
    return {
      editMode: false,
      editedSkill: { ...this.skill }
    };
  },
  components: {
    input: () => import('components/input.vue/')
  },
  methods: {
    ...mapActions('skills', ['deleteSkill', 'editSkill']),
    editExistedSkill () {
      this.editMode = !this.editMode;
      this.editSkill(this.editedSkill);
    }
  }
};
</script>

