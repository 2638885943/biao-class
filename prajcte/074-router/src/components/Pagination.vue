<template>
    <div class="pagination">
        <span class="btn-group">
            <button class="btn-small" :disabled="is_first_page"
                    @click="change(1)"
                    >
             First
            </button>
            <button class="btn-small" @click="prev()">
             Prev
            </button>
        </span>

        &nbsp;

       <span class="btn-group">
                <button v-if="Math.abs(page - current_page) <= half_limit"
                        @click="change(page)"
                        :class="{active: current_page == page}"
                        v-for="(page,index) in last_page" :key="index"
                        class="btn-small">{{page}}
                </button>
              </span>
    
        &nbsp;

       <span class="btn-group">
            <button class="btn-small" @click="next">
             Next
            </button> 

            <button class="btn-small" :disabled="is_last_page"
                    @click="change(last_page)"
                    >
            Last
            </button>   
           
        </span>    
    
    
    
    
    </div>
        
        
           
</template>
<script>
export default {
  props: {
    limit: {
      default: 0
    },
    totalCount: {
      default: 0
    },
    onChange: {
      default() {
        console.log(1);
      },
    },
  },

  data() {
    return {
      current_page: 1
    };
  },

  methods: {
    next() {
      if(this.is_last_page)
      return
      this.change(++this.current_page)
    },
    prev(){
        if(this.is_first_page)
        return
        this.change(--this.current_page)
    },
    change(page) {
      if (this.onChange) 
      this.onChange(page);

      this.current_page = page;
      
    }
  },

  computed: {
    is_last_page() {
      return this.current_page == this.last_page;
    },
    is_first_page() {
      return this.current_page == 1;
    },

    half_limit() {
      return Math.floor(this.limit / 2);
    },
    last_page() {
      return Math.ceil(this.totalCount / this.limit);
    }
  }
};
</script>
<style>
</style>

