<template>
    <section class="counter__result">
        <h2 class="heading">
            Ваша норма калорий
        </h2>
        <ul class="counter__result-list">
            <li class="counter__result-item">
                <h3>
                    <span id="calories-norm">{{fixCalories(calories)}}</span> ккал
                </h3>
                <p>поддержание веса</p>
            </li>
            <li class="counter__result-item">
                <h3>
                    <span id="calories-minimal">{{fixCalories(downCalories)}}</span> ккал
                </h3>
                <p>снижение веса</p>
            </li>
            <li class="counter__result-item">
                <h3>
                    <span id="calories-maximal">{{fixCalories(upCalories)}}</span> ккал
                </h3>
                <p>набор веса</p>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import IDataPerson from "@/interfaces/IDataPerson";
import {PropType} from "vue";
import {defineComponent} from "vue";
export default defineComponent({
    name: "CaloriesResult",

    props: {
        propsPerson: {
            type: Object as PropType<IDataPerson>,
            required: true
        },

        gender: {
            type: String,
            required: true
        },

        actionPerson: {
            type: String,
            required: true
        }
    },

    computed: {
        calories(): number {
            const person: IDataPerson = Object.assign(this.propsPerson);
            const baseCalories: number = (10 * person.weight) + (6.25 * person.height) - (5 * person.age);
            let calories = this.gender === 'male' ? baseCalories + 5 : baseCalories - 161;

            switch (this.actionPerson) {
                case 'min':
                    calories *= 1.2;
                    break;
                case 'low':
                    calories *= 1.375;
                    break;
                case 'medium':
                    calories *= 1.55;
                    break;
                case 'high':
                    calories *= 1.725;
                    break;
                case 'max':
                    calories *= 1.9;
                    break;
            }
            return calories;
        },

        upCalories(): number {
            return this.calories * 1.15;
        },

        downCalories(): number {
            return this.calories * 0.85;
        },
    },

    methods: {
        fixCalories(dataCalories: number): number {
            return +dataCalories.toFixed(2);
        },
    }
});
</script>