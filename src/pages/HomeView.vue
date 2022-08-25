<template>
  <div>
    <p><router-link :to="{ name: 'DashboardLayout' }">DashboardLayout</router-link></p>
    <p><router-link :to="{ name: 'DASHBOARD' }">DASHBOARD</router-link></p>
    <p><router-link :to="{ name: 'USERPROFILE' }">USERPROFILE</router-link></p>
    <p><router-link :to="{ name: 'TABLELIST' }">TABLELIST</router-link></p>
    <p><router-link :to="{ name: 'TYPOGRAPHY' }">TYPOGRAPHY</router-link></p>
    <p><router-link :to="{ name: 'ICONS' }">ICONS</router-link></p>
    <p><router-link :to="{ name: 'MAPS' }">MAPS</router-link></p>
  </div>
</template>

<script>
export default {
  name: "HOMEVIEW",
};
</script>

<style></style>