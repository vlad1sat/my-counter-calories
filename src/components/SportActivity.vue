<template>
    <fieldset class="form__item">
        <legend class="heading">Физическая активность</legend>
        <ul class="radios-group">
            <li class="radio">
                <div class="radio__wrapper">
                    <input id="activity-minimal" name="activity" value="min" type="radio" ref="base-activity-minimal"
                           @click="sentAction" checked required>
                    <label for="activity-minimal">Минимальная</label>
                </div>
                <p class="radio__description">Сидячая работа и нет физических нагрузок</p>
            </li>
            <li class="radio">
                <div class="radio__wrapper">
                    <input id="activity-low" name="activity" value="low" type="radio" @click="sentAction" required>
                    <label for="activity-low">Низкая</label>
                </div>
                <p class="radio__description">Редкие, нерегулярные тренировки, активность в быту</p>
            </li>
            <li class="radio">
                <div class="radio__wrapper">
                    <input id="activity-medium" name="activity" value="medium" type="radio" @click="sentAction" required>
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
                    <input id="activity-high" name="activity" value="high" @click="sentAction" type="radio" required>
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
                    <input id="activity-maximal" name="activity" value="max" type="radio" @click="sentAction" required>
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
</template>

<script>
export default {
    name: "SportActivity",

    props: {
        actionPerson: {
            type: Object,
            required: true
        },
    },

    methods: {
        sentAction(e) {
            this.$emit('sent-action', e.target.value);
        }
    }
}
</script>

<style scoped>

</style>