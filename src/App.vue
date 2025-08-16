<template>
  <div>
    <h1>Stats Grabber</h1>
    <button @click="testConnection">Test Backend Connection</button>
    
    <div v-if="loading">Loading...</div>
    <div v-if="error" style="color: red;">Error: {{ error }}</div>
    <div v-if="data">
      <h3>Backend Response:</h3>
      <pre>{{ JSON.stringify(data, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import { fetchData } from './services/api.js';

export default {
  data() {
    return {
      data: null,
      loading: false,
      error: null
    };
  },
  methods: {
    async testConnection() {
      this.loading = true;
      this.error = null;
      this.data = null;
      
      try {
        this.data = await fetchData();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>