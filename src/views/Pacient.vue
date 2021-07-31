<template>
  <v-card class="mx-auto" style="margin-top: 40px" max-width="700" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1" style="white-space: normal"
          >{{
            $store.state.pacientList[this.$store.state.currentId - 1].lastName
          }}
          {{
            $store.state.pacientList[this.$store.state.currentId - 1].firstName
          }}
          {{
            $store.state.pacientList[this.$store.state.currentId - 1].middleName
          }}</v-list-item-title
        >
        <v-list-item-subtitle style="margin-top: 10px"
          >Пол:
          <b>{{
            $store.state.pacientList[this.$store.state.currentId - 1].gender
          }}</b>
        </v-list-item-subtitle>
        <v-list-item-subtitle style="margin-top: 10px"
          >Дата рождения:
          <b>{{
            $store.state.pacientList[this.$store.state.currentId - 1].birthDate
          }}</b>
        </v-list-item-subtitle>
        <v-list-item-subtitle style="margin-top: 10px"
          >СНИЛС:
          <b>{{
            $store.state.pacientList[this.$store.state.currentId - 1].snils
          }}</b>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card>
      <v-card-title>
        Консультации
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="pacientConsultations"
        @click="editItem()"
      >
        <template v-slot:top>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px">
            <v-card>
              <v-card-title>
                <span class="headline">Изменить данные</span>
              </v-card-title>

              <v-card-text>
                <v-form>
                  <v-container>
                    <v-row justify="space-around" class="mt-10 mb-10">
                      <v-date-picker
                        locale="ru"
                        v-model="editedItem.consultationDate"
                      ></v-date-picker>
                      <v-time-picker
                        v-model="editedItem.consultationTime"
                        scrollable
                        min="8:00"
                        max="20:00"
                        format="24hr"
                      ></v-time-picker>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="save"
                  >Сохранить</v-btn
                >
                <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      currentId: "",
      editedIndex: -1,
      editedItem: {
        consultationDate: "",
        consultationTime: "",
      },
      defaultItem: {
        consultationDate: "",
        consultationTime: "",
      },
      headers: [
        {
          text: "Дата",
          align: "center",
          sortable: true,
          value: "consultationDate",
        },
        { text: "Время", value: "consultationTime" },
        { text: "", value: "actions", sortable: false },
      ],
      pacientConsultations: [],
    };
  },
  mounted() {
    // Фильтрация массива консультаций по id текущего пациента
    this.pacientConsultations = this.$store.state.consultationList.filter(
      (item) => item.pacientId === this.$store.state.currentId
    );
  },
  methods: {
    editItem(item) {
      // Редактирование консультаций пациента
      this.editedIndex = this.pacientConsultations.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      // Удаление консультаций пациента
      const index = this.$store.state.consultationList.indexOf(item);
      confirm("Удалить консультацию?") &&
        this.$store.state.consultationList.splice(index, 1) &&
        this.pacientConsultations.splice(index, 1);
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
          this.pacientConsultations[this.editedIndex],
          this.editedItem
        );
      } else {
        this.pacientConsultations.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
