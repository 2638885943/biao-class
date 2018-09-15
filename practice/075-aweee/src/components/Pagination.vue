<template>
  <fieldset v-if="last_page" class="pagination">

    <span class="btn-group">
      <button
              :disabled="is_first_page"
              @click="change(1)">First
      </button>
      <button
              :disabled="is_first_page"
              @click="prev()">Prev
      </button>
    </span>

    &nbsp;

    <span class="btn-group">
                <button v-if="Math.abs(page - current_page) <= half_limit || half_limit < 1"
                        @click="change(page)"
                        :class="{active: current_page == page}"
                        v-for="(page,index) in last_page"
                        :key="index"
                >{{page}}
                </button>
              </span>
    &nbsp;

    <span class="btn-group">
      <button
              :disabled="is_last_page"
              @click="next()">Next
      </button>

      <button
              :disabled="is_last_page"
              @click="change(last_page)">Last
      </button>
    </span>
  </fieldset>
</template>

<script>
  export default {
    props : {
      limit       : {
        default : 0,
      },
      totalCount  : {
        default : 0,
      },
      currentPage : {
        default : 1,
      },
      onChange    : {
        default () {
          // console.log(1);
        },
      },
    },

    mounted () {
    
      this.current_page = this.currentPage;
    },

    data () {
      return {
        current_page : 1,
      };
    },

    methods : {
      change (page) {
        if (this.onChange)
          this.onChange(page);
        this.$emit('pageChange', page);

        this.current_page = page;
      },
      next () {
        if (this.is_last_page)
          return;

        this.change(++this.current_page);
      },
      prev () {
        if (this.is_first_page)
          return;

        this.change(--this.current_page);
      },
    },

    computed : {
      half_limit () {
        return Math.floor(this.limit / 2);
      },
      is_first_page () {
        return this.current_page == 1;
      },
      is_last_page () {
        return this.current_page == this.last_page;
      },
      last_page () {
        return Math.ceil(this.totalCount / this.limit);
      },
    },

    watch : {
      currentPage (n) {
        this.current_page = n;
      },
    },
  };
</script>

<style scoped>
  button {
    font-size: 16px;
    -webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0;
  }

  .btn-group {
    margin-left: 2px;
    margin-right: 2px;
  }
</style>
