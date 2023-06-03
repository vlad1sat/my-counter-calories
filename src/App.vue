<template>
    <main class="main">
        <div class="container">
            <article class="counter">
                <h1 class="counter__heading heading-main">
                    Счётчик калорий
                </h1>
                <form class="counter__form form" name="counter" action="#" method="post" @submit.prevent="sentResult = true">
                    <gender-menu :gender="gender" @changeGender="(data) => gender = data"/>
                    <sport-parameters :person="dataPerson" :isClean="isClean" @changeDataPerson="changeValueDataPerson"/>
                    <sport-activity :action-person="actionPerson" @sentAction="(data) => actionPerson = data" />
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
                <calories-result v-show="sentResult"
                     :action-person="actionPerson"
                     :gender="gender"
                     :props-person="dataPerson"
                />
            </article>
        </div>
    </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SportParameters from "@/components/SportParameters.vue";
import SportActivity from "@/components/SportActivity.vue";
import CaloriesResult from "@/components/CaloriesResult.vue";
import GenderMenu from "@/components/GenderMenu.vue";
import IDataPerson from "@/interfaces/IDataPerson";
export default defineComponent({
    components: {GenderMenu, CaloriesResult, SportActivity, SportParameters},

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
            isClean: false,
        };
    },

    methods: {
        changeValueDataPerson(data: IDataPerson): void {
            this.dataPerson = Object.assign(data);
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
            }
        },

        cleanState(): void {
            this.gender = 'male';
            document.getElementById('gender-male').checked = true;

            this.dataPerson = {
                age: 0,
                height: 0,
                weight: 0,
            };

            this.actionPerson = 'min';
            document.getElementById('activity-minimal').checked = true;

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
            console.log(this.actionPerson)
        },
    }
});
</script>
<style>

</style>
