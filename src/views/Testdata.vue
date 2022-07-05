<template>
  <div class="container">
    <table class="table table-hover" id="myTable">
      <thead>
        <tr>
          <th>Room Name</th>
          <th>Building</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in roomsData" :key="room.id">
          <td>{{ room.id }}</td>
          <td>{{ room.bldg }}</td>
          <td>
            <a
              href="#"
              data-toggle="modal"
              data-target="#exampleModal"
              @click="editModal(room)"
            >
              <i class="fa fa-edit"></i>
            </a>
            <a href="#" @click="deleteRoom(room.id)">
              <i class="fa fa-trash text-red"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roomsData: null,
    };
  },
  methods: {
    myTable() {
      $(document).ready(function () {
        $("#myTable").DataTable();
      });
    },

    getRoomsDataTable() {
      axios
        .get("http://localhost:8080/grpacks")
        .then((res) => {
          this.roomsData = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
