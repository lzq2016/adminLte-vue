<template>
    <div>
        <div class="header">
          <span style="font-size: 14px;color: #969696;">项目管理/</span>
          <span style="font-size: 14px;color: #51D4D9;">项目审核</span>
        </div>
          <div class="wrap">
             <Row>
                <Col span="5">
                	<Input v-model="projectCode" placeholder="项目编码/名称" style="width: 200px"></Input>
                </Col>
                <Col span="3" style="margin-right: 5px;">
                    <Select v-model="status">
                        <Option v-for="item in statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col span="5">
                    <Input v-model="catgory" placeholder="项目类别" style="width: 200px"></Input>
                </Col>
                <Col span="5">
                    <DatePicker type="date" placeholder="立项时间" style="width: 160px" v-model="startTime"></DatePicker>
                </Col>
                
                <Col span="2">
                	<Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;" @click="search">搜索</Button>
                </Col>
                <Col span="2" style="margin-left: -20px;">
                    <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;"@click="">导出</Button>
                </Col>
            </Row>
            <Row style="margin-top: 20px;">
            	<Col span="24">
            	<Table stripe :columns="columns7" :data="data6"></Table>	
                </Col>
            </Row>
            <Row style="margin-top: 20px;" type="flex" justify="center" class="code-row-bg">
              <Col span="15">
                 <Page :total="totalList" @on-change="changePage" show-elevator></Page>
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
}
</style>
