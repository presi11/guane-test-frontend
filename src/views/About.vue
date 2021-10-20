<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CardCharacter/>
  </div>
</template>

<script>

import CardCharacter from '@/components/CardCharacter'

export default {
  name: 'about',
  components: {
    CardCharacter
  }
}

</script>