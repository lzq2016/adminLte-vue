<template>
    <div>
        <div class="header">
          <span style="font-size: 14px;color: #969696;">项目管理/</span>
          <span style="font-size: 14px;color: #51D4D9;">项目审核</span>
        </div>
          <div class="wrap">
             <Row>
                <Col span="24">
                	<Input v-model="projectCode" placeholder="项目编码/名称" style="width: 200px"></Input>
                    <Select v-model="status" style="width: 200px;margin-right: 10px;">
                        <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <Input v-model="catgory" placeholder="项目类别" style="width: 200px;margin-right: 10px;"></Input>
                    <DatePicker type="date" placeholder="立项时间" style="width: 160px;margin-right: 10px;" v-model="startTime"></DatePicker>
                    <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;" @click="search">搜索</Button>
                    <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;"@click="">导出</Button>
                </Col>
            </Row>
            <div class="tableWrap" style="margin-top: 20px;">
                <div class="tableRow backgroundGrey" style="font-weight: bold;height: 40px;">
                    <span class="tableSpan" style="height: 40px;line-height: 40px;">项目编码</span>
                    <span class="tableSpan" style="height: 40px;line-height: 40px;">项目名称</span>
                    <span class="tableSpan" style="height: 40px;line-height: 40px;">项目类别</span>
                    <span class="tableSpan" style="height: 40px;line-height: 40px;">立项时间</span>
                    <span class="tableSpan" style="height: 40px;line-height: 40px;">立项部门</span>
                    <span class="tableSpan" style="height: 40px;line-height: 40px;">负责人</span>
                    <span class="tableSpan" style="height: 40px;line-height: 40px;">操作</span>
                </div>
                <div v-for="(item, index) in data6">
                    <div class="tableRow" :class="{ backgroundGrey: (index%2 != 0) }">
                        <img src="../../assets/add.png" style="width: 19px;height: 19px;" v-if="!item.show" @click="item.show=!item.show">
                        <img src="../../assets/close.png" style="width: 19px;height: 19px;" v-if="item.show" @click="item.show=!item.show">
                        <span class="tableSpan">{{item.code}}</span>
                        <span class="tableSpan">{{item.name}}</span>
                        <span class="tableSpan">{{item.type}}</span>
                        <span class="tableSpan">{{item.time}}</span>
                        <span class="tableSpan">{{item.part}}</span>
                        <span class="tableSpan">{{item.person}}</span>
                        <div class="tableSpan">
                            <span style="border: 1px solid #01C0C8;display: inline-block;width: 40px;height: 25px;line-height: 25px;border-radius: 5px;cursor: pointer">查看</span>
                            <span style="background-color: #01C0C8;color: #fff;display: inline-block;width: 40px;height: 25px;line-height: 25px;border-radius: 5px;cursor: pointer">审核</span>
                        </div>
                    </div>
                    <div style="padding: 15px;" v-show="item.show">
                        <div style="text-align: center;">
                            <span style="display: inline-block;background-color: #01C0C8;width: 30%;color: #fff;height: 32px;line-height: 32px;">字段名称</span>
                            <span style="display: inline-block;background-color: #01C0C8;width: 69%;color: #fff;height: 32px;line-height: 32px;">字段值</span>
                        </div>
                        <div style="text-align: center;">
                            <span style="background-color: #F8F8F9;display: inline-block;width: 30%;height: 30px;line-height: 30px;border: 1px solid #E9EAEC;border-right: none;border-top: none;">单位名称</span>
                            <span style="display: inline-block;width: 69%;height: 30px;line-height: 30px;border: 1px solid #E9EAEC;border-left: none;border-top: none;">江苏分社</span>
                        </div>
                        <div style="text-align: center;">
                            <span style="background-color: #F8F8F9;display: inline-block;width: 30%;height: 30px;line-height: 30px;border: 1px solid #E9EAEC;border-right: none;border-top: none;">单位名称</span>
                            <span style="display: inline-block;width: 69%;height: 30px;line-height: 30px;border: 1px solid #E9EAEC;border-left: none;border-top: none;">江苏分社</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style="margin-top: 20px;text-align: center;">
                 <Page :total="totalList" @on-change="changePage" show-elevator></Page>
            </div>
            
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
        status:"",
        catgory:"",
        startTime:"",
  		statusList: [],
        totalList:200,
        columns7: [
            {
                title: '项目编码',
                key: 'code',
                align:'center'
            },
            {
                title: '项目名称',
                key: 'name',
                align:'center'
            },
            {
                title: '项目类别',
                key: 'type',
                align:'center'
            },
            {
                title: '立项时间',
                key: 'time',
                align:'center'
            },
            {
                title: '立项部门',
                key: 'part',
                align:'center'
            },
            {
                title: '负责人',
                key: 'person',
                align:'center'
            },
            {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index)
                                }
                            }
                        }, '查看'),
                        h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                        }, '审核')
                    ]);
                }
            }
        ],
        data6: []
  	}
  },
  beforeMount () {
    var self = this;
    this.statusList = serviceData.statusList;
    this.data6 = serviceData.data6;

    Service.page2.search({},{})
      .then((res) => {
        if (res.data.code === 1) {
          this.data6 = res.data.response.data1;
          this.totalList = res.data.response.totalList;
        }
    });
  },
  methods: {
    search: function(val) {
        var self = this;
        Service.page2.search({
            projectCode:self.projectCode,
            status:self.status,
            catgory:self.catgory,
            startTime:self.startTime,
            pageNum:1
        },{})
      .then((res) => {
            if (res.data.code === 1) {
              this.data6 = res.data.response.data1;
              this.totalList = res.data.response.totalList;
            }
        });
    },
    changePage:function(pageNum){
        var self = this;
        Service.page2.search({
        projectCode:self.projectCode,
        status:self.status,
        catgory:self.catgory,
        startTime:self.startTime,
        pageNum:pageNum
        },{})
      .then((res) => {
        if (res.data.code === 1) {
          this.data6 = res.data.response.data1;
          this.totalList = res.data.response.totalList;
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
	background-color: #fff;
	padding: 20px;
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
    width: 13%;
    display: inline-block;
    font-size: 12px;
    line-height: 48px;
}
.backgroundGrey{
    background-color: #F8F8F9;
}
</style>
