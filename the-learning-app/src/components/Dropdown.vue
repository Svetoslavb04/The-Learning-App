<script>
import { ref } from "vue";

export default {
  props: {
    items: Object,
    selected: String,
    changeSelected: Function,
  },
  setup(props) {
    let open = ref(false);
    const items = ref(props.items);
    const selected = ref(props.selected);

    const toggleDropdown = () => (open.value = !open.value);

    const handleChangeSelected = (oldSelected, newSelected, _id) => {
      open.value = false;

      if (oldSelected === newSelected) {
        return;
      }

      selected.value = newSelected;

      props.changeSelected(newSelected);
    };

    return {
      open,
      items,
      selected,
      toggleDropdown,
      handleChangeSelected,
    };
  },
};
</script>

<template>
  <div>
    <div class="dropdown-toggler" @click="toggleDropdown">
      <p>{{ selected }}</p>
    </div>
    <div :class="open ? 'dropdown-list' : 'dropdown-list-closed'">
      <p
        v-for="item in items"
        :key="item"
        @click="handleChangeSelected(selected, item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style>
.dropdown-toggler {
  cursor: pointer;
  border: 1px solid #1b262c;
  padding: 10px;
}

.dropdown-list {
  position: fixed;
  background-color: #1b262c;
  color: #bbe1fa;
  z-index: 1;
}

.dropdown-list p {
  cursor: pointer;
  padding: 10px;
}

.dropdown-list p:hover {
  background-color: #0f4c75;
}

.dropdown-list-closed {
  display: none;
}
</style>
