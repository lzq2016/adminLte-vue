<template>
  <div class="wrap">
     <Row>
        <Col span="5" style="margin-right: 10px;">
        	<Select v-model="year" style="width:200px" @on-change="optionChange">
        		<Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    		</Select>
        </Col>
        <Col span="3">
        	<Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;">搜索</Button>
        </Col>
    </Row>
    <Row style="margin-top: 20px;">
    	<Col span="24">
    		<Table stripe :columns="columns1" :data="data1"></Table>
        </Col>

    </Row>

  </div>
</template>

<script>
var serviceData = require("../../lib/service.json");
export default {
  name: 'advanced-elements',
  data () {
  	return {
  		yearList: [],
        year: '2017',
        columns1: [],
        data1: []
  	}
  },
  beforeMount () {
    var self = this;
    this.yearList = serviceData.yearList;
    this.columns1 = serviceData.columns1;
    this.data1 = serviceData.data1;
  },
  methods: {
    optionChange: function(val) {
        
    },
    getTableData:function(){}
  }
}
</script>

<style>
.wrap{
	background-color: #fff;
	padding: 20px;
}
</style>
