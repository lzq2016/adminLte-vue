<template>
    <div>
        <div class="header">
          <span class="header1">项目管理/</span>
          <span class="header2">共享资源中心</span>
        </div>
          <div class="wrap">
             <Row>
                <Col span="24">
                	<Input v-model="projectName" placeholder="项目名称" class="inputStyle1"></Input>
                    <Input v-model="type" placeholder="型号" class="inputStyle2"></Input>
                    <Input v-model="materia" placeholder="物料" class="inputStyle1"></Input>
                    <label>日期：</label>
                    <DatePicker type="date" v-model="dateStart" placeholder="选择日期" class="dataPicker"></DatePicker>
                    <label>至</label>
                    <DatePicker type="date" v-model="dateEnd" placeholder="选择日期" class="inputStyle2"</DatePicker>
                    <Select v-model="status" class="select">
                        <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <Button type="primary" class="button" @click="search">搜索</Button>
                </Col>
            </Row>
            <!-- <Row style="margin-top: 20px;" type="flex" justify="space-between" class="code-row-bg">
                <Col span="6" v-for="item in card" style="margin-bottom: 20px;">
                    <div class="Vuecard" style="margin-right: 15px;">
                        <p slot="title" v-bind:class="{ 'green': item.green, 'purse': !item.green }"><span style="width: 200px; ">项目名称：{{item.projectName}}</span></p>
                        <div style="line-height: 25px;font-size: 14px;padding-left: 15px;padding-top: 15px;padding-bottom: 15px;line-height: 24px;">
                            <p style="color: #999999;">立项时间：{{item.startTime}}</p>
                            <p style="color: #999999;">转批量时间：{{item.pachTime}}</p>
                            <div style="color: #999999;">
                            <span>关键物料：{{item.materia}}</span>
                            <img src="../../assets/add.png" style="float: right;cursor: pointer;margin-top: 5px;margin-right: 10px;" @click="add">
                            </div>
                            <div style="color: #999999;">
                            <span>适用型号：{{item.type}}</span>
                            <img src="../../assets/add.png" style="float: right;cursor: pointer;margin-top: 5px;margin-right: 10px;" @click="add">
                            </div>
                            <p style="color: #999999;">负责人：{{item.person}}</p>
                            <p style="color: #999999;">项目分类：{{item.catgory}}</p>
                        </div>
                    </div>
                </Col>
            </Row> -->
            <div class="cardWrap">
                <div class="Vuecard" v-for="item in card">
                        <p slot="title" v-bind:class="{ 'green': item.green, 'purse': !item.green }"><span class="w200">项目名称：{{item.projectName}}</span></p>
                        <div class="cardInnerWrap" style="">
                            <p class="color99">立项时间：{{item.startTime}}</p>
                            <p class="color99">转批量时间：{{item.pachTime}}</p>
                            <div class="color99">
                            <span>关键物料：{{item.materia}}</span>
                            <img src="../../assets/add.png" class="addImg"  @click="add">
                            </div>
                            <div class="color99">
                            <span>适用型号：{{item.type}}</span>
                            <img src="../../assets/add.png" class="addImg" @click="add">
                            </div>
                            <p class="color99">负责人：{{item.person}}</p>
                            <div class="color99">
                                <span>项目分类：{{item.catgory}}</span>
                                <span class="output">导出</span>
                            </div>
                        </div>
                    </div>
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
        projectName:"",
        type:"",
        materia:"",
        dateStart:"",
        dateEnd:"",
  		statusList: [],
        status: '',
        card:[{
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        }, {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        }, {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":false
        }, {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        },
        {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        }, {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":false
        }, {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        }, {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        },
        {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        }, {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        }, {
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        }],
        tmp:{
            "projectName": "厦门市稳创阻容模块降",
            "startTime": "2017-06-21",
            "pachTime": "2017-06-21",
            "materia": "1808866",
            "type": "加湿器",
            "person": "张一峰",
            "catgory": "设计类",
            "green":true
        }
  	}
  },
  beforeMount () {
    var self = this;
    this.statusList = serviceData.statusList;
    // this.card = serviceData.card;

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
    },
    add:function(){
        this.card.push(this.tmp);
    }
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
  font-size: 14px;color: #969696;
}
.header2{
  font-size: 14px;color: #51D4D9;
}
.wrap{
	background-color: #fff;
	padding: 20px;
    overflow: hidden;
}
.Vuecard{
    margin-right: 15px;
    width: 23%;
    float: left;
    margin-bottom: 15px;
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
.inputStyle1{
    width: 150px;
    margin-right: 10px;
}
.inputStyle2{
    width: 110px;
    margin-right: 10px;
}
.dataPicker{
    width: 110px;
}
.select{
    width: 100px;
    margin-right: 10px;
}
.button{
    background-color: #01C0C8;
    border-color: #01C0C8;
    color: #fff;
}
.cardWrap{
    width: 100%;
    margin-top: 20px;
}
.w200{
    width: 200px;
}
.cardInnerWrap{
    line-height: 25px;
    font-size: 14px;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    line-height: 24px; 
}
.color99{
    color: #999999;
}
.addImg{
    float: right;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 10px;
}
.output{
    float: right;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 10px;
}
</style>
