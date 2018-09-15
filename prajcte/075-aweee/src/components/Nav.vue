<template>
      
               
      <div class="head">
        <div class="container row">
            <div class="nav1">
                <div class="col-lg-5  left">
                   <router-link to='/admin/category' class="nav1-item">
                       管理页面
                   </router-link>
                    <router-link to='search' class="nav1-item">
                       ITEM
                   </router-link> <router-link to='search' class="nav1-item">
                       ITEM
                   </router-link>
                   
                   
                </div>
                <router-link class="col-lg-3  logo" to="/" tag='div'>aweee
                      
                </router-link>
                
                      <router-link id="sousuo" to='search'>
                             <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-sousuo"></use>
                      </svg>
                      </router-link>
         
               
                <div class="col-lg-7  right">
                     
                  
                    <router-link to='search' class="nav1-item">
                       登录
                   </router-link> 
                   <router-link to='search' class="nav1-item">
                       退出
                   </router-link>
                </div>

            </div>
           
        </div>
    </div>
               
               
               
               
               
               
               
               
               

         
</template>

<script>
import "../../font_779410_v6q6yvfv46.js";
export default {};
</script>

<style>
#sousuo{
    font-size: 28px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: italic;
    position: absolute;
    top:5px;
    right: 420px;
}
</style>

