<template>
    <div>
        <div class="header">
          <span style="font-size: 14px;color: #969696;">项目管理/</span>
          <span style="font-size: 14px;color: #51D4D9;">项目点检</span>
        </div>
        <div class="wrap">
             <Row style="background-color: #01C0C8;height: 45px;">
                <Col span="12" style="margin-top: 7px;margin-left: 10px;">
                    <Select v-model="status" style="width: 120px;">
                        <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="11" style="margin-top: 7px;margin-right: 20px;" >
                    <Button type="primary" style="background-color: #01C0C8;border-color: #fff;color:#fff;margin-left: 10px;float: right;" @click="search">导出</Button>
                    <Button type="primary" style="background-color: #01C0C8;border-color: #fff;color:#fff;float: right;" @click="nextWeek">下一周 ></Button>
                    <Select v-model="week" style="width: 120px;margin-right: 10px;float: right;">
                        <Option v-for="item in weekList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <Button type="primary" style="background-color: #01C0C8;border-color: #fff;color:#fff;float: right;margin-right: 10px;" @click="preWeek">< 上一周</Button>
                     <label style="color: #fff;float: right;margin-top: 7px;margin-right: 10px;">当前周:</label>
                    
                    
                    
                </Col>
                <!-- <Col span="9" style="margin-top: 7px;">
                   
                </Col> -->
            </Row>
            <Row style="background-color: #fff;margin-top: 20px;">
                <Row style="background-color: #fff;position: relative;">
                    <img src="../../assets/open.png" style="position: absolute;left: -13px;top: 50%;margin-top: -13px;" @click="open" v-if="openStatus">
                    <img src="../../assets/close.png" style="position: absolute;left: -13px;top: 50%;margin-top: -13px;" @click="close" v-if="!openStatus">
                    <Col span="21" style="margin-top: 7px;margin-left: 10px;">
                        <Row>
                            <Col style="margin-top: 10px;margin-left: 10px;">
                                <span style="color:#C1C1C1;font-size: 14px;">项目名称:</span>
                                <span style="color: #404040;font-size: 14px;">W3D电装盒固定板结构优化</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col style="margin-top: 10px;margin-left: 10px;margin-bottom: 10px;">
                                <span style="color:#C1C1C1;font-size: 14px;">项目编号:</span>
                                <span style="color: #404040;font-size: 14px;">01010100</span>
                                <span style="color:#C1C1C1;font-size: 14px;">状态:</span>
                                <span style="color: #404040;font-size: 14px;">转批量</span>
                                <span style="color:#C1C1C1;font-size: 14px;">立项时间:</span>
                                <span style="color: #404040;font-size: 14px;">2017-09-01</span>
                                <span style="color:#C1C1C1;font-size: 14px;">计划实施时间:</span>
                                <span style="color: #404040;font-size: 14px;">2017-09-01</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="2" style="margin-top: 15px;margin-left: 10px;">
                         <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;" @click="">查看详情</Button>
                    </Col>
                </Row>
                <Row style="background-color: #fff;border-top: 1px solid #E6E6E6;" v-show="openStatus">
                    <Col span="2" style="margin-top: 100px;margin-top:125px; text-align: center;">
                        <span style="color:#14C5CC;font-size: 14px;">第23周</span>
                    </Col>
                    <Col span="10" style="border-left: 1px solid #E6E6E6;margin-top: 20px;margin-bottom: 20px;margin-right: 20px;height: 100%;position: relative;height: 235px;">
                        <img src="../../assets/yudi.png" style="position: absolute;top: 50%;left: 0;margin-top: -15px;margin-left: -11px;">
                        <div style="background-color: #F1F1F1;margin-left: 30px;height: 235px;">
                            <div style="padding-top: 15px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">已完成工作:</span>
                                <span style="font-size: 14px;color: #888888;">W3D电装盒固定板优化</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">正在进行的工作:</span>
                                <span style="font-size: 14px;color: #888888;">立式插座新品发布</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">预计生产效益时间:</span>
                                <span style="font-size: 14px;color: #888888;">2017-09-08</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">BOM发布时间:</span>
                                <span style="font-size: 14px;color: #888888;">2017-09-08</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">BOM编号(PLM):</span>
                                <span style="font-size: 14px;color: #888888;">BH234234-23</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;padding-bottom: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">切换进度点检:</span>
                                <span style="font-size: 14px;color: #888888;">2017-09-08</span>
                            </div>
                        </div>
                    </Col>
                    <Col span="11" style="margin-top: 20px;margin-bottom: 20px;">
                        <Table stripe :columns="columns7" :data="data6"></Table>
                    </Col> 
                </Row>
            </Row>
            <Row style="background-color: #fff;margin-top: 20px;">
                <Row style="background-color: #fff;position: relative;">
                    <img src="../../assets/open.png" style="position: absolute;left: -13px;top: 50%;margin-top: -13px;" @click="open" v-if="openStatus">
                    <img src="../../assets/close.png" style="position: absolute;left: -13px;top: 50%;margin-top: -13px;" @click="close" v-if="!openStatus">
                    <Col span="21" style="margin-top: 7px;margin-left: 10px;">
                        <Row>
                            <Col style="margin-top: 10px;margin-left: 10px;">
                                <span style="color:#C1C1C1;font-size: 14px;">项目名称:</span>
                                <span style="color: #404040;font-size: 14px;">W3D电装盒固定板结构优化</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col style="margin-top: 10px;margin-left: 10px;margin-bottom: 10px;">
                                <span style="color:#C1C1C1;font-size: 14px;">项目编号:</span>
                                <span style="color: #404040;font-size: 14px;">01010100</span>
                                <span style="color:#C1C1C1;font-size: 14px;">状态:</span>
                                <span style="color: #404040;font-size: 14px;">转批量</span>
                                <span style="color:#C1C1C1;font-size: 14px;">立项时间:</span>
                                <span style="color: #404040;font-size: 14px;">2017-09-01</span>
                                <span style="color:#C1C1C1;font-size: 14px;">计划实施时间:</span>
                                <span style="color: #404040;font-size: 14px;">2017-09-01</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="2" style="margin-top: 15px;margin-left: 10px;">
                         <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;" @click="">查看详情</Button>
                    </Col>
                </Row>
                <Row style="background-color: #fff;border-top: 1px solid #E6E6E6;" v-show="openStatus">
                    <Col span="2" style="margin-top: 100px;margin-top:125px; text-align: center;">
                        <span style="color:#14C5CC;font-size: 14px;">第23周</span>
                    </Col>
                    <Col span="10" style="border-left: 1px solid #E6E6E6;margin-top: 20px;margin-bottom: 20px;margin-right: 20px;height: 100%;position: relative;height: 235px;">
                        <img src="../../assets/yudi.png" style="position: absolute;top: 50%;left: 0;margin-top: -15px;margin-left: -11px;">
                        <div style="background-color: #F1F1F1;margin-left: 30px;height: 235px;">
                            <div style="padding-top: 15px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">已完成工作:</span>
                                <span style="font-size: 14px;color: #888888;">W3D电装盒固定板优化</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">正在进行的工作:</span>
                                <span style="font-size: 14px;color: #888888;">立式插座新品发布</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">预计生产效益时间:</span>
                                <span style="font-size: 14px;color: #888888;">2017-09-08</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">BOM发布时间:</span>
                                <span style="font-size: 14px;color: #888888;">2017-09-08</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">BOM编号(PLM):</span>
                                <span style="font-size: 14px;color: #888888;">BH234234-23</span>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;padding-bottom: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;">切换进度点检:</span>
                                <span style="font-size: 14px;color: #888888;">2017-09-08</span>
                            </div>
                        </div>
                    </Col>
                    <Col span="11" style="margin-top: 20px;margin-bottom: 20px;">
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
        openStatus:true,
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
    background-color: #EDF0F5;
}
</style>
