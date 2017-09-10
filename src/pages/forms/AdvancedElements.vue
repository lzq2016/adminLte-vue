<template>
  <div>
      <div class="header">
          <span style="font-size: 14px;color: #969696;">项目管理/</span>
          <span style="font-size: 14px;color: #51D4D9;">项目完成额</span>
        </div>
      <div class="wrap">
         <Row>
            <Col span="5" style="margin-right: 10px;">
            	<Select v-model="year" style="width:200px" @on-change="optionChange">
            		<Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        		</Select>
            </Col>
            <Col span="3">
            	<Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color: #fff;" @click="search">搜索</Button>
            </Col>
        </Row>
        <Row style="margin-top: 20px;">
        	<Col span="24">
        		<Table stripe :columns="columns1" :data="data1"></Table>
            </Col>
        </Row>
        <Row style="margin-top: 20px;" type="flex" justify="center" class="code-row-bg">
          <Col span="15">
             <Page :total="totalList" :page-size="10" :current="10" @on-change="changePage" show-elevator></Page>
          </Col>
        </Row>
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

<style>
.header{
    height: 40px;
    background-color: #fff;
    text-align: right;
    margin-bottom: 20px;
    line-height: 40px;
    padding-right: 20px;
}
.wrap{
	background-color: #fff;
	padding: 20px;
}
</style>
