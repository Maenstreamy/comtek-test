<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    style="max-width: 900px; margin: 50px auto"
  >
    <div class="select">
      <select
        id=""
        size="1"
        name="pacients"
        v-model="select"
        class="pacient-select"
      >
        <option value="0">Выберите пациента</option
        ><option
          v-for="pacient of $store.state.pacientList"
          :key="pacient.key"
          :value="pacient.id"
          >{{ pacient.lastName }} {{ pacient.firstName }}
        </option></select
      >
    </div>

    <v-row justify="space-around" class="mt-10 mb-10">
      <v-date-picker locale="ru" v-model="consultationDate"></v-date-picker>
      <v-time-picker
        v-model="consultationTime"
        scrollable
        min="8:00"
        max="20:00"
        format="24hr"
      ></v-time-picker>
    </v-row>

    <v-row justify="center">
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="create">
        Создать
      </v-btn>
    </v-row>
    <transition name="fade">
      <v-alert type="error" v-if="error" class="mt-10">
        Необходимо указать пациента, дату и время
      </v-alert>
    </transition>
    <transition name="fade">
      <v-alert type="success" v-show="success" style="margin-top: 20px">
        Новая консультация успешно добавлена в таблицу
      </v-alert>
    </transition>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    select: "0",
    success: false,
    consultationDate: null,
    consultationTime: null,
    error: false,
  }),

  methods: {
    create() {
      // Создание новой консультации
      // Если поля заполненны, передаём в массив объект с данными из инпутов
      // Иначе, показывыем ошибку
      if (
        this.select > 0 &&
        this.consultationDate !== null &&
        this.consultationTime !== null
      ) {
        this.$store.state.consultationList.push({
          consultationDate: this.consultationDate,
          consultationTime: this.consultationTime,
          pacientId: this.select,
        });
        this.success = true;
        setTimeout(() => (this.success = false), 2000);
        this.$refs.form.reset();
      } else {
        this.error = true;
        setTimeout(() => (this.error = false), 2000);
        console.log(this.consultationDate);
      }
    },
  },
};
</script>

<style scoped>
.select {
  position: relative;
}
.select select {
  margin: 0 auto;
  padding-left: 10px;
  height: 30px;
  max-width: 300px;
  width: 100%;
  border-radius: 5px;
  display: block;
  background: #1976d2;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
