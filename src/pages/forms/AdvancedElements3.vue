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
                	<Input v-model="projectCode" v-validate="'required'" name="projectCode" placeholder="项目编码"  class="w210" style="width: 210px"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;项目名称:</label>
                    <Input v-model="projectName" placeholder="项目名称" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;项 目 组:</label>
                    <Input v-model="projectGroup" placeholder="项目组" class="w210"></Input>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;项目类型:</label>
                    <Input v-model="projectType" placeholder="项目类型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;适用机型:</label>
                    <Input v-model="adaptMachine" placeholder="适用机型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;项目属性:</label>
                    <Input v-model="projectAttr" placeholder="项目属性" class="w210"></Input>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;所属工厂:</label>
                    <Input v-model="belongFactory" placeholder="项目类型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;所属部门:</label>
                    <Input v-model="belongPart" placeholder="适用机型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;申请序号:</label>
                    <Input v-model="serNum" placeholder="项目属性" class="w210"></Input>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;现状背景:</label>
                    <Input v-model="background" placeholder="项目类型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;内容措施:</label>
                    <Input v-model="content" placeholder="适用机型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;预测效益:</label>
                    <Input v-model="predictBenifit" placeholder="项目属性" class="w210"></Input>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;预计投入:</label>
                    <Input v-model="predictIn" placeholder="项目类型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;预计单机:</label>
                    <Input v-model="predictMachine" placeholder="适用机型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;预计产量:</label>
                    <Input v-model="predictProduct" placeholder="项目属性" class="w210"></Input>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;潜在效益:</label>
                    <Input v-model="qianzaiBenifit" placeholder="项目类型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;风险等级:</label>
                    <Input v-model="degree" placeholder="适用机型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>实施优先级:</label>
                    <Input v-model="prior" placeholder="项目属性" class="w210"></Input>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;负责人:</label>
                    <Input v-model="person" placeholder="项目类型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;项目组长:</label>
                    <Input v-model="zuzhang" placeholder="适用机型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;核算方式:</label>
                    <Input v-model="compute" placeholder="项目属性" class="w210"></Input>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>质量部评审:</label>
                    <Input v-model="qulity" placeholder="项目类型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>工艺部评审:</label>
                    <Input v-model="gongyibu" placeholder="适用机型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>开发部审核:</label>
                    <Input v-model="develop" placeholder="项目属性" class="w210"></Input>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>财务部评审:</label>
                    <Input v-model="money" placeholder="项目类型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备注:</label>
                    <Input v-model="beizhu" placeholder="适用机型" class="w210"></Input>
                </Col>
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日期:</label>
                    <Input v-model="date" placeholder="项目属性" class="w210"></Input>
                </Col> 
            </Row>
            <Row class="mt10">
                <Col span="8">
                    <label>&nbsp;&nbsp;&nbsp;涉及部门:</label>
                    <Input v-model="shejiPart" placeholder="项目类型" class="w210"></Input>
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
  beforeMount () {
    var self = this;
    
    this.statusList = serviceData.statusList;
    this.data6 = serviceData.data6;
  },
  methods: {
    search: function(val) {
        
    },
    error:function () {
        // console.log(this.errors.has('email'))
        // !this.errors.has('email')&&this.$Message.error('项目类型内容不能为空！');
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
.mt5{
    margin-top: 3px;
    text-align: center;
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
</style>
