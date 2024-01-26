<script>
  export default {
    data() {
      return {
        selectedUser: undefined,
      }
    },
  }
</script>
<template>
  <div class="page">
    <header class="header">
      <p>Check Point</p>
    </header>
    <main class="accounts">
      <ul class="employees" v-if="!selectedUser">
        <li class="employee" @click="selectedUser = 'savio'">
          <img
            src="@/assets/usersIcons/fabio.jpeg"
            alt="employee"
            width="140"
            class="employeeIcon"
          />
        </li>
        <li class="employee" @click="selectedUser = 'savio'">
          <img
            src="@/assets/usersIcons/jacy.jpeg"
            alt="employee"
            width="140"
            class="employeeIcon"
          />
        </li>
      </ul>
      <div v-else>
        <div class="login-input">
          <li class="employee">
            <p>name</p>
          </li>
          <CellsPasswordInput />
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped lang="scss">
  div.page {
    height: 100vh;
    width: 100vw;
    background: radial-gradient($white-background-1, $white-background-2);
    display: grid;
    grid-template-rows: 20vh 60vh;
    justify-content: center;
    align-items: center;
  }
  div.page > header.header {
    font-weight: bold;
    text-align: center;
    padding: 1rem 0px;
    font-size: 20px;
  }
  main.accounts > ul.employees {
    height: fit-content;
    padding: 1rem;
    gap: 1rem;
    width: 80vw;
    display: grid;
    grid-auto-columns: min-content;
    grid-auto-flow: column;
    justify-content: center;
  }
  li.employee {
    display: flex;
    width: 8rem;
    height: 8rem;
    flex-direction: column;
    align-items: center;
    border-radius: 100%;
    background-color: $dark-background-1;
  }

  li.employee {
    overflow: hidden;
    border: 8px solid rgb(250, 250, 250);
  }

  div.login-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 4rem;
  }
</style>
