<template>
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
                    <input type="text"
                           value="0"
                           ref="age"
                           name="age"
                           placeholder="0"
                           inputmode="decimal"
                           maxlength="3"
                           @input="changeDataPerson" required>
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
                    <input type="text" value="0" ref="height" name="height" placeholder="0" inputmode="decimal" maxlength="3"
                            @input="changeDataPerson" required>
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
                    <input type="text" ref="weight" value="0" name="weight" placeholder="0" maxlength="3" @input="changeDataPerson" required>
                </div>
            </div>
        </div>
    </fieldset>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import IDataPerson from "@/interfaces/IDataPerson";
export default defineComponent({
    name: "SportParameters",

    props: {
        person: {
            type: Object as PropType<IDataPerson>,
            required: true
        },
        isClean: {
            type: Boolean
        }
    },

    data() {
        return {
            dataPerson: this.person,
            stateClean: this.isClean
        }
    },

    methods: {
        changeDataPerson(e: any): void {
            let target: number = +e.target.value;
            console.log(this.person)
            if (!Number.isNaN(target)) {
                this.dataPerson[e.target.name] = target;
                e.target.value = this.changeFormatParams(String(target));

                this.$emit('change-data-person', this.dataPerson);
            } else {
                this.dataPerson[e.target.name] = 0;
                e.target.value = 0;
            }
        },

        changeFormatParams(param: string): number {
            let isFirst = false;
            let result: string[] = [];

            Array.from(param).forEach((el) => {
                if (+el !== 0) {
                    result.push(el);
                    isFirst = true;
                } else if (isFirst) {
                    result.push(el);
                }
            });

            if (!result.length) {
                return 0;
            }

            return +result.join('');
        }
    },

    watch: {
        isClean(newValue) {
            if (newValue) {
                console.log(newValue)
                this.dataPerson = {
                    age: 0,
                    height: 0,
                    weight: 0
                };
                this.$refs['age'].value = '0';
                this.$refs['height'].value = '0';
                this.$refs['weight'].value = '0';
                this.$emit('clean-data')
            }
        }
    }

});
</script>

<style scoped>

</style>