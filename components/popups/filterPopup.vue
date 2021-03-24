<template>
  <div class="popup-bg">
    <div class="popup-wizard">
      <div class="popup-wizard-content">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="close-button"
          @click="close()"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5046 8.19899L16.3769 3.49921C17.2077 2.69781 17.2077 1.40245 16.3769 0.601051C15.5461 -0.20035 14.2031 -0.20035 13.3723 0.601051L8.5 5.30083L3.62768 0.601051C2.79686 -0.20035 1.45394 -0.20035 0.623117 0.601051C-0.207706 1.40245 -0.207706 2.69781 0.623117 3.49921L5.49544 8.19899L0.623117 12.8988C-0.207706 13.7002 -0.207706 14.9955 0.623117 15.7969C1.03747 16.1966 1.58143 16.3975 2.1254 16.3975C2.66936 16.3975 3.21333 16.1966 3.62768 15.7969L8.5 11.0972L13.3723 15.7969C13.7867 16.1966 14.3306 16.3975 14.8746 16.3975C15.4186 16.3975 15.9625 16.1966 16.3769 15.7969C17.2077 14.9955 17.2077 13.7002 16.3769 12.8988L11.5046 8.19899Z"
            fill="#3C3C3C"
          />
        </svg>

        <h2 class="small-top-left-header">All filters</h2>

        <div class="popup-horizontal-spacer top-spacer"></div>

        <div class="content-wrapper">

          <div v-for="filter in this.$store.state.wizard.filters" :key="filter" :class="'switch-wrapper'">
            <label class="switch">
              <input
                type="checkbox"
                :id="filter"
                :name="filter"
                checked
                class="filters-input"
              />
              <span class="slider round"></span>
            </label>
            <p>{{ filter }}</p>
          </div>
        </div>

        <div class="popup-horizontal-spacer top-spacer"></div>

        <div class="button-row">
          <button
            class="ms-button-wide ms-outlined-button meal-button txt-center"
            @click="resetFilters()"
          >Clean all</button>
          <button
            class="ms-button-wide ms-filled-button meal-button less-padding"
            @click="save()"
          >Show all results</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filterId'],
  data() {
    return {
      filters: null,
    }
  },
  mounted() {
    // assign the filters
    this.loadFilterStates()
  },
  methods: {
    close() {
      $nuxt.$emit('toogle-filter-popup', false)
    },
    save() {
      let storeCommitName
      // save the options
      switch (this.filterId) {
        case 'meals':
          storeCommitName = 'filters/setMealFilters'
          break
        case 'snacks':
          storeCommitName = 'filters/setSnackFilters'
          break
        case 'breakfast':
          storeCommitName = 'filters/setBreakfastFilters'
          break
        case 'sides':
          storeCommitName = 'filters/setDishesFilters'
          break
      }

      let setFilters = {}
      let filters = document.querySelectorAll('.filters-input')
      filters = Array.from(filters)
      filters.forEach((elm) => {
        const id = elm.id.toLowerCase()
        setFilters[id] = {
          state: elm.checked,
          key: id,
        }
      })

      this.$store.commit(storeCommitName, setFilters)
      $nuxt.$emit('refresh-meals-filtered')
      $nuxt.$emit('refresh-sidedishes-filtered')
      this.close()
    },
    loadFilterStates() {
      let filtersData

      switch (this.filterId) {
        case 'meals':
          filtersData = this.$store.state.filters.mealFilters
          break

        case 'sides':
          filtersData = this.$store.state.filters.sideDishesFilters
          break

        case 'snacks':
          filtersData = this.$store.state.filters.snackFilters
          break

        case 'breakfast':
          filtersData = this.$store.state.filters.breakfastFilters
          break
      }

      let filters = document.querySelectorAll('.filters-input')

      filters.forEach((elm) => {
        if (typeof filtersData[elm.id.toLowerCase()] !== 'undefined') {
          elm.checked = filtersData[elm.id.toLowerCase()].state
        }
      })
    },
    resetFilters() {
      let filters = document.querySelectorAll('.filters-input')
      filters.forEach((elm) => {
        elm.checked = true
      })
    }
  },
}
</script>

<style scoped>
.product-img {
  max-height: 280px;
  width: 535px;
  object-fit: cover;
}

.close-button {
  right: 40px !important;
}

.meal-name {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.9856px;
  color: #3c3c3c;
}

.grey-tag-box {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #f6f9fc;
  border-radius: 2px;
  margin-top: 28px;
}

.meal-button {
  width: 225px;
  margin-top: 24px;
  text-align: center;
}

.txt-center {
  text-align: center;
}

h2 {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 54px;
  max-width: 516px;
  color: #3c3c3c;
  margin-top: 0;
}

.little-header {
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #3c3c3c;
  margin-bottom: 4px;
  text-align: center;
}

.little-header strong {
  text-align: center;
}

.small-header {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.2px;
  color: #3c3c3c;
}

.button-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}

.button-row {
  margin-top: 8px;
}

.small-top-left-header {
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.5376px;
  text-transform: uppercase;
  color: #3c3c3c;

  position: absolute;
  left: 40px;
  top: 20px;
  margin-bottom: 0px;
}

.popup-horizontal-spacer {
  width: 100%;
  height: 2px;
  opacity: 0.1;
  background-color: #293f94;
}

.top-spacer {
  margin-top: 16px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

input:checked + .slider {
  background-color: #293f94;
}

input:focus + .slider {
  box-shadow: 0 0 1px #293f94;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.switch-wrapper {
  width: 50%;
  margin-left: -4px;
  display: inline-block;
  margin-top: 16px;
}

.content-wrapper {
  width: 100%;
  margin-top: 36px;
}

.switch-wrapper p {
  width: max-content;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2966px;
  color: #3c3c3c;
  display: inline-block;
  margin-bottom: 0px;
}

.less-padding {
  padding-left: 36px;
  padding-right: 36px;
}
</style>
