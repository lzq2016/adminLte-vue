<template>
  <div class="wrap">
     <Row>
        <Col span="4">
        	<Input v-model="value" placeholder="项目名称" style="width: 160px"></Input>
        </Col>
        <Col span="3">
            <Input v-model="value" placeholder="型号" style="width: 120px"></Input>
        </Col>
        <Col span="4">
            <Input v-model="value" placeholder="物料" style="width: 160px"></Input>
        </Col>
        <Col span="7">
            <label>日期：</label>
            <DatePicker type="date" placeholder="选择日期" style="width: 110px"></DatePicker>
            <label>至</label>
            <DatePicker type="date" placeholder="选择日期" style="width: 110px"></DatePicker>
        </Col>
        <Col span="4">
            <Select v-model="model1">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
        <Col span="2">
        	<Button type="primary" style="background-color: #01C0C8;border-color: #01C0C8;">搜索</Button>
        </Col>
    </Row>
    <Row style="margin-top: 20px;" type="flex" justify="space-between" class="code-row-bg">
    	<Col span="6">
    		<Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>

    </Row>

    <Row style="margin-top: 20px;" type="flex" justify="space-between" class="code-row-bg">
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>

    </Row>

    <Row style="margin-top: 20px;" type="flex" justify="space-between" class="code-row-bg">
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
        </Col>
        <Col span="6">
            <Card :bordered="false" style="width: 220px;">
            <p slot="title" style="">无边框标题</p>
            <div>
                <p style="color: #999999;">立项时间：2017-06-21</p>
                <p style="color: #999999;">转批量时间：2017-06-21</p>
                <p style="color: #999999;">关键物料：1808866</p>
                <p style="color: #999999;">适用型号：加湿器</p>
                <p style="color: #999999;">负责人：张一峰</p>
                <p style="color: #999999;">项目分类：设计类</p>
            </div>
        </Card>
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
