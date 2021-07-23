<template>
  <v-card>
    <v-card-title>
      Пациенты
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="$store.state.pacientList"
      :search="search"
      @click="editItem()"
    >
      <template v-slot:top>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Изменить данные</span>
            </v-card-title>

            <v-card-text>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.lastName"
                        label="Фамилия"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.firstName"
                        label="Имя"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.middleName"
                        label="Отчество"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        class="date-field"
                        type="date"
                        v-model="editedItem.birthDate"
                        label="Дата рождения"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.snils"
                        label="СНИЛС"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="select"
                        :items="gender"
                        label="Пол"
                        :rules="[(v) => !!v || 'Укажите пол']"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
              <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="openItem(item)">
          mdi-account
        </v-icon>
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      select: null,
      dialog: false,
      currentId: "",
      editedIndex: -1,
      editedItem: {
        lastName: "",
        firstName: "",
        middleName: "",
        birthDate: "",
        snils: "",
      },
      defaultItem: {
        lastName: "",
        firstName: "",
        middleName: "",
        birthDate: "",
        snils: "",
      },
      gender: ["Мужской", "Женский"],
      search: "",
      headers: [
        {
          text: "Фамилия",
          align: "center",
          sortable: true,
          value: "lastName",
        },
        { text: "Имя", value: "firstName" },
        { text: "Отчество", value: "middleName" },
        { text: "Дата рождения", value: "birthDate" },
        { text: "Пол", value: "gender" },
        { text: "СНИЛС", value: "snils" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    openItem(item) {
      // Передача текущего id и роут на страницу пациента с его id
      this.$store.state.currentId = item.id;
      this.$router.push({ path: `/pacient/${item.id}` });
    },

    editItem(item) {
      // Редактирование данных пациента
      this.editedIndex = this.$store.state.pacientList.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      // Удаление пациента
      const index = this.$store.state.pacientList.indexOf(item);
      confirm("Удалить пациента из таблицы?") &&
        this.$store.state.pacientList.splice(index, 1);
    },

    close() {
      // Закрытие окна с сохранением начальных данных
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      // Сохранение изменений
      if (this.editedIndex > -1) {
        Object.assign(
          this.$store.state.pacientList[this.editedIndex],
          this.editedItem
        );
      } else {
        this.$store.state.pacientList.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
