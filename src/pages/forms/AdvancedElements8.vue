<template>
  <div>
      <div class="header">
          <span class="header1">项目管理/</span>
          <span class="header2">项目完成额</span>
        </div>
      <div class="wrap">
         <Row class="row1">
            <div class="div1">
            	<img src="../../assets/arrow.png" style="width: 17px;">
              <img src="../../assets/infoSelect.png" class="img1">
              <img src="../../assets/work.png" class="img2">
            </div>
            <Col span="22" class="col1">
                <Row>
                  <Col span="8">
                      <label>&nbsp;&nbsp;&nbsp;项目编码:</label>
                    <Input v-model="projectCode"  v-verify="projectCode" placeholder="项目编码" class="w210"></Input>
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
                        <Select v-verify="projectType" v-model="projectType" class="w210">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <label v-remind="projectType" class="errorTip"></label>
                    </Col>
                    <Col span="8">
                        <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原材料:</label>
                        <Select v-verify="yuancailiao" v-model="yuancailiao" class="w210">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <label v-remind="yuancailiao" class="errorTip"></label>
                    </Col>
                    <Col span="8">
                        <label>&nbsp;&nbsp;&nbsp;项目属性:</label>
                        <Select v-verify="projectAttr" v-model="projectAttr" class="w210">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
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
                        <Select v-verify="hesuanfangshi" v-model="hesuanfangshi" class="w210">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <label v-remind="hesuanfangshi" class="errorTip"></label>
                    </Col> 
                </Row>
                <Row class="mt10">
                    <Col span="8">
                        <label>质量部评审:</label>
                        <Select v-verify="zhiliangpinshen" v-model="zhiliangpinshen" class="w210">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <label v-remind="zhiliangpinshen" class="errorTip"></label>
                    </Col>
                    <Col span="8">
                        <label>工艺部评审:</label>
                        <Select v-verify="gongyipinshen" v-model="gongyipinshen" class="w210">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <label v-remind="gongyipinshen" class="errorTip"></label>
                    </Col>
                    <Col span="8">
                        <label>开发部审核:</label>
                        <Select v-verify="kaifapinshen" v-model="kaifapinshen" class="w210">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <label v-remind="kaifapinshen" class="errorTip"></label>
                    </Col> 
                </Row>
                <Row class="mt10">
                    <Col span="8">
                        <label>财务部评审:</label>
                        <Select v-verify="caiwupinshen" v-model="caiwupinshen" class="w210">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <label v-remind="caiwupinshen" class="errorTip"></label>
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
                         <Select v-verify="shejibumen" v-model="shejibumen" multiple class="w210">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <label v-remind="shejibumen" class="errorTip"></label>
                    </Col> 
                </Row>
                <div style="margin-top: 3px;text-align: center;">
                  <!-- <router-link to="/forms/advanced-elements9"> -->
                    <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;width: 80px;" @click="subNext">下一步</Button>
                  <!-- </router-link> -->
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
        projectCode:"",
        projectName:"",
        projectGroup:"",
        projectType:"",
        yuancailiao:"",
        projectAttr:"",
        belongFactory:"",
        belongPart:"",
        background:"",
        content:"",
        predictBenifit:"",
        predictIn:"",
        predictMachine:"",
        predictProduct:"",
        qianzaiBenifit:"",
        degree:"",
        prior:"",
        serNum:"",
        person:"",
        zuzhang:"",
        hesuanfangshi:"",
        zhiliangpinshen:"",
        gongyipinshen:"",
        kaifapinshen:"",
        caiwupinshen:"",
        beizhu:"",
        date:"",
        shejibumen:"",
  		yearList: [],
      cityList:[],
        year: '2017',
        columns1: [],
        data1: [],
        totalList:200
  	}
  },
  verify: {
        projectCode:"required",
        projectName:"required",
        projectGroup:"required",
        projectType:"required",
        yuancailiao:"required",
        projectAttr:"required",
        belongFactory:"required",
        belongPart:"required",
        background:"required",
        content:"required",
        predictBenifit:"required",
        predictIn:"required",
        predictMachine:"required",
        predictProduct:"required",
        qianzaiBenifit:"required",
        degree:"required",
        prior:"required",
        serNum:"required",
        person:"required",
        zuzhang:"required",
        hesuanfangshi:"required",
        zhiliangpinshen:"required",
        gongyipinshen:"required",
        kaifapinshen:"required",
        caiwupinshen:"required",
        beizhu:"required",
        date:"required",
        shejibumen:"required"
  },
  beforeMount () {
    var self = this;

    this.yearList = serviceData.yearList;
    this.cityList = serviceData.yearList;
    this.columns1 = serviceData.columns1;
    this.data1 = serviceData.data1;

    Service.page.getSelection({})
      .then((res) => {
        if (res.data.code === 1) {
          this.yearList = res.data.response.yearList;
        }
    });
    Service.page.search(self.year,{})
      .then((res) => {
        if (res.data.code === 1) {
          this.data1 = res.data.response.data1;
          this.totalList = res.data.response.totalList;
        }
    });
  },
  methods: {
    optionChange: function(val) {
        this.year = val;
    },
    search:function(){
      var self = this;
      Service.page.search({year:self.year,pageNum:1},{})
      .then((res) => {
        if (res.data.code === 1) {
          this.data1 = res.data.response.data1;
          this.totalList = res.data.response.totalList;
        }
      });
    },
    changePage: function(pageNum) {
      var self = this;
        Service.page.search({year:self.year,pageNum:self.totalList},{})
        .then((res) => {
        if (res.data.code === 1) {
          this.data1 = res.data.response.data1;
          this.totalList = res.data.response.totalList;
        }
      });
    },
    subNext:function(){
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
	padding: 20px;
  background-color: #ECF0F5;
}
.row1{
   position: relative;
   height: 700px;
}
.div1{
  position: absolute;
  top: 0;
  left: 0;
  width: 115px;
  z-index: 4000;
}
.img1{
  width: 101px;
  top: 69px;
  left: 8px;
  position:absolute;
}
.img2{
   width: 101px;
   top: 137px;
   left: 8px;
   position:absolute;
}
.col1{
  background-color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 60px;
  position: absolute;
  top: 0;
  left:94px;
  z-index: 3000;
}
.w210{
  width: 210px;
}
.mt10{
  margin-top: 10px;
}
.errorTip{
    color: #ed3f14;
    margin-left: 70px;
}
</style>
