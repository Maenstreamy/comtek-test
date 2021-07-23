<template>
  <v-app>
    <v-main>
      <v-navigation-drawer permanent clipped app style="z-index: 1">
        <v-list shaped>
          <v-list-item-group color="primary">
            <v-subheader>Пациент</v-subheader>
            <router-link
              :to="{ name: 'PacientList' }"
              class="link"
              style="margin-right: 50px; text-decoration: none;"
            >
              <v-list-item>Список</v-list-item></router-link
            >
            <router-link
              :to="{ name: 'CreatePacient' }"
              class="link"
              style="margin-right: 50px; text-decoration: none;"
            >
              <v-list-item>Создать</v-list-item></router-link
            >

            <v-subheader>Консультации</v-subheader>

            <router-link
              :to="{ name: 'CreateConsultation' }"
              class="link"
              style="margin-right: 50px; text-decoration: none;"
            >
              <v-list-item>Добавить</v-list-item></router-link
            >
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view style="padding: 30px" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped></style>
