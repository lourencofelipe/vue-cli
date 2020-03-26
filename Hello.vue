<template>
    <div>
        <h1> {{ title }}</h1>
        <input v-model="title" >
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Hello VueJs'
    }
  }
}
</script>
