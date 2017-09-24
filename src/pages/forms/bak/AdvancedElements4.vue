<template>
    <div>
        <div class="header">
          <span class="header1">项目管理/</span>
          <span class="header2">项目点检</span>
        </div>
        <div class="wrap">
             <Row class="titleWrap">
                <Col span="12" class="titleWrapCol">
                    <Select v-model="status" class="w120">
                        <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="11" class="titleWrapCol">
                    <Button type="primary" class="titleButton ml10" @click="search">导出</Button>
                    <Button type="primary" class="titleButton" @click="nextWeek">下一周 ></Button>
                    <Select v-model="week" class="titleSelect">
                        <Option v-for="item in weekList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <Button type="primary" class="titleButton mr10" @click="preWeek">< 上一周</Button>
                     <label class="titleLabel">当前周:</label>
                    
                    
                    
                </Col>
                <!-- <Col span="9" style="margin-top: 7px;">
                   
                </Col> -->
            </Row>
            <Row  class="contentWrap">
                <Row class="contentRow1">
                    <img src="../../assets/open.png" class="imgStyle1" @click="close" v-if="!openStatus">
                    <img src="../../assets/close.png" class="imgStyle1" @click="open" v-if="openStatus">
                    <Col span="21" class="col1">
                        <Row>
                            <Col class="col2">
                                <span class="proName">项目名称:</span>
                                <span class="proContent">W3D电装盒固定板结构优化</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col class="col3">
                                <span class="proName">项目编号:</span>
                                <span class="proContent">01010100</span>
                                <span class="proName">状态:</span>
                                <span class="proContent">转批量</span>
                                <span class="proName">立项时间:</span>
                                <span class="proContent">2017-09-01</span>
                                <span class="proName">计划实施时间:</span>
                                <span class="proContent">2017-09-01</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="2" class="col4">
                         <Button type="primary" class="button1" style="" @click="">查看详情</Button>
                    </Col>
                </Row>
                <Row class="row2" v-show="openStatus">
                    <Col span="2" class="col5">
                        <span class="zhou">第23周</span>
                    </Col>
                    <Col span="10" class="col6">
                        <img src="../../assets/yudi.png" class="img2">
                        <div class="div1">
                            <div class="div2">
                                <span class="label1">已完成工作:</span>
                                <span class="text1">W3D电装盒固定板优化</span>
                            </div>
                            <div class="div3">
                                <span class="label1">正在进行的工作:</span>
                                <span class="text1">立式插座新品发布</span>
                            </div>
                            <div class="div3">
                                <span class="label1">预计生产效益时间:</span>
                                <span class="text1">2017-09-08</span>
                            </div>
                            <div class="div3">
                                <span class="label1">BOM发布时间:</span>
                                <span class="text1">2017-09-08</span>
                            </div>
                            <div class="div3">
                                <span class="label1">BOM编号(PLM):</span>
                                <span class="text1">BH234234-23</span>
                            </div>
                            <div class="div4">
                                <span class="label1">切换进度点检:</span>
                                <span class="text1">2017-09-08</span>
                            </div>
                        </div>
                    </Col>
                    <Col span="11" class="tableWrap">
                        <Table stripe :columns="columns7" :data="data6"></Table>
                    </Col> 
                </Row>
            </Row>
            <Row class="contentWrap">
                <Row style="background-color: #fff;position: relative;">
                    <img src="../../assets/open.png" class="imgStyle1" @click="close" v-if="!openStatus">
                    <img src="../../assets/close.png" class="imgStyle1" @click="open" v-if="openStatus">
                    <Col span="21" class="col1">
                        <Row>
                            <Col class="col2">
                                <span class="proName">项目名称:</span>
                                <span class="proContent">W3D电装盒固定板结构优化</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col class="col3">
                                <span class="proName">项目编号:</span>
                                <span class="proContent">01010100</span>
                                <span class="proName">状态:</span>
                                <span class="proContent">转批量</span>
                                <span class="proName">立项时间:</span>
                                <span class="proContent">2017-09-01</span>
                                <span class="proName">计划实施时间:</span>
                                <span class="proContent">2017-09-01</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="2" class="col4">
                         <Button type="primary" class="button1" @click="">查看详情</Button>
                    </Col>
                </Row>
                <Row class="row2" v-show="openStatus">
                    <Col span="2" class="col5">
                        <span class="zhou">第23周</span>
                    </Col>
                    <Col span="10" class="col6">
                        <img src="../../assets/yudi.png" class="img2">
                        <div class="div1">
                            <div class="div2">
                                <span class="label1">已完成工作:</span>
                                <span class="text1">W3D电装盒固定板优化</span>
                            </div>
                            <div class="div3">
                                <span class="label1">正在进行的工作:</span>
                                <span class="text1">立式插座新品发布</span>
                            </div>
                            <div class="div3">
                                <span class="label1">预计生产效益时间:</span>
                                <span class="text1">2017-09-08</span>
                            </div>
                            <div class="div3">
                                <span class="label1">BOM发布时间:</span>
                                <span class="text1">2017-09-08</span>
                            </div>
                            <div class="div3">
                                <span class="label1">BOM编号(PLM):</span>
                                <span class="text1">BH234234-23</span>
                            </div>
                            <div class="div4">
                                <span class="label1">切换进度点检:</span>
                                <span class="text1">2017-09-08</span>
                            </div>
                        </div>
                    </Col>
                    <Col span="11" class="tableWrap">
                        <Table stripe :columns="columns7" :data="data6"></Table>
                    </Col> 
                </Row>
            </Row>
        </div>
    </div>
  
</template>

<script>
var serviceData = require("../../lib/service.json");

export default {
  name: 'advanced-elements',
  data () {
  	return {
        openStatus:false,
        status:"",
        week:"",
        statusList:[],
        weekList:[{
        "value": 0,
        "label": "第23周"
    }, {
        "value": 1,
        "label": "第24周"
    }, {
        "value": 2,
        "label": "第25周"
    }],
        columns7: [
            {
                title: '计划内容',
                key: 'content',
                align:'center'
            },
            {
                title: '预计评审完成时间',
                key: 'predictTime',
                align:'center'
            },
            {
                title: '实际完成时间',
                key: 'realTime',
                align:'center'
            },
            {
                title: '状态',
                key: 'status',
                align:'center'
            }
        ],
        data6: [
        {
        "content": "BM234230",
        "predictTime": "2017-06-03",
        "realTime": "2017-06-03",
        "status": "产品部"
        },{
        "content": "BM234230",
        "predictTime": "2017-06-03",
        "realTime": "2017-06-03",
        "status": "产品部"
        },{
        "content": "BM234230",
        "predictTime": "2017-06-03",
        "realTime": "2017-06-03",
        "status": "产品部"
        },{
        "content": "BM234230",
        "predictTime": "2017-06-03",
        "realTime": "2017-06-03",
        "status": "产品部"
        }]
  	}
  },
  beforeMount () {
    var self = this;
    this.statusList = serviceData.statusList;
  },
  methods: {
    open: function() {
        console.log(12121212)
        this.openStatus = false;
    },
    close: function() {
        this.openStatus = true;
    },
    search: function() {
    },
    preWeek: function() {
        var self = this;
        this.weekList.forEach(function(index,item,arr){
            if(item.label == self.week)
            {
                self.week = arr[--index][label];
            }
        });
    },
    nextWeek: function() {
        var self = this;
        this.weekList.forEach(function(index,item,arr){
            if(item.label == self.week)
            {
                self.week = arr[++index][label];
            }
        });
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
.wrap{
    background-color: #EDF0F5;
}
.titleWrap{
    background-color: #01C0C8;
    height: 45px;
}
.titleWrapCol{
    margin-top: 7px;
    margin-left: 10px;
}
.mt20{
    margin-top: 20px;
}
.w120{
    width: 120px;
}
.titleButton{
    background-color: #01C0C8;
    border-color: #fff;
    color:#fff;
    float: right;
}
.ml10{
    margin-left: 10px;
}
.mr10{
    margin-right: 10px;
}
.titleSelect{
    width: 120px;
    margin-right: 10px;
    float: right;
}
.titleLabel{
    color: #fff;
    float: right;
    margin-top: 7px;
    margin-right: 10px;
}
.contentWrap{
    background-color: #fff;
    margin-top: 20px;
}
.contentRow1{
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #eee;
}
.imgStyle1{
    position: absolute;
    left: -13px;
    top: 50%;
    margin-top: -13px;
}
.col1{
    margin-top: 7px;
    margin-left: 10px;
}
.col2{
    margin-top: 10px;
    margin-left: 10px;
}
.proName{
    color:#C1C1C1;
    font-size: 14px;
}
.proContent{
    color: #404040;
    font-size: 14px;
}
.col3{
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
}
.col4{
    margin-top: 15px;
    margin-left: 10px;
}
.button1{
    background-color: #01C0C8;
    border-color: #01C0C8;
    color:#fff;
}
.row2{
    background-color: #fff;
    border-top: 1px solid #E6E6E6;
}
.col5{
    margin-top: 100px;
    margin-top:125px; 
    text-align: center;
}
.zhou{
    color:#14C5CC;
    font-size: 14px;
}
.col6{
    border-left: 1px solid #E6E6E6;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    height: 100%;
    position: relative;
    height: 235px;
}
.img2{
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -15px;
    margin-left: -11px;
}
.div1{
    background-color: #F1F1F1;
    margin-left: 30px;
    height: 235px;
}
.div2{
    padding-top: 15px;
    margin-left: 15px;
}
.label1{
    font-size: 14px;
    color: #13C3CB;
}
.text1{
    font-size: 14px;
    color: #888888;
}
.div3{
    padding-top: 5px;
    margin-left: 15px;
}
.div4{
    padding-top: 5px;
    margin-left: 15px;
    padding-bottom: 15px;
}
.tableWrap{
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
