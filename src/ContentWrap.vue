<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper" style="position: relative;">
    <!-- Content Header (Page header) -->
    <!-- <section class="content-header">
      <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section> -->

    <section class="content" style="padding-left: 0;padding-right: 0;padding-top: 0;padding-bottom: 70px;">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>

    <div style="background-color: #fff;position: absolute;bottom: 0;width: 100%;">
      <p style="font-size: 14px;text-align: center;line-height: 40px;">2017*copy</p>
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
export default {
  name: 'va-content-wrap',
  created () {

  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
