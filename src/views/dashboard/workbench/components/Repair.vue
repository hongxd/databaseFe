<template>
  <div class="flex flex-col justify-center text-right md:mx-16 mx-12">
    <span class="text-secondary"> 报修 </span>
    <span class="text-2xl">{{ repairCount }} / {{ repairTotalCount }}</span>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { getRepairList } from '/@/api/sys/repair';
  import { Status } from '/@/enums/statusEnum';

  const repairCount = ref(0);
  const repairTotalCount = ref(0);
  getRepairList().then((res) => {
    repairTotalCount.value = res.total;
  });
  getRepairList({ status: Status.repaired }).then((res) => {
    repairCount.value = res.total;
  });
</script>
