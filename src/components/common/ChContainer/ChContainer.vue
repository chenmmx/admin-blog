<template>
  <div class="ch-container">
    <!-- Header -->
    <div class="ch-container-header">
      <div class="ch-container-header-left">
        <slot name="header-left"></slot>
      </div>
      <div class="ch-container-header-right">
        <slot name="header-right"></slot>
      </div>
    </div>
    <!-- Body -->
    <div class="ch-container-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChContainer'
}
</script>

<style lang="less">
.default {
  position: relative;
  // &::after {
  //   position: absolute;
  //   height: 1px;
  //   width: 1px;
  //   content: "|";
  //   color:  rgba(247, 249, 251, 1);
  //   background:  rgba(247, 249, 251, 1);
  //   right: 5px;
  //   top:5px;
  // }
  // background: red;
  & > .el-button {
    background: rgba(247, 249, 251, 1);
    border: none;
    border-radius: 10px;
    color: #7e8a96;
    min-width: 109px;
    position: relative;
    &::after {
      right: 0;
      position: absolute;
      content: "|";
      color: #dedede;
    }
    &:last-child::after {
      content: "";
    }
  }
}
.ch-container {
  width: 96%;
  padding: 35px 0 35px 0;
  margin: 46px auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 16px 5px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  .ch-container-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .ch-container-header-left {
      margin-left: 50px;
    }
    .ch-container-header-right {
      display: flex;
      margin-right: 50px;
    }
  }
  .ch-container-body {
    margin-top: 36px;
    width: 100%;
    .el-table {
      margin-bottom: 90px;
      thead {
        color: rgba(64, 77, 85, 1);
        tr {
          height: 55px;
        }
      }
      tbody {
        .el-table__row {
          height: 55px;
        }
      }
    }
    .el-pagination {
      display: flex;
      justify-content: flex-start;
      .el-pagination__total {
        margin-left: 50px;
        height: 40px;
        line-height: 40px;
      }
      .el-pagination__sizes {
        margin-right: 25%;
        height: 40px;
        line-height: 40px;
        .el-input__inner {
          height: 40px;
        }
      }
      .btn-prev {
        background-color: rgba(255, 255, 255, 1);
        height: 40px;
        min-width: 40px;
      }
      .el-pager {
        .number {
          min-width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
        }
      }
      .btn-next {
        background-color: rgba(255, 255, 255, 1);
        height: 40px;
        min-width: 40px;
      }
      .el-pagination__jump {
        height: 40px;
        line-height: 40px;
        color: rgba(64, 77, 85, 1);
        .el-pagination__editor {
          margin: 0 10px 0 10px;
          height: 40px;
          .el-input__inner {
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
