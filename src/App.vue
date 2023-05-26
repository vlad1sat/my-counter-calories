<template>
    <main class="main">
        <div class="container">
            <article class="counter">
                <h1 class="counter__heading heading-main">
                    Счётчик калорий
                </h1>
                <form class="counter__form form" name="counter" action="#" method="post" @submit.prevent="sentResult = true">
                    <div class="form__item">
                        <h2 class="heading">
                            Пол
                        </h2>
                        <ul class="switcher" >
                            <li class="switcher__item" value="male">
                                <input id="gender-male" name="gender" ref="base-gender-input" @click="(e) => gender = e.target.value" value="male" type="radio" checked required >
                                <label for="gender-male">
                                    Мужчина
                                </label>
                            </li>
                            <li class="switcher__item" value="female">
                                <input id="gender-female" name="gender" @click="(e) => gender = e.target.value" value="female" type="radio" required>
                                <label for="gender-female">
                                    Женщина
                                </label>
                            </li>
                        </ul>
                    </div>
                    <fieldset class="form__item form__parameters" name="parameters">
                        <legend class="visually-hidden">
                            Физические параметры
                        </legend>
                        <div class="inputs-group">
                            <div class="input">
                                <div class="input__heading">
                                    <label class="heading" for="age">
                                        Возраст
                                    </label>
                                    <span class="input__heading-unit">лет</span>
                                </div>
                                <div class="input__wrapper">
                                    <input type="number" id="age" name="age" placeholder="0" inputmode="decimal" max="999" v-model="dataPerson.age" @input="changeValueDataPerson" required>
                                </div>
                            </div>
                            <div class="input">
                                <div class="input__heading">
                                    <label class="heading" for="height">
                                        Рост
                                    </label>
                                    <span class="input__heading-unit">см</span>
                                </div>
                                <div class="input__wrapper">
                                    <input type="number" id="height" name="height" placeholder="0" inputmode="decimal" max="999" v-model="dataPerson.height" @input="changeValueDataPerson" required>
                                </div>
                            </div>
                            <div class="input">
                                <div class="input__heading">
                                    <label class="heading" for="weight">
                                        Вес
                                    </label>
                                    <span class="input__heading-unit">кг</span>
                                </div>
                                <div class="input__wrapper">
                                    <input type="number" id="weight" name="weight" placeholder="0" max="999" v-model="dataPerson.weight" @input="changeValueDataPerson" required>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="form__item">
                        <legend class="heading">Физическая активность</legend>
                        <ul class="radios-group">
                            <li class="radio">
                                <div class="radio__wrapper">
                                    <input id="activity-minimal" name="activity" value="min" type="radio" ref="base-activity-minimal"
                                           @click="(e) => actionPerson = e.target.value" checked required>
                                    <label for="activity-minimal">Минимальная</label>
                                </div>
                                <p class="radio__description">Сидячая работа и нет физических нагрузок</p>
                            </li>
                            <li class="radio">
                                <div class="radio__wrapper">
                                    <input id="activity-low" name="activity" value="low" type="radio" @click="(e) => actionPerson = e.target.value" required>
                                    <label for="activity-low">Низкая</label>
                                </div>
                                <p class="radio__description">Редкие, нерегулярные тренировки, активность в быту</p>
                            </li>
                            <li class="radio">
                                <div class="radio__wrapper">
                                    <input id="activity-medium" name="activity" value="medium" type="radio" @click="(e) => actionPerson = e.target.value" required>
                                    <label for="activity-medium">
                                        Средняя
                                    </label>
                                </div>
                                <p class="radio__description">
                                    Тренировки 3-5 раз в неделю
                                </p>
                            </li>
                            <li class="radio">
                                <div class="radio__wrapper">
                                    <input id="activity-high" name="activity" value="high" @click="(e) => actionPerson = e.target.value" type="radio" required>
                                    <label for="activity-high">
                                        Высокая
                                    </label>
                                </div>
                                <p class="radio__description">
                                    Тренировки 6-7 раз в неделю
                                </p>
                            </li>
                            <li class="radio">
                                <div class="radio__wrapper">
                                    <input id="activity-maximal" name="activity" value="max" type="radio" @click="(e) => actionPerson = e.target.value" required>
                                    <label for="activity-maximal">
                                        Очень высокая
                                    </label>
                                </div>
                                <p class="radio__description">
                                    Больше 6 тренировок в неделю и физическая работа
                                </p>
                            </li>
                        </ul>
                    </fieldset>
                    <div class="form__submit">
                        <button class="form__submit-button button" name="submit" type="submit" :disabled="!stateButtons.sent">
                            Рассчитать
                        </button>
                        <button class="form__reset-button" name="reset" type="reset" @click="cleanState" :disabled="!stateButtons.clean">
                            <svg width="24" height="24" viewbox="0 0 24 24" fill="#FD3636" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"/>
                            </svg>
                            <span>Очистить поля и расчёт</span>
                        </button>
                    </div>
                </form>
                <section class="counter__result" :class="{ 'counter__result--hidden': !sentResult }">
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
            </article>
        </div>
    </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({

    data() {
        return {
            gender: 'male',
            dataPerson: {
                age: 0,
                height: 0,
                weight: 0,
            },
            actionPerson: 'min',
            stateButtons: {
                clean: false,
                sent: false
            },
            sentResult: false,
        };
    },

    computed: {
        calories(): number {
            const person = this.dataPerson;
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

        baseGenderInput(): HTMLInputElement {
            return this.$refs['base-gender-input'] as HTMLInputElement;
        },

        baseActivityMinimal(): HTMLInputElement {
            return this.$refs['base-activity-minimal'] as HTMLInputElement;
        }
    },

    methods: {
        fixCalories(dataCalories: number): number {
            return +dataCalories.toFixed(2);
        },

        changeValueDataPerson(e: Event): void {
            this.dataPerson[e.target.name] = +e.target.value;
            let isSent = true;

            Object.values(this.dataPerson).forEach((el: number) => {
                if (el <= 0) {
                    this.stateButtons.sent = false;
                    isSent = false;
                } else {
                    this.stateButtons.clean = true;
                }
            });

            if (isSent) {
                this.stateButtons.sent = true;
                console.log(this.dataPerson)
            }
        },

        cleanState() {
            this.gender = 'male';
            this.baseGenderInput.checked = true;

            this.dataPerson = {
            age: 0,
                height: 0,
                weight: 0,
            };

            this.actionPerson = 'min';
            this.baseActivityMinimal.checked = true;

            this.stateButtons = {
                clean: false,
                sent: false
            };
            this.sentResult = false;
        }
    },

    watch: {
        gender(newValue) {
           console.log(this.gender);
           console.log(this.dataPerson)
        },
    }
});
</script>
<style>

</style>
