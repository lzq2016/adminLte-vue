<template>
  <div>
      <div class="header">
          <span class="header1">项目管理/</span>
          <span class="header2">项目完成额</span>
        </div>
      <div class="actionWrap">
          <Row>
            <Col span="24" class="action">
            <div class="tabWrap">
              <span class="tab" v-bind:class="{ backGrey: isActive1 }" @click="tabChange">设计类</span>
              <span class="tab" v-bind:class="{ backGrey: !isActive1 }" @click="tabChange">采购类</span>
            </div>
            <Button type="primary" class="button" @click="search">新增</Button>
            </Col>
        </Row>
      </div>
      <div class="action1Wrap" v-for="item in list">
        <div class="action1">
          <div class="title">
            <span class="label">项目名称：</span>
            <span class="text">{{item.projectName}}</span>
            <span class="label">适用机型：</span>
            <span class="text">{{item.jixing}}</span>
          </div> 
          <div>
            <span class="button1">查看</span>
            <span class="button1">编辑</span>
          </div>  
        </div>
        <div class="contentWrap">
              <div>
                <span class="label1">项目编号：</span>
                <span class="text1">{{item.code}}</span>
                <span class="label1 ml10">立项时间：</span>
                <span class="text1">{{item.time}}</span>
                <span class="label1 ml10">状态：</span>
                <span class="text1">{{item.status}}</span>
              </div>
              <div class="mt10">
                <span class="label1">原品：</span>
                <span class="text1">{{item.yuanpin}}</span>
                <span class="label1 ml10">单价：</span>
                <span class="text1">￥{{item.danjia1}} </span>
              </div>
              <div class="mt10">
                <span class="label1">新品：</span>
                <span class="text1">{{item.xinpin}}</span>
                <span class="label1 ml10">单价：</span>
                <span class="text1">单价：￥{{item.danjia2}} </span>
              </div>
        </div>
      </div>
      <div class="pageWrap">
             <Page :total="totalList" :page-size="10" :current="10" @on-change="changePage" show-elevator></Page>
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
      isActive1:false,
  		list:[{
        projectName:"W3D电装盒固定结构优化",
        jixing:"KMV-100W-E",
        code:"0100167",
        time:"2017-05-28 15:11:23",
        status:"转批量",
        yuanpin:"科龙空调 KF-26GW/N19A2(1Q06) 零件B",
        danjia1:"8.00",
        xinpin:"科龙空调 KF-26GW/N19A2(1Q06) 零件B",
        danjia2:"4.00"
      },{
        projectName:"W3D电装盒固定结构优化",
        jixing:"KMV-100W-E",
        code:"0100167",
        time:"2017-05-28 15:11:23",
        status:"转批量",
        yuanpin:"科龙空调 KF-26GW/N19A2(1Q06) 零件B",
        danjia1:"8.00",
        xinpin:"科龙空调 KF-26GW/N19A2(1Q06) 零件B",
        danjia2:"4.00"
      },{
        projectName:"W3D电装盒固定结构优化",
        jixing:"KMV-100W-E",
        code:"0100167",
        time:"2017-05-28 15:11:23",
        status:"转批量",
        yuanpin:"科龙空调 KF-26GW/N19A2(1Q06) 零件B",
        danjia1:"8.00",
        xinpin:"科龙空调 KF-26GW/N19A2(1Q06) 零件B",
        danjia2:"4.00"
      },{
        projectName:"W3D电装盒固定结构优化",
        jixing:"KMV-100W-E",
        code:"0100167",
        time:"2017-05-28 15:11:23",
        status:"转批量",
        yuanpin:"科龙空调 KF-26GW/N19A2(1Q06) 零件B",
        danjia1:"8.00",
        xinpin:"科龙空调 KF-26GW/N19A2(1Q06) 零件B",
        danjia2:"4.00"
      }]
  	}
  },
  beforeMount () {
    var self = this;

  },
  methods: {
    tabChange:function(){
      this.isActive1 = !this.isActive1;
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
}
.actionWrap{
  padding: 20px;
  padding-bottom: 10px;
}
.action{
  display: flex;
  align-items:center;
  justify-content: space-between;

}
.tabWrap{
  display: inline-block;
}
.tab{
  background-color: #01C0C8;
  display: inline-block;
  width: 100px;
  height: 32px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  border-radius: 5px;
  cursor: pointer;
}
.backGrey{
  background-color: #CCCCCC;
}
.button{
  background-color: #01C0C8;
  border-color: #01C0C8;
  color: #fff;
}
.tableWrap{
  margin-top: 20px;
}
.pageWrap{
  margin-top: 20px;
  text-align: center;
  background-color: #EDF1F5;
}
.label{
  font-size: 14px;
  color: #C9C9C9;
}
.text{
  font-size: 14px;
  color:#40CFD5;
}
.button1{
  width: 50px;
  display: inline-block;
  height: 28px;
  background-color: #fff;
  color: #0FC3CB;
  border: 1px solid #0FC3CB;
  text-align: center;
  line-height: 28px;
  border-radius: 5px;
  cursor: pointer;
}
.action1{
   display: flex;
  align-items:center;
  justify-content: space-between;
  background-color: #FAFAFA;
  height: 40px;padding: 0 10px;
  border-bottom: 1px solid #F1F4F7;
}
.label1{
  font-size: 13px;
  color: #D0D0D0;
}
.text1{
  font-size: 13px;
  color: #929292;
}
.ml10{
  margin-left: 15px;
}
.mt10{
  margin-top: 10px;
}
.contentWrap{
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
}
.action1Wrap{
  padding-left: 20px;
  padding-right: 20px;
}
</style>
