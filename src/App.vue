<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="less">
#app {
  height: 100%;
  background: #f1f5f8;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .el-range-editor.el-input__inner {
    background:rgba(247,249,251,1);
    border-radius:10px;
    border: none;
    .el-range-separator {
      color:#DEDEDE;
    }
    .el-range-input {
      background:rgba(247,249,251,1);
      color:rgba(126,138,150,1);
    }
  }
  .el-table {
    overflow: visible;
  }
  .el-table__body-wrapper {
    overflow: visible;
  }
  .el-table__body-wrapper {
    table {
      tbody {
        tr {
          .cell {
            overflow: visible;
          }
        }
      }
    }
  }
  .v-dialog {
    border-radius: 10px;
    .v-card {
      padding-bottom: 20px;
      .v-card__title {
        font-size: 14px;
        font-family: PingFangSC-;
        font-weight: bold;
        color: rgba(64, 77, 85, 1);
        line-height: 20px;
      }
      .v-subheader {
        align-items: flex-end;
        color: #404d55;
      }
      .v-btn--depressed {
        border-radius: 5px;
      }
      .v-text-field {
        padding: 0;
        transform-origin: left;
        .v-input__control {
          .v-input__slot {
            height: 54px;
            border: 1px solid rgba(221, 221, 221, 1);
            border-radius: 5px;
              &::before {
                border-color: rgba(255, 0255, 255, 0);
              }
            .v-select__slot {
              height: 54px;
              &::before {
                border-color: rgba(255, 0255, 255, 0);
              }
              .v-input__append-inner {
                margin-top: 16px;
              }
              .v-select__selections {
                padding: 0px 15px 0px 15px;
              }
            }
          }
          .v-text-field__details {
            padding: 0px 12px 0px 12px;
          }
        }
      }

    }
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
