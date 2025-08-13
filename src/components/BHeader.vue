<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">
            Home (Week 5)
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/firebase-signin" class="nav-link" active-class="active">
            Firebase Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/firebase-register" class="nav-link" active-class="active">
            Firebase Register
          </router-link>
        </li>
        <!-- 添加 AddBook 链接 -->
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">
            Add Book
          </router-link>
        </li>
        <!-- 添加 Get Weather 链接 -->
        <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">
            Get Weather
          </router-link>
        </li>
        <!-- ✅ 添加 Get Book Count 链接 -->
        <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active">
            Get Book Count
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.nav-link.active {
  background-color: #0d6efd;
  color: white !important;
}
</style>
