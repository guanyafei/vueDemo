<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>安迅物流商家工作台</h2>
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
      </el-col>
    </el-row>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      version: "1.0.0",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
</style>

