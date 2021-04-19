<template>
  <b-container>
    <!-- <b-nav tabs align="center">
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Link with a long name </b-nav-item>
    </b-nav> -->
    <b-card no-body text-variant="primary">
    <b-card-header header-tag="nav">
      <b-nav card-header tabs align="center">
        <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
        <b-nav-item to="/" exact exact-active-class="active">Register</b-nav-item>
        <b-nav-item to="/details" exact exact-active-class="active">UserDetails</b-nav-item>
        <b-nav-item to="/education" exact exact-active-class="active">UserEducation</b-nav-item>
        <b-nav-item to="/logout" exact exact-active-class="active">Logout</b-nav-item>
      </b-nav>
    </b-card-header>

    <!-- <b-card-body>
      <router-view></router-view>
    </b-card-body> -->
  </b-card>
  </b-container>
</template>

