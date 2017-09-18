<template>
    <div>
        <div class="header">
          <span style="font-size: 14px;color: #969696;">项目管理/</span>
          <span style="font-size: 14px;color: #51D4D9;">项目点检</span>
        </div>
        <div class="wrap">
             <Row style="background-color: #01C0C8;height: 45px;">
                <Col span="12" style="margin-left: 10px;line-height: 45px;">
                    <span style="font-size: 18px;color: #fff;">项目名称：W3D电装盒固定板结构优化</span>
                    <span style="font-size: 18px;color: #fff;margin-left: 30px;">关键物料：WL938292</span>
                </Col>
            </Row>
            <Row style="background-color: #fff;">
                <Col span="24" style="margin-left: 10px;line-height: 45px;">
                    <span style="font-size: 14px;color:#aaaaaa; ">项目编号：</span>
                    <span style="margin-right: 30px;font-size: 14px;">0100167492</span>
                    <span style="font-size: 14px;color:#aaaaaa; ">状态：</span>
                    <span style="margin-right: 30px;font-size: 14px;">转批量</span>
                    <span style="font-size: 14px;color:#aaaaaa; ">立项时间：</span>
                    <span style="margin-right: 30px;font-size: 14px;">2017-05-28 15:11:23</span>
                    <span style="font-size: 14px;color:#aaaaaa; ">计划实施时间：</span>
                    <span style="margin-right: 30px;font-size: 14px;">2017-05-28 15:11:23</span>
                </Col>
            </Row>
            <Row style="background-color: #fff;border-top: 1px solid #E6E6E6;" >
                    <Col span="2" style="margin-top: 100px;margin-top:55px; text-align: center;">
                        <span style="color:#14C5CC;font-size: 14px;">第23周</span>
                    </Col>
                    <Col span="10" style="border-left: 1px solid #E6E6E6;margin-top: 20px;margin-bottom: 20px;height: 100%;position: relative;height: 430px;">
                        <img src="../../assets/yudi.png" style="position: absolute;top: 20%;left: 0;margin-top: -15px;margin-left: -11px;">
                        <div style="background-color: #F1F1F1;margin-left: 30px;height: 430px;">
                            <div style="padding-top: 15px;margin-left: 20px;">
                                <span style="font-size: 14px;color: #13C3CB;display: block;">已&nbsp;完&nbsp;成&nbsp;工&nbsp;作&nbsp;:</span>
                                <Input placeholder="请输入..." style="width: 295px;margin-top: 5px;"></Input>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;color: #13C3CB;display: block">正在进行的工作:</span>
                                <Input placeholder="请输入..." style="width: 300px;margin-top: 5px;"></Input>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;margin-top: 5px;">
                                <span style="font-size: 14px;vertical-align: middle">预计生产效益时间:</span>
                                <DatePicker type="date" placeholder="选择日期" style="width: 175px;vertical-align: middle;margin-left: 5px;"></DatePicker>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;margin-top: 5px;">
                                <span style="font-size: 14px;">BOM&nbsp;发&nbsp;布&nbsp;时&nbsp;间:</span>
                                <DatePicker type="date" placeholder="选择日期" style="width: 185px;vertical-align: middle;margin-left: 5px;"></DatePicker>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;vertical-align: middle">BOM编号(PLM):</span>
                                <Input placeholder="请输入..." style="width: 300px;margin-top: 5px;vertical-align: middle"></Input>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;">
                                <span style="font-size: 14px;">切换进度点检:</span>
                                <Input placeholder="请输入..." style="width: 300px;margin-top: 5px;vertical-align: middle"></Input>
                            </div>
                            <div style="padding-top: 5px;margin-left: 15px;padding-bottom: 15px;">
                                <span style="font-size: 14px;">注意事项:</span>
                                <Input placeholder="请输入..." style="width: 300px;margin-top: 5px;vertical-align: middle"></Input>
                            </div>
                            <div style="margin-top: 3px;text-align: center;">
                                <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;width: 80px;" @click="error">保存</Button>
                                <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;width: 80px;" @click="">提交</Button>    
                            </div>
                        </div>
                    </Col>
                    <Col span="11" style="margin-top: 20px;margin-bottom: 20px;background-color: #F1F1F1;height: 430px;">
                        <div class="tableWrap" style="margin-top: 20px;">
                            <div class="tableRow backgroundGrey" style="font-weight: bold;height: 40px;">
                                <span class="tableSpan" style="height: 40px;line-height: 40px;">计划内容</span>
                                <span class="tableSpan" style="height: 40px;line-height: 40px;">预计评审完成时间</span>
                                <span class="tableSpan" style="height: 40px;line-height: 40px;">实际完成时间</span>
                                <span class="tableSpan" style="height: 40px;line-height: 40px;">状态</span>
                            </div>
                            <div v-for="(item, index) in data6">
                                <div class="tableRow" :class="{ backgroundGrey: (index%2 != 0) }">
                                    <span class="tableSpan">{{item.code}}</span>
                                    <span class="tableSpan">{{item.name}}</span>
                                    <span class="tableSpan">
                                        <DatePicker type="date" placeholder="选择日期" style="width: 105px"></DatePicker>
                                    </span>
                                    <div class="tableSpan">
                                        <span v-if="item.status=='0'" style="display: inline-block;width: 40px;height: 25px;line-height: 25px;">已完成</span>
                                        <span v-if="item.status=='1'" style="display: inline-block;width: 40px;height: 25px;line-height: 25px;">已超期</span>
                                        <Select v-model="model1" v-if="item.status=='2'" style="width:103px">
                                            <Option v-for="item in statusList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>        
            </Row>
            <Row style="background-color: #fff;" >
                    <Col span="2" style="margin-top:36px; text-align: center;">
                        <span style="color:#ED5B46;font-size: 14px;">第23周</span>
                    </Col>
                    <Col span="10" style="border-left: 1px solid #E6E6E6;margin-top: 20px;margin-bottom: 20px;height: 100%;position: relative;height: 50px">
                        <img src="../../assets/yudi1.png" style="position: absolute;top: 50%;left: 0;margin-top: -15px;margin-left: -11px;">
                        <div style="margin-left: 30px;height: 50px;line-height: 50PX;color:#ED5B46;">
                            <span>未提交数据</span>
                        </div>
                    </Col>        
            </Row>
            <Row style="background-color: #fff;" >
                    <Col span="2" style="margin-top:36px; text-align: center;">
                        <span style="color:#14C5CC;font-size: 14px;">第23周</span>
                    </Col>
                    <Col span="10" style="border-left: 1px solid #E6E6E6;margin-top: 20px;margin-bottom: 20px;position: relative;height: 200px">
                        <img src="../../assets/yudi.png" style="position: absolute;top: 50%;left: 0;margin-top: -15px;margin-left: -11px;">
                        <div style="margin-left: 30px;height: 200px;background-color: #F1F1F1;padding-left:20px;padding-top: 20px;line-Height: 28px; ">
                            <div>
                                <span style="color: #14C5CC;">已完成工作：</span>
                                <span>W3D电装盒固定板结构优化</span>
                            </div>
                            <div>
                                <span style="color: #14C5CC;">正在进行的工作：</span>
                                <span>立式插座新品发布（第一阶段）</span>
                            </div>
                            <div>
                                <span style="color: #14C5CC;">预计产生效益时间：</span>
                                <span>2017-07-30</span>
                            </div>
                            <div>
                                <span style="color: #14C5CC;">BOM发布时间：</span>
                                <span>2017-05-23</span>
                            </div>
                            <div>
                                <span style="color: #14C5CC;">BOM编号（PLM）：</span>
                                <span>BH293849-302</span>
                            </div>
                            <div>
                                <span style="color: #14C5CC;">切换进度点检：</span>
                                <span>W3D电装盒固定板结构优化</span>
                            </div>
                        </div>
                    </Col>        
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
        model1:"",
        statusList1: [
            {
                value: '1',
                label: '进行中'
            },
            {
                value: '1',
                label: '已完成'
            },
            {
                value: '2',
                label: '已超期'
            },
        ],
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
        "code": "BM234230",
        "name": "2017-06-03",
        "type": "产品部",
        "status":0
        },{
        "code": "BM234230",
        "name": "2017-06-03",
        "type": "产品部",
        "status":1
        },{
        "code": "BM234230",
        "name": "2017-06-03",
        "type": "产品部",
        "status":2
        },{
        "code": "BM234230",
        "name": "2017-06-03",
        "type": "产品部",
        "status":0
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
.tableWrap{
    border-top: 3px solid #01C0C8;
    border-left: 1px solid #E9EAEC;
    border-right: 1px solid #E9EAEC;
    border-bottom: 1px solid #E9EAEC;
}
.tableRow{
    height: 48px;
    border-bottom: 1px solid #E9EAEC;
    text-align: center;
}
.tableSpan{
    width: 103px;
    display: inline-block;
    font-size: 12px;
    line-height: 48px;
}
.backgroundGrey{
    background-color: #F8F8F9;
}
</style>
