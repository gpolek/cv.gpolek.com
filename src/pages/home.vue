<template>
  <cv></cv>
</template>

<script>
import Vue from 'vue';
import '../resumes/resumes';
export default Vue.component('resume', {
  name: 'app',
  mounted: () => {}
});
</script>

<style>
.page-inner{
  height: 100%;
  width: 100%;
}

@media screen {
    .page-wrapper {
        background: #CCCCCC;
    }

    .page {
      width: 21cm;
      height: auto;
    }
}

.page-wrapper {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  width: 100%;
}

.page {
  background: white;
  position: relative;
  margin: 0 auto;
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
</style>
