<template>
  <div class="wrap">
     <Row>
        <Col span="5" style="margin-right: 10px;">
        	<Select v-model="model1" style="width:200px">
        		<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    		</Select>
        </Col>
        <Col span="3">
        	<Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;">搜索</Button>
        </Col>
    </Row>
    <Row style="margin-top: 20px;">
    	<Col span="24">
    		<Table stripe :columns="columns1" :data="data1"></Table>
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
                data1: [
                    {
                        project: '王小明',
                        target: 18,
                        real:20,
                        finish: '北京市朝阳区芍药居'
                    },
                    {
                        project: '王小明',
                        target: 18,
                        real:20,
                        finish: '北京市朝阳区芍药居'
                    },
                    {
                        project: '王小明',
                        target: 18,
                        real:20,
                        finish: '北京市朝阳区芍药居'
                    },
                    {
                        project: '王小明',
                        target: 18,
                        real:20,
                        finish: '北京市朝阳区芍药居'
                    },
                    
                ]
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
