<template>
  <div class="body_background">
    <form class="login_form_container">
      <div class="login_input_container">
        <label for="username">Email</label>
        <input
          name="username"
          type="text"
          v-model="username"
          placeholder="E-mail"
        />
        <label for="password">Password</label>
        <input
          name="password"
          type="text"
          v-model="password"
          placeholder="password"
        />
        <button class="submit_btn">Log In</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style>
.login_form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 400px;
}
.login_input_container {
  display: flex;
  width: 60%;
  flex-direction: column;
}
.submit_btn {
  margin-top: 20px;
  border: none;
  height: 30px;
  border-radius: 5px;
}
</style>
