<template>
    <div>
        <div class="header">
          <span class="header1">项目管理/</span>
          <span class="header2">产品分析中心</span>
        </div>
        <div class="wrap">
            <Row>
                <Col span="3" class="mr10"> 
                    <Select v-model="status">
                        <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="5" class="mr15">
                    <Input v-model="projectName" placeholder="产品型号"></Input>
                </Col>
                <Col span="8">
                    <Button type="primary" class="button1" @click="search">搜索</Button>
                </Col> 
            </Row>
             <Row class="mr15">
                <Col span="24">
                    <span class="label1">产品型号：</span>
                    <span class="text1">AKA100003W00</span>
                    <span class="label1">降低额：</span>
                    <span class="text1">230.000</span>
                    <span class="label1">降低率：</span>
                    <span class="text1">20%</span>
                    <span class="label1">总效益：</span>
                    <span class="text2">￥20000</span>
                </Col>
            </Row>
            <Row class="row1">
                <Row class="mt20">
                    <Col span="3" class="col1">
                        <span class="text3">2017-08-10</span>
                    </Col>
                    <Col span="21">
                        <div class="div1">
                            <img src="../../assets/yudi.png" class="img1">
                            <div class="div2">
                                <span class="label1">项目名称：</span>
                                <span class="text4">诺德曼加湿器降价3.21% </span>
                                <span class="label1">立项时间：</span>
                                <span class="text4">2017-08-10</span>
                                <span class="label1">总转批量时间：</span>
                                <span class="text4">2017-08-10</span>
                                <span class="label1">核算产量：</span>
                                <span class="text4">1612</span>
                                <span class="label1">核算效益：</span>
                                <span class="text5">599</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row class="h20">
                    <Col span="3">
                    <span class="text3">&nbsp;&nbsp;</span>
                    </Col>
                    <Col span="21" style="border-left: 1px solid #F1F1F1;">
                    <span class="text3">&nbsp;&nbsp;</span>
                    </Col>
                </Row>
                <Row>
                    <Col span="3" class="col1">
                        <span class="text3">2017-08-10</span>
                    </Col>
                    <Col span="21">
                        <div class="div1">
                            <img src="../../assets/yudi.png" class="img1">
                            <div class="div2">
                                <span class="label1">项目名称：</span>
                                <span class="text4">诺德曼加湿器降价3.21% </span>
                                <span class="label1">立项时间：</span>
                                <span class="text4">2017-08-10</span>
                                <span class="label1">总转批量时间：</span>
                                <span class="text4">2017-08-10</span>
                                <span class="label1">核算产量：</span>
                                <span class="text4">1612</span>
                                <span class="label1">核算效益：</span>
                                <span class="text5">599</span>
                            </div>
                        </div>
                    </Col>
                </Row> 
                <Row class="h20">
                    <Col span="3">
                    <span class="text3">&nbsp;&nbsp;</span>
                    </Col>
                    <Col span="21" style="border-left: 1px solid #F1F1F1;">
                    <span class="text3">&nbsp;&nbsp;</span>
                    </Col>
                </Row>
                <Row>
                    <Col span="3" class="col1">
                        <span class="text3">2017-08-10</span>
                    </Col>
                    <Col span="21">
                        <div class="div1">
                            <img src="../../assets/yudi.png" class="img1">
                            <div class="div2">
                                <span class="label1">项目名称：</span>
                                <span class="text4">诺德曼加湿器降价3.21% </span>
                                <span class="label1">立项时间：</span>
                                <span class="text4">2017-08-10</span>
                                <span class="label1">总转批量时间：</span>
                                <span class="text4">2017-08-10</span>
                                <span class="label1">核算产量：</span>
                                <span class="text4">1612</span>
                                <span class="label1">核算效益：</span>
                                <span class="text5">599</span>
                            </div>
                        </div>
                    </Col>
                </Row> 
                <Row class="h20">
                    <Col span="3">
                    <span class="text3">&nbsp;&nbsp;</span>
                    </Col>
                    <Col span="21" style="border-left: 1px solid #F1F1F1;">
                    <span class="text3">&nbsp;&nbsp;</span>
                    </Col>
                </Row>     
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
        status:"",
        projectName:"",
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

    Service.page6.search({},{})
      .then((res) => {
        if (res.data.code === 1) {
          this.data6 = res.data.response.data6;
        }
    });
  },
  methods: {
    search: function() {
        var self = this;
        Service.page6.search({
            status:self.status,
            projectName:self.projectName
        },{})
      .then((res) => {
        if (res.data.code === 1) {
          this.data6 = res.data.response.data6;
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
    margin-left: 20px;
    margin-right: 20px;
}
.mr10{
    margin-right: 10px;
}
.mr15{
    margin-right: 15px;
}
.button1{
    background-color: #01C0C8;
    border-color: #01C0C8;
    color:#fff;
    width: 79px;
}
.label1{
    font-size: 14px;
    color: #C7C7C7;
}
.text1{
    font-size: 18px;
    font-weight: bold;
    color: #11C3C9;
    margin-right: 15px;
}
.text2{
    font-size: 18px;
    font-weight: bold;
    color: #11C3C9;
}
.row1{
    margin-top: 10px;
    border-top: 1px solid #F1F1F1;
}
.mt20{
    margin-top: 20px;
}
.col1{
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.text3{
    font-size: 14px;
    color: #C9C9C9;
}
.div1{
    border-left: 1px solid #F1F1F1;
    position: relative;
}
.img1{
    position: absolute;
    top: 50%;
    left: 0;
    margin-left: -11px;
    margin-top: -15px;
}
.div2{
    background-color: #F7F7F7;
    margin-left: 25px;
    height: 60px;
    line-height: 60px;
    padding-left: 10px;
}
.text4{
    font-size: 14px;
    color: #11C3C9;
    margin-right: 10px;
}
.text5{
    font-size: 14px;
    color: #11C3C9;
}
.h20{
    height: 20px;
}
</style>
