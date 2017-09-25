<template>
    <div>
        <div class="header">
          <span class="header1">项目管理/</span>
          <span class="header2">项目立项</span>
        </div>
          <div class="wrap">
             <Row>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;项目编码:</label>
                	<Input v-model="projectCode" v-verify="projectCode" placeholder="项目编码"  class="w210" style="width: 210px"></Input>
                    <label v-remind="projectCode" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;项目名称:</label>
                    <Input v-model="projectName" v-verify="projectName" placeholder="项目名称" class="w210"></Input>
                    <label v-remind="projectName" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;项 目 组:</label>
                    <Input v-model="projectGroup" v-verify="projectGroup" placeholder="项目组" class="w210"></Input>
                    <label v-remind="projectGroup" class="errorTip"></label>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;项目类型:</label>
                    <Input v-model="projectType" v-verify="projectType" placeholder="项目类型" class="w210"></Input>
                    <label v-remind="projectType" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;适用机型:</label>
                    <Input v-model="adaptMachine" v-verify="adaptMachine" placeholder="适用机型" class="w210"></Input>
                    <label v-remind="adaptMachine" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;项目属性:</label>
                    <Input v-model="projectAttr" v-verify="projectAttr" placeholder="项目属性" class="w210"></Input>
                    <label v-remind="projectAttr" class="errorTip"></label>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;所属工厂:</label>
                    <Input v-model="belongFactory" v-verify="belongFactory" placeholder="项目类型" class="w210"></Input>
                    <label v-remind="belongFactory" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;所属部门:</label>
                    <Input v-model="belongPart" v-verify="belongPart" placeholder="适用机型" class="w210"></Input>
                    <label v-remind="belongPart" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;申请序号:</label>
                    <Input v-model="serNum" v-verify="serNum" placeholder="项目属性" class="w210"></Input>
                    <label v-remind="serNum" class="errorTip"></label>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;现状背景:</label>
                    <Input v-model="background" v-verify="background" placeholder="项目类型" class="w210"></Input>
                    <label v-remind="background" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;内容措施:</label>
                    <Input v-model="content" v-verify="content" placeholder="适用机型" class="w210"></Input>
                    <label v-remind="content" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;预测效益:</label>
                    <Input v-model="predictBenifit" v-verify="predictBenifit" placeholder="项目属性" class="w210"></Input>
                    <label v-remind="predictBenifit" class="errorTip"></label>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;预计投入:</label>
                    <Input v-model="predictIn" v-verify="predictIn" placeholder="项目类型" class="w210"></Input>
                    <label v-remind="predictIn" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;预计单机:</label>
                    <Input v-model="predictMachine" v-verify="predictMachine" placeholder="适用机型" class="w210"></Input>
                    <label v-remind="predictMachine" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;预计产量:</label>
                    <Input v-model="predictProduct" v-verify="predictProduct" placeholder="项目属性" class="w210"></Input>
                    <label v-remind="predictProduct" class="errorTip"></label>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;潜在效益:</label>
                    <Input v-model="qianzaiBenifit" v-verify="qianzaiBenifit" placeholder="项目类型" class="w210"></Input>
                    <label v-remind="qianzaiBenifit" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;风险等级:</label>
                    <Input v-model="degree" v-verify="degree" placeholder="适用机型" class="w210"></Input>
                    <label v-remind="degree" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>实施优先级:</label>
                    <Input v-model="prior" v-verify="prior" placeholder="项目属性" class="w210"></Input>
                    <label v-remind="prior" class="errorTip"></label>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;负责人:</label>
                    <Input v-model="person" v-verify="person" placeholder="项目类型" class="w210"></Input>
                    <label v-remind="person" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;项目组长:</label>
                    <Input v-model="zuzhang" v-verify="zuzhang" placeholder="适用机型" class="w210"></Input>
                    <label v-remind="zuzhang" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;核算方式:</label>
                    <Input v-model="compute" v-verify="compute" placeholder="项目属性" class="w210"></Input>
                    <label v-remind="compute" class="errorTip"></label>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>质量部评审:</label>
                    <Input v-model="qulity" v-verify="qulity" placeholder="项目类型" class="w210"></Input>
                    <label v-remind="qulity" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>工艺部评审:</label>
                    <Input v-model="gongyibu" v-verify="gongyibu" placeholder="适用机型" class="w210"></Input>
                    <label v-remind="gongyibu" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>开发部审核:</label>
                    <Input v-model="develop" v-verify="develop" placeholder="项目属性" class="w210"></Input>
                    <label v-remind="develop" class="errorTip"></label>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>财务部评审:</label>
                    <Input v-model="money" v-verify="money" placeholder="项目类型" class="w210"></Input>
                    <label v-remind="money" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注:</label>
                    <Input v-model="beizhu" v-verify="beizhu" placeholder="适用机型" class="w210"></Input>
                    <label v-remind="beizhu" class="errorTip"></label>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日期:</label>
                    <Input v-model="date" v-verify="date" placeholder="项目属性" class="w210"></Input>
                    <label v-remind="date" class="errorTip"></label>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;涉及部门:</label>
                    <Input v-model="shejiPart" v-verify="shejiPart" placeholder="项目类型" class="w210"></Input>
                    <label v-remind="shejiPart" class="errorTip"></label>
                </Col> 
            </Row>
            <p class="p1">BOM列表</p>
            <Row class="mt3">
            	<Col span="24">
            	<Table stripe :columns="columns7" :data="data6"></Table>	
                </Col>
            </Row>
            <p class="p1">效益型号</p>
            <Row class="mt3">
                <Col span="24">
                <Table stripe :columns="columns8" :data="data6"></Table>    
                </Col>
            </Row>
            <p class="p1">工作计划</p>
            <Row class="mt3">
                <Col span="24">
                <Table stripe :columns="columns9" :data="data6"></Table>    
                </Col>
            </Row>
            <p class="footerText">工艺部 马山 2017-08-21 已审核</p>
            <p class="footerText mt5">工艺部 马山 2017-08-21 已审核</p>
            <div class="buttonWrap">
                <Button type="primary" class="through" @click="error">通过</Button>
                <Button type="primary" class="reject" @click="">拒绝</Button>    
            </div>
          </div>
    </div>
</template>

<script>
var serviceData = require("../../lib/service.json");

export default {
  name: 'advanced-elements',
  data () {
  	return {
        projectCode:"",
        projectName:"",
        projectGroup:"",
        projectType:"",
        adaptMachine:"",
        projectAttr:"",
        belongFactory:"",
        belongPart:"",
        serNum:"",
        background:"",
        content:"",
        predictBenifit:"",
        predictIn:"",
        predictMachine:"",
        predictProduct:"",
        qianzaiBenifit:"",
        degree:"",
        prior:"",
        person:"",
        zuzhang:"",
        compute:"",
        qulity:"",
        gongyibu:"",
        develop:"",
        money:"",
        beizhu:"",
        date:"",
        shejiPart:"",
        columns7: [
            {
                type: 'index',
                width: 60,
                align: 'center',
                title: '序号'
            },
            {
                title: '物料编码(原)',
                key: 'code',
                align:'center'
            },
            {
                title: '物料名称(原)',
                key: 'name',
                align:'center'
            },
            {
                title: '单价',
                key: 'type',
                align:'center'
            },
            {
                title: '物料编码(新)',
                key: 'time',
                align:'center'
            },
            {
                title: '物料名称(新)',
                key: 'part',
                align:'center'
            },
            {
                title: '单价',
                key: 'person',
                align:'center'
            },
        ],
        columns8: [
            {
                type: 'index',
                width: 60,
                align: 'center',
                title: '序号'
            },
            {
                title: '整机型号',
                key: 'code',
                align:'center'
            },
            {
                title: '室内机型号',
                key: 'name',
                align:'center'
            },
            {
                title: '室外机型号',
                key: 'type',
                align:'center'
            },
            {
                title: '能效等级',
                key: 'time',
                align:'center'
            },
            {
                title: '类型',
                key: 'part',
                align:'center'
            }
        ],
        columns9: [
            {
                title: '计划内容',
                key: 'code',
                align:'left'
            },
            {
                title: '预计完成时间',
                key: 'name',
                align:'center',
                width:200
            }
        ],
        data6: []
  	}
  },
  verify: {
        projectCode:"required",
        projectName:"required",
        projectGroup:"required",
        projectType:"required",
        adaptMachine:"required",
        projectAttr:"required",
        belongFactory:"required",
        belongPart:"required",
        serNum:"required",
        background:"required",
        content:"required",
        predictBenifit:"required",
        predictIn:"required",
        predictMachine:"required",
        predictProduct:"required",
        qianzaiBenifit:"required",
        degree:"required",
        prior:"required",
        person:"required",
        zuzhang:"required",
        compute:"required",
        qulity:"required",
        gongyibu:"required",
        develop:"required",
        money:"required",
        beizhu:"required",
        date:"required",
        shejiPart:"required"
    },
  beforeMount () {
    var self = this;
    
    this.statusList = serviceData.statusList;
    this.data6 = serviceData.data6;
  },
  methods: {
    search: function(val) {
        
    },
    error:function () {
        console.log(this.$verify.check())
        !this.$verify.check()&&this.$Message.error('信息不完整！');
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
.vueError{
    position: absolute;
    top: 0;
    left: 0;
}
.w210{
    width: 210px;
}
.mt10{
    margin-top: 10px;
}
.p1{
    font-size: 14px;
    color: #3CCFD5;
    margin-top: 20px;
}
.mt3{
    margin-top: 3px;
}
.footerText{
    font-size: 12px;
    color: #3CCFD5;
    margin-top: 20px;
}
.mt5{
    margin-top: 5px;
}
.through{
    background-color: #01C0C8;
    border-color: #01C0C8;
    color:#fff;
    width: 80px;
}
.reject{
    background-color: #fff;
    border-color: #01C0C8;
    color:#01C0C8;
    width: 80px;
}
.buttonWrap{
    margin-top: 3px;
    text-align: center;
}
.errorTip{
    color: #ed3f14;
}
</style>
