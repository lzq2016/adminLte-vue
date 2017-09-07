<template>
  <div class="wrap">
     <Row>
        <Col span="5">
        	<Input v-model="value" placeholder="项目编码/名称" style="width: 200px"></Input>
        </Col>
        <Col span="3" style="margin-right: 5px;">
            <Select v-model="model1">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
        <Col span="5">
            <Input v-model="value" placeholder="项目类别" style="width: 200px"></Input>
        </Col>
        <Col span="5">
            <DatePicker type="date" placeholder="立项时间" style="width: 160px"></DatePicker>
        </Col>
        
        <Col span="2">
        	<Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;color:#fff;">搜索</Button>
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
export default {
  name: 'advanced-elements',
  data () {
  	return {
  		cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: '',
                 columns1: [
                 	{
                        type: 'index',
                        width: 200,
                        align: 'center',
                        title:'排名'
                    },
                    {
                        title: '项目组',
                        key: 'project'
                    },
                    {
                        title: '目标',
                        key: 'target'
                    },
                    {
                        title: '实际',
                        key: 'real'
                    },
                    {
                        title: '完成率',
                        key: 'finish'
                    }
                ],
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
                data6: [
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三'
                    },
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三'
                    },
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三'
                    },
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三',
                    },
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三',
                    },
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三',
                    },
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三',
                    },
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三',
                    },
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三',
                    },
                    {
                        code: 'BM234230',
                        name: "科技以人为本",
                        type: '采购类',
                        time: '2017-06-03',
                        part: '产品部',
                        person: '张三',
                    }
                ],
                value:""
  	}
  },
  created () {

  }
}
</script>

<style>
.wrap{
	background-color: #fff;
	padding: 20px;
}
</style>
