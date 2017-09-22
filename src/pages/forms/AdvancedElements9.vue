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
              <img src="../../assets/info.png" class="img1">
              <img src="../../assets/workSelect.png" class="img2">
            </div>
            <Col span="24" class="col1">
               <p class="p1">BOM列表</p>
                <div class="tableWrap" class="div2">
                  <div class="tableRow backgroundGrey div3">
                      <span class="tableSpan span1">序号</span>
                      <span class="tableSpan span1">物料编码(新)</span>
                      <span class="tableSpan span1">物料名称(原)</span>
                      <span class="tableSpan span1">单价</span>
                      <span class="tableSpan span1">操作</span>
                  </div>
                  <div v-for="(item, index) in data6">
                      <div class="tableRow" :class="{ backgroundGrey: (index%2 != 0) }">
                          <span class="tableSpan">{{item.code}}</span>
                          <span class="tableSpan">{{item.name}}</span>
                          <span class="tableSpan">{{item.type}}</span>
                          <span class="tableSpan">{{item.time}}</span>
                          <div class="tableSpan">
                              <span class="span2">查看</span>
                              <span class="span3">审核</span>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="div4">
                  <span class="p1">效益型号</span>
                  <Button type="primary" class="button1" @click="">添加产品</Button> 
                </div>
                <div class="div5">
                  <Table stripe :columns="columns1" :data="data1"></Table>
                </div>
               <p class="p2">工作计划</p>
                 <div class="tableWrap div2">
                  <div class="tableRow backgroundGrey div3">
                      <div class="tableSpan1 div6">
                        <Checkbox v-model="single"></Checkbox>
                      </div>
                      <span class="tableSpan1 div6">计划内容</span>
                      <span class="tableSpan1 span4">预计完成时间</span>
                  </div>
                  <div v-for="(item, index) in data6">
                      <div class="tableRow" :class="{ backgroundGrey: (index%2 != 0) }">
                          <div class="tableSpan1" style="text-align: left;margin-left: 15px;">
                              <Checkbox v-model="single"></Checkbox>
                          </div>
                          <span class="tableSpan1" style="text-align: left;">{{item.name}}</span>
                          <div class="tableSpan1" style="text-align: right;">
                              <DatePicker type="date" placeholder="选择日期" style="width: 150px"></DatePicker>
                          </div>
                      </div>
                  </div>
                </div>   
                <div style="margin-top: 20px;text-align: center;max-width: 90%;">
                    <Button type="primary" class="button1" @click="">保存</Button>  
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
      single: false,
  		yearList: [],
        year: '2017',
        columns1: [{
          "type": "index",
          "width": 200,
          "align": "center",
          "title": "序号"
        }, {
          "title": "整机型号",
          "key": "project"
        }, {
          "title": "室内机型号",
          "key": "target"
        }, {
          "title": "室外机型号",
          "key": "real"
        }, {
          "title": "能效等级",
          "key": "finish"
        }, {
          "title": "类型",
          "key": "finish"
        }],
        "data1": [{
          "project": "王小明",
          "target": 18,
          "real": 20,
          "finish": "北京市朝阳区芍药居"
        }, {
          "project": "王小明",
          "target": 18,
          "real": 20,
          "finish": "北京市朝阳区芍药居"
        }, {
          "project": "王小明",
          "target": 18,
          "real": 20,
          "finish": "北京市朝阳区芍药居"
        }, {
          "project": "王小明",
          "target": 18,
          "real": 20,
          "finish": "北京市朝阳区芍药居"
        }],
        data6: [],
        totalList:200
  	}
  },
  beforeMount () {
    var self = this;

    this.yearList = serviceData.yearList;
    // this.columns1 = serviceData.columns1;
    this.data6 = serviceData.data6;

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
	padding: 20px;
  background-color: #ECF0F5;
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
    width: 19%;
    display: inline-block;
    font-size: 12px;
    line-height: 48px;
}
.tableSpan1{
    width: 32%;
    display: inline-block;
    font-size: 12px;
    line-height: 48px;

}
.backgroundGrey{
    background-color: #F8F8F9;
}
.row1{
  position: relative;
  height: 1200px;
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
  padding-left: 40px;
  position: absolute;
  top: 0;
  left:94px;
  z-index: 3000;
}
.p1{
  font-size: 14px;
  color: #39CED4;
}
.div2{
  margin-top: 5px;
  max-width: 90%;
}
.div3{
  font-weight: bold;
  height: 40px;
}
.span1{
  font-weight: bold;
  height: 40px;
}
.span2{
  border: 1px solid #01C0C8;
  display: inline-block;
  width: 40px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
}
.span3{
  background-color: #01C0C8;
  color: #fff;
  display: inline-block;
  width: 40px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
}
.div4{
  display: flex;
  justify-content:space-between;
  margin-top: 10px;
  max-width: 90%;
}
.button1{
  background-color: #01C0C8;
  border-color: #01C0C8;
  color:#fff;
  width: 80px;
}
.div5{
  max-width: 90%;
  margin-top: 10px;
}
.p2{
  font-size: 14px;
  color: #39CED4;
  margin-top: 10px;
}
.div6{
  height: 40px;
  line-height: 40px;
  text-align: left;
}
.span4{
  height: 40px;
  line-height: 40px;
  text-align: right;
}
</style>
