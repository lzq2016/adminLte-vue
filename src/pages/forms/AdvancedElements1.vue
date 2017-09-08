<template>
  <div class="wrap">
     <Row>
        <Col span="4">
        	<Input v-model="projectName" placeholder="项目名称" style="width: 150px"></Input>
        </Col>
        <Col span="3">
            <Input v-model="type" placeholder="型号" style="width: 110px"></Input>
        </Col>
        <Col span="4">
            <Input v-model="materia" placeholder="物料" style="width: 150px"></Input>
        </Col>
        <Col span="7">
            <label>日期：</label>
            <DatePicker type="date" v-model="dateStart" placeholder="选择日期" style="width: 110px"></DatePicker>
            <label>至</label>
            <DatePicker type="date" v-model="dateEnd" placeholder="选择日期" style="width: 110px"></DatePicker>
        </Col>
        <Col span="4">
            <Select v-model="status">
                <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
        <Col span="2">
        	<Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;" @click="search">搜索</Button>
        </Col>
    </Row>
    <Row style="margin-top: 20px;" type="flex" justify="space-between" class="code-row-bg" v-for="items in card">
    	<Col span="6" v-for="item in items">
    		<Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">项目名称：{{item.projectName}}</p>
            <div style="line-height: 25px;">
                <p style="color: #999999;">立项时间：{{item.startTime}}</p>
                <p style="color: #999999;">转批量时间：{{item.pachTime}}</p>
                <div style="color: #999999;">
                <span>关键物料：{{item.materia}}</span>
                <img src="../../assets/add.png" style="float: right;cursor: pointer;margin-top: 3px;">
                </div>
                <div style="color: #999999;">
                <span>适用型号：{{item.type}}</span>
                <img src="../../assets/add.png" style="float: right;cursor: pointer;margin-top: 3px;">
                </div>
                <p style="color: #999999;">负责人：{{item.person}}</p>
                <p style="color: #999999;">项目分类：{{item.catgory}}</p>
            </div>
        </Card>
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
        projectName:"",
        type:"",
        materia:"",
        dateStart:"",
        dateEnd:"",
  		statusList: [],
        status: '进行中',
        card:[]
  	}
  },
  beforeMount () {
    var self = this;
    this.statusList = serviceData.statusList;
    this.card = serviceData.card;
  },
  methods: {
    search: function(val) {
        
    }
  }
}
</script>

<style>
.wrap{
	background-color: #fff;
	padding: 20px;
}
</style>
