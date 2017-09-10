<template>
    <div>
        <div class="header">
          <span style="font-size: 14px;color: #969696;">项目管理/</span>
          <span style="font-size: 14px;color: #51D4D9;">产品分析中心</span>
        </div>
        <div class="wrap">
            <Row>
                <Col span="3" style="margin-right: 10px;">
                    <Select v-model="status">
                        <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="5" style="margin-right: 15px;">
                    <Input v-model="projectName" placeholder="产品型号"></Input>
                </Col>
                <Col span="8">
                    <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;width: 79px;" @click="search">搜索</Button>
                </Col> 
            </Row>
             <Row style="margin-top: 15px;">
                <Col span="24">
                    <span style="font-size: 14px;color: #C7C7C7;">产品型号：</span>
                    <span style="font-size: 18px;font-weight: bold;color: #11C3C9;margin-right: 15px;">AKA100003W00</span>
                    <span style="font-size: 14px;color: #C7C7C7;">降低额：</span>
                    <span style="font-size: 18px;font-weight: bold;color: #11C3C9;margin-right: 15px;">230.000</span>
                    <span style="font-size: 14px;color: #C7C7C7;">降低率：</span>
                    <span style="font-size: 18px;font-weight: bold;color: #11C3C9;margin-right: 15px;">20%</span>
                    <span style="font-size: 14px;color: #C7C7C7;">总效益：</span>
                    <span style="font-size: 18px;font-weight: bold;color: #11C3C9;">￥20000</span>
                </Col>
            </Row>
            <Row style="margin-top: 10px;border-top: 1px solid #F1F1F1;">
                <Row style="margin-top: 20px;">
                    <Col span="3" style="height: 60px;line-height: 60px;text-align: center;">
                        <span style="font-size: 14px;color: #C9C9C9;">2017-08-10</span>
                    </Col>
                    <Col span="21">
                        <div style="border-left: 1px solid #F1F1F1;position: relative;">
                            <img src="../../assets/yudi.png" style="position: absolute;top: 50%;left: 0;margin-left: -11px;margin-top: -15px;">
                            <div style="background-color: #F7F7F7;margin-left: 25px;height: 60px;line-height: 60px;padding-left: 10px;">
                                <span style="font-size: 14px;color: #C7C7C7;">项目名称：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">诺德曼加湿器降价3.21% </span>
                                <span style="font-size: 14px;color: #C7C7C7;">立项时间：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">2017-08-10</span>
                                <span style="font-size: 14px;color: #C7C7C7;">总转批量时间：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">2017-08-10</span>
                                <span style="font-size: 14px;color: #C7C7C7;">核算产量：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">1612</span>
                                <span style="font-size: 14px;color: #C7C7C7;">核算效益：</span>
                                <span style="font-size: 14px;color: #11C3C9;">599</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style="height: 20px;">
                    <Col span="3">
                    <span style="font-size: 14px;color: #C9C9C9;">&nbsp;&nbsp;</span>
                    </Col>
                    <Col span="21" style="border-left: 1px solid #F1F1F1;">
                    <span style="font-size: 14px;color: #C9C9C9;">&nbsp;&nbsp;</span>
                    </Col>
                </Row>
                <Row>
                    <Col span="3" style="height: 60px;line-height: 60px;text-align: center;">
                        <span style="font-size: 14px;color: #C9C9C9;">2017-08-10</span>
                    </Col>
                    <Col span="21">
                        <div style="border-left: 1px solid #F1F1F1;position: relative;">
                            <img src="../../assets/yudi.png" style="position: absolute;top: 50%;left: 0;margin-left: -11px;margin-top: -15px;">
                            <div style="background-color: #F7F7F7;margin-left: 25px;height: 60px;line-height: 60px;padding-left: 10px;">
                                <span style="font-size: 14px;color: #C7C7C7;">项目名称：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">诺德曼加湿器降价3.21% </span>
                                <span style="font-size: 14px;color: #C7C7C7;">立项时间：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">2017-08-10</span>
                                <span style="font-size: 14px;color: #C7C7C7;">总转批量时间：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">2017-08-10</span>
                                <span style="font-size: 14px;color: #C7C7C7;">核算产量：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">1612</span>
                                <span style="font-size: 14px;color: #C7C7C7;">核算效益：</span>
                                <span style="font-size: 14px;color: #11C3C9;">599</span>
                            </div>
                        </div>
                    </Col>
                </Row> 
                <Row style="height: 20px;">
                    <Col span="3">
                    <span style="font-size: 14px;color: #C9C9C9;">&nbsp;&nbsp;</span>
                    </Col>
                    <Col span="21" style="border-left: 1px solid #F1F1F1;">
                    <span style="font-size: 14px;color: #C9C9C9;">&nbsp;&nbsp;</span>
                    </Col>
                </Row>
                <Row>
                    <Col span="3" style="height: 60px;line-height: 60px;text-align: center;">
                        <span style="font-size: 14px;color: #C9C9C9;">2017-08-10</span>
                    </Col>
                    <Col span="21">
                        <div style="border-left: 1px solid #F1F1F1;position: relative;">
                            <img src="../../assets/yudi.png" style="position: absolute;top: 50%;left: 0;margin-left: -11px;margin-top: -15px;">
                            <div style="background-color: #F7F7F7;margin-left: 25px;height: 60px;line-height: 60px;padding-left: 10px;">
                                <span style="font-size: 14px;color: #C7C7C7;">项目名称：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">诺德曼加湿器降价3.21% </span>
                                <span style="font-size: 14px;color: #C7C7C7;">立项时间：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">2017-08-10</span>
                                <span style="font-size: 14px;color: #C7C7C7;">总转批量时间：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">2017-08-10</span>
                                <span style="font-size: 14px;color: #C7C7C7;">核算产量：</span>
                                <span style="font-size: 14px;color: #11C3C9;margin-right: 10px;">1612</span>
                                <span style="font-size: 14px;color: #C7C7C7;">核算效益：</span>
                                <span style="font-size: 14px;color: #11C3C9;">599</span>
                            </div>
                        </div>
                    </Col>
                </Row> 
                <Row style="height: 20px;">
                    <Col span="3">
                    <span style="font-size: 14px;color: #C9C9C9;">&nbsp;&nbsp;</span>
                    </Col>
                    <Col span="21" style="border-left: 1px solid #F1F1F1;">
                    <span style="font-size: 14px;color: #C9C9C9;">&nbsp;&nbsp;</span>
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
    margin-left: 20px;
    margin-right: 20px;
}
</style>
