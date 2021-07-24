<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    style="max-width: 800px; margin: 20px auto"
  >
    <v-text-field
      v-model="firstName"
      :rules="firstNameRules"
      label="Имя"
      required
      maxlength="20"
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      :rules="lastNameRules"
      label="Фамилия"
      required
      maxlength="20"
    ></v-text-field>

    <v-text-field
      v-model="middleName"
      :rules="middleNameRules"
      label="Отчество"
      required
      maxlength="20"
    ></v-text-field>

    <v-text-field
      type="date"
      v-model="birthDate"
      :rules="birthDateRules"
      label="Дата рождения"
      required
    ></v-text-field>

    <v-text-field
      type="number"
      v-model="snils"
      :rules="snilsRules"
      label="СНИЛС"
      required
      maxlength="11"
    ></v-text-field>

    <v-select
      v-model="select"
      :items="gender"
      :rules="[(v) => !!v || 'Укажите пол']"
      label="Пол"
      required
    ></v-select>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="create">
      Создать
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Очистить
    </v-btn>
    <transition name="fade">
      <v-alert type="success" v-show="success" style="margin-top: 20px">
        Новый пациент успешно добавлен в таблицу
      </v-alert>
    </transition>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    firstName: "",
    firstNameRules: [
      (v) => !!v || "Поле обязательно для заполнения",
      (v) => (v && v.length <= 20) || "Максимальная длина строки - 20 символов",
    ],
    lastName: "",
    lastNameRules: [
      (v) => !!v || "Поле обязательно для заполнения",
      (v) => (v && v.length <= 20) || "Максимальная длина строки - 20 символов",
    ],
    middleName: "",
    middleNameRules: [
      (v) => !!v || "Поле обязательно для заполнения",
      (v) => (v && v.length <= 20) || "Максимальная длина строки - 20 символов",
    ],
    birthDate: "",
    birthDateRules: [(v) => !!v || "Поле обязательно для заполнения"],
    snils: null,
    snilsRules: [
      (v) => !!v || "Поле обязательно для заполнения",
      (v) => (v && v.length === 11) || "СНИЛС может состоять только из 11 цифр",
    ],
    select: null,
    gender: ["Мужской", "Женский"],
    success: false,
  }),

  methods: {
    create() {
      // Создание нового пациента
      // Если форма валидна, передаём в массив объект с данными из инпутов
      if (this.$refs.form.validate()) {
        let newBirthDate = new Date(this.birthDate);
        let Year = newBirthDate.getFullYear();
        let Month = newBirthDate.getMonth() + 1;
        let Day = newBirthDate.getDate();
        this.$store.state.pacientList.push({
          firstName: this.firstName,
          lastName: this.lastName,
          middleName: this.middleName,
          birthDate: `${Year}-${this.correctDate(Month)}-${this.correctDate(
            Day
          )}`,
          snils: this.snils,
          gender: this.select,
          id: this.$store.state.pacientList.length + 1,
        });
        this.success = true;
        setTimeout(() => (this.success = false), 2000);
        this.$refs.form.reset();
      }
    },
    correctDate(date) {
      // Коррестировать дату в двоичный формат
      if (date < 10) {
        return ("0" + date).slice(-2);
      } else {
        return date;
      }
    },
    reset() {
      // Сбросить значения формы
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
