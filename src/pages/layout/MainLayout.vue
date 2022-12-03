<template>
<div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
  <!-- Header -->
  <Header/>
  <!-- ./Header -->

  <!-- Sidebar -->
    <SideBar/>
  <!-- ./Sidebar -->
  <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
    <router-view/>
  </div>
</div>
</template>
<script>
import SideBar from './SideBar'
import Header from "./Header";
export default {
  components: {Header, SideBar},

}
</script>

<style>
/* Custom style */
.header-right {
  width: calc(100% - 3.5rem);
}
.sidebar:hover {
  width: 16rem;
}
@media only screen and (min-width: 768px) {
  .header-right {
    width: calc(100% - 16rem);
  }
}
</style>


