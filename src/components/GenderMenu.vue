<template>
    <div class="form__item">
        <h2 class="heading">
            Пол
        </h2>
        <ul class="switcher" >
            <li class="switcher__item" value="male">
                <input id="gender-male" name="gender" ref="base-gender-input" @click="changeGender" value="male" type="radio" checked required >
                <label for="gender-male">
                    Мужчина
                </label>
            </li>
            <li class="switcher__item" value="female">
                <input id="gender-female" name="gender" @click="changeGender" value="female" type="radio" required>
                <label for="gender-female">
                    Женщина
                </label>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "GenderMenu",

    props: {
        gender: {
            type: String,
            required: true
        }
    },

    methods: {
        changeGender(e: PointerEvent): void {
            this.$emit('change-gender', (<HTMLInputElement>e.target).value);
        }
    }
});
</script>

<style scoped>

</style>