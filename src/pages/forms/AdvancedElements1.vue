<template>
    <div>
        <div class="header">
          <span style="font-size: 14px;color: #969696;">项目管理/</span>
          <span style="font-size: 14px;color: #51D4D9;">共享资源中心</span>
        </div>
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
                <Col span="3">
                    <Select v-model="status">
                        <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="2">
                	<Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color: #fff;" @click="search">搜索</Button>
                </Col>
            </Row>
<!--             <Row style="margin-top: 20px;" type="flex" justify="space-between" class="code-row-bg" v-for="items in card">
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
            </Row> -->
            <Row style="margin-top: 20px;" type="flex" justify="space-between" class="code-row-bg" v-for="items in card">
                <Col span="6" v-for="item in items">
                    <div style="width: 220px;" class="Vuecard">
                        <p slot="title" v-bind:class="{ 'green': item.green, 'purse': !item.green }"><span style="width: 200px; ">项目名称：{{item.projectName}}</span></p>
                        <div style="line-height: 25px;font-size: 14px;padding-left: 15px;padding-top: 15px;padding-bottom: 15px;line-height: 24px;">
                            <p style="color: #999999;">立项时间：{{item.startTime}}</p>
                            <p style="color: #999999;">转批量时间：{{item.pachTime}}</p>
                            <div style="color: #999999;">
                            <span>关键物料：{{item.materia}}</span>
                            <img src="../../assets/add.png" style="float: right;cursor: pointer;margin-top: 5px;margin-right: 10px;">
                            </div>
                            <div style="color: #999999;">
                            <span>适用型号：{{item.type}}</span>
                            <img src="../../assets/add.png" style="float: right;cursor: pointer;margin-top: 5px;margin-right: 10px;">
                            </div>
                            <p style="color: #999999;">负责人：{{item.person}}</p>
                            <p style="color: #999999;">项目分类：{{item.catgory}}</p>
                        </div>
                    </div>
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
        projectName:"",
        type:"",
        materia:"",
        dateStart:"",
        dateEnd:"",
  		statusList: [],
        status: '',
        card:[]
  	}
  },
  beforeMount () {
    var self = this;
    this.statusList = serviceData.statusList;
    this.card = serviceData.card;

    Service.page1.search({},{})
      .then((res) => {
        if (res.data.code === 1) {
          this.card = res.data.response.card;
        }
    });
  },
  methods: {
    search: function() {
        var self = this;
        Service.page1.search({
            projectName:self.projectName,
            type:self.type,
            materia:self.materia,
            dateStart:self.dateStart,
            dateEnd:self.dateEnd,
            status:self.status
        },{})
        .then((res) => {
        if (res.data.code === 1) {
          this.card = res.data.response.card;
        }
    });
    }
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
.Vuecard:hover{
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee;
}
.green{
    background-color: #01C0C8;
    height: 45px;
    color: #fff;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
}
.purse{
    background-color: #365D8C;
    height: 45px;
    color: #fff;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
}
</style>
