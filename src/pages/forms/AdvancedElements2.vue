<template>
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
            <Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;">导出</Button>
        </Col>
    </Row>
    <Row style="margin-top: 20px;">
    	<Col span="24">
    	<Table stripe :columns="columns7" :data="data6"></Table>	
        </Col>
    </Row>
  </div>
</template>

<script>
var serviceData = require("../../lib/service.json");

export default {
  name: 'advanced-elements',
  data () {
  	return {
        projectCode:"",
        status:"进行中",
        catgory:"",
        startTime:"",
  		statusList: [],
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
  },
  methods: {
    search: function(val) {
        
    }
  }
}
</script>

<style>
.wrap{
	background-color: #fff;
	padding: 20px;
}
</style>
