<template>
  <div>
      <div class="header">
          <span class="header1">项目管理/</span>
          <span class="header2">项目完成额</span>
        </div>
      <div class="wrap">
         <Row>
            <Col span="24">
            	<Select v-model="year" class="select" @on-change="optionChange">
            		<Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        		</Select>
            <Button type="primary" class="button" @click="search">搜索</Button>
            </Col>
        </Row>
        <Row  class="tableWrap">
        	<Col span="24">
        		<Table stripe :columns="columns1" :data="data1"></Table>
            </Col>
        </Row>
        <div class="pageWrap">
             <Page :total="totalList" :page-size="10" :current="10" @on-change="changePage" show-elevator></Page>
        </div>
      </div>
  </div>
</template>

<script>
var serviceData = require("../../lib/service.json");
  import Service from '../../service/service';

export default {
  name: 'advanced-elements',
  data () {
  	return {
  		yearList: [],
        year: '2017',
        columns1: [],
        data1: [],
        totalList:200
  	}
  },
  beforeMount () {
    var self = this;

    this.yearList = serviceData.yearList;
    this.columns1 = serviceData.columns1;
    this.data1 = serviceData.data1;

    Service.page.getSelection({})
      .then((res) => {
        if (res.data.code === 1) {
          this.yearList = res.data.response.yearList;
        }
    });
    Service.page.search(self.year,{})
      .then((res) => {
        if (res.data.code === 1) {
          this.data1 = res.data.response.data1;
          this.totalList = res.data.response.totalList;
        }
    });
  },
  methods: {
    optionChange: function(val) {
        this.year = val;
    },
    search:function(){
      var self = this;
      Service.page.search({year:self.year,pageNum:1},{})
      .then((res) => {
        if (res.data.code === 1) {
          this.data1 = res.data.response.data1;
          this.totalList = res.data.response.totalList;
        }
      });
    },
    changePage: function(pageNum) {
      var self = this;
        Service.page.search({year:self.year,pageNum:self.totalList},{})
        .then((res) => {
        if (res.data.code === 1) {
          this.data1 = res.data.response.data1;
          this.totalList = res.data.response.totalList;
        }
      });
    },
  }
}
</script>

<style scoped>
.header{
    height: 40px;
    background-color: #fff;
    text-align: right;
    margin-bottom: 20px;
    line-height: 40px;
    padding-right: 20px;
}
.header1{
  font-size: 14px;
  color: #969696;
}
.header2{
  font-size: 14px;
  color: #51D4D9;
}
.wrap{
	background-color: #fff;
	padding: 20px;
}
.select{
  width:200px;
  margin-right: 15px;
}
.button{
  background-color: #01C0C8;
  border-color: #01C0C8;
  color: #fff;
}
.tableWrap{
  margin-top: 20px;
}
.pageWrap{
  margin-top: 20px;
  text-align: center;
}
</style>
