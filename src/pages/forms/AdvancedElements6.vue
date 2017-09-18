<template>
	
	<section class="page-section">	
			
		<!-- row1 - 工作台 -->
		<Row :gutter="16" style="margin-bottom: 16px;">
			<Col span="12">
				<div class="ivu-hse-table">
					<h4>我的工作台</h4>
					<Table stripe :columns="table1.th" :data="table1.td" :row-class-name="rowClassName"></Table>
					<footer>
						<a href="">
							<span>更多</span>
							<i class="icon-more"></i>
						</a>
					</footer>
				</div>
			</Col>
			<Col span="12">
				<div class="ivu-hse-table">
					<h4>我的项目</h4>
					<Table stripe :columns="table2.th" :data="table2.td" :row-class-name="rowClassName"></Table>
					<footer>
						<a href="">
							<span>更多</span>
							<i class="icon-more"></i>
						</a>
					</footer>
				</div>
			</Col>
		</Row>
		
		<!-- step -->
		<div class="ivu-hse-steps">
			<header>
				<h3>项目进展</h3>
				<Select v-model="model1" style="width:200px">
			        <Option v-for="item in classify" :value="item.value" :key="item.value">{{ item.label }}</Option>
			    </Select>
			</header>
			<Row>
				<Col span="3" class="steps step1">
					<span>立项数: <em>360</em></span>
				</Col>
				<Col span="1" style="width: 20px;">
					<img src="../../assets/arrowRight.png" style="width: 36px;">
				</Col>
				<!-- <Col span="3" class="steps step2" style="background:url('../../assets/lingxing.png') no-repeat 0 0;"> -->
				<Col span="3" class="steps step2">
					<span>
						报审数: <em>350</em>
					</span>
					<span class="status-error">拒绝数</span>
				</Col>
				<Col span="4" class="steps step3">
					<span class="status-success">通过数: <em>120</em></span>
					<span class="status-success">转批量数: <em>120</em></span>
					<span>结项数: <em>120</em></span>
				</Col>
				<Col span="4" class="steps step4">
					<span>实验数: <em>120</em></span>
					<span class="status-success">实验完成数: <em>120</em></span>
					<span class="status-error">实验失败数: <em>120</em></span>
				</Col>
				<Col span="8" class="nums">
					<dl>
						<dt><h3>年度人物分析</h3></dt>
						<dd>目标额: </dd>
						<dd>完成额: </dd>
						<dd>完成排名: </dd>
					</dl>
					<dl>
						<dt><h3>月度任务分析</h3></dt>
						<dd>目标额: </dd>
						<dd>完成额: </dd>
						<dd>完成排名: </dd>
					</dl>
				</Col>
			</Row>
		</div>

		<!-- table -->
		<Row class="ivu-hse-noborder">
			<Col span="24">
				<Table :columns="table3.th" :data="table3.td"></Table>
			</Col>
		</Row>

	</section>

</template>

<script>
	
	export default {

		data () {
			return {
				model1:"",
				table1: {
					th: [
						{ title: '项目名称' , key: 'name' } ,
						{ title: '立项时间' , key: 'time' } ,
						{ title: '任务类型' , key: 'type' }
					],
					td: [
						{ name: 'W3D电装盒固定板结构优化' , time: '2017-06-21' , type: '审核' },
						{ name: 'W3D电装盒固定板结构优化' , time: '2017-06-21' , type: '审核' , rowClassName: 'status-error' },
						{ name: 'W3D电装盒固定板结构优化' , time: '2017-06-21' , type: '审核' },
						{ name: 'W3D电装盒固定板结构优化' , time: '2017-06-21' , type: '审核' , rowClassName: 'status-success' },
						{ name: 'W3D电装盒固定板结构优化' , time: '2017-06-21' , type: '审核' }
					]
				},
				table2: {
					th: [
						{ title: '项目编码' , key: 'num' } ,
						{ title: '项目名称' , key: 'name' } ,
						{ title: '项目类别' , key: 'classify' } ,
						{ title: '阶段' , key: 'type' } ,
						{ title: '状态' , key: 'status'}
					],
					td: [
						{ num: 'BM362312' , name: 'W3D电装盒固定板结构' , classify: '设计类' , type: '实验中' , status: '正常' },
						{ num: 'BM362312' , name: 'W3D电装盒固定板结构' , classify: '设计类' , type: '实验中' , status: '正常' },
						{ num: 'BM362312' , name: 'W3D电装盒固定板结构' , classify: '设计类' , type: '实验中' , status: '正常' },
						{ num: 'BM362312' , name: 'W3D电装盒固定板结构' , classify: '设计类' , type: '实验中' , status: '正常' , rowClassName: 'status-warning' },
						{ num: 'BM362312' , name: 'W3D电装盒固定板结构' , classify: '设计类' , type: '实验中' , status: '正常' , rowClassName: 'status-sucess' }
					]
				},
				table3: {
					th: [
						{ title: '评审超期' , key: 'name' } ,
						{ title: '提交人' , key: 'presenter' } ,
						{ title: '提交时间' , key: 'startTime' } ,
						{ title: '评审人' , key: 'auditor' } ,
						{ title: '最晚审核时间' , key: 'endTime' } 
					],
					td: [
						{ name: 'W3D电装盒固定板结构优化' , presenter: '张艺彤' , startTime: '2017-08-09' , auditor: '季度' , endTime: '2018-01-04' },
						{ name: 'W3D电装盒固定板结构优化' , presenter: '张艺彤' , startTime: '2017-08-09' , auditor: '季度' , endTime: '2018-01-04' },
						{ name: 'W3D电装盒固定板结构优化' , presenter: '张艺彤' , startTime: '2017-08-09' , auditor: '季度' , endTime: '2018-01-04' },
						{ name: 'W3D电装盒固定板结构优化' , presenter: '张艺彤' , startTime: '2017-08-09' , auditor: '季度' , endTime: '2018-01-04' },
						{ name: 'W3D电装盒固定板结构优化' , presenter: '张艺彤' , startTime: '2017-08-09' , auditor: '季度' , endTime: '2018-01-04' }
					]
				},
				classify: [
					{ value: 0 , label: '设计类' } ,
					{ value: 1 , label: '采购类' }
				]
			}
		},
		methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'status-success';
                } else if (index === 3) {
                    return 'status-error';
                }
                return '';
            }
        }

	}

</script>

<style>
.ivu-hse-table {
  background: #fff;
  padding: 0 15px;
}
.ivu-hse-table h4 {
  font-size: 12px;
  font-weight: normal;
  line-height: 1;
  color: #999;
  padding: 13px 0 9px;
}
.ivu-hse-table footer {
  height: 38px;
  line-height: 38px;
  color: #01c0c8;
  text-align: right;
}
.ivu-hse-table footer a {
  position: relative;
  display: inline-block;
  color: #01c0c8;
}
.ivu-hse-table footer span,
.ivu-hse-table footer i {
  display: inline-block;
  vertical-align: middle;
}
.ivu-hse-table .ivu-table-wrapper {
  border-top: 3px solid #01c0c8;
}
.ivu-hse-noborder {
  margin-top: 16px;
}
.ivu-hse-noborder .ivu-table {
  padding-bottom: 10px;
}
.ivu-hse-noborder .ivu-table th {
  background: #fff;
  padding-top: 5px;
  color: #999;
}
.ivu-hse-noborder .ivu-table th:nth-child(1) {
  color: red;
  font-size: 14px;
}
.ivu-hse-noborder .ivu-table td {
  border-bottom: 0;
  height: 32px;
}
.ivu-hse-steps {
  padding: 0 15px;
  background: #fff;
}
.ivu-hse-steps header {
  padding: 10px;
}
.ivu-hse-steps header h3,
.ivu-hse-steps header .ivu-select {
  display: inline-block;
}
.ivu-hse-steps header .ivu-select {
  width: 130px !important;
}
.ivu-hse-steps header .ivu-select .ivu-select-arrow {
  color: #01c0c8;
  width: 15px;
  height: 15px;
  border: 1px solid #01c0c8;
}
.ivu-hse-steps header .ivu-select .ivu-select-arrow:before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  margin: -4px 0 0 -3px;
  border: solid #01c0c8;
  border-width: 1px 1px 0 0;
  transform: rotate(135deg);
}
.ivu-hse-steps header .ivu-select-single .ivu-select-selection {
  border: 0;
  background: #f2f2f2;
}
.ivu-hse-steps header h3 {
  font-size: 14px;
  color: #999;
  margin-right: 15px;
}
.ivu-hse-steps .ivu-row {
  padding-bottom: 25px;
}
.ivu-hse-steps .nums {
  position: relative;
  display: flex;
}
.ivu-hse-steps .nums:after {
  content: '';
  position: absolute;
  width: 1px;
  height: 60%;
  background: #ccc;
  left: 50%;
  top: 20%;
}
.ivu-hse-steps .nums dl {
  flex: 1;
  height: 135px;
  padding-left: 24px;
  background: #efefef;
}
.ivu-hse-steps .nums dl dt {
  padding: 15px 0;
}
.ivu-hse-steps .nums dl dd {
  line-height: 20px;
}
.ivu-hse-steps .steps {
  padding: 0 20px;
}
.ivu-hse-steps .steps span {
  display: block;
  position: relative;
  color: #666;
  margin-bottom: 22px;
  background: #f2f2f2;
}
.ivu-hse-steps .steps span em {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
}
.ivu-hse-steps .steps span:not(:last-child) {
  z-index: 11;
}
.ivu-hse-steps .steps span:not(:last-child):before,
.ivu-hse-steps .steps span:not(:last-child):after {
  content: '';
  position: absolute;
  background: #f2f2f2;
}
.ivu-hse-steps .steps span:not(:last-child):before {
  width: 7px;
  height: 12px;
  top: 30px;
  left: 50%;
}
.ivu-hse-steps .steps span:not(:last-child):after {
  top: 40px;
  left: 50%;
  margin-left: -6px;
  border: 10px solid;
  border-color: #f2f2f2 #fff #fff #fff;
}
.ivu-hse-steps .steps span:last-child {
  z-index: 112;
}
.ivu-hse-steps .steps span:not(.rotate) {
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
}
.ivu-hse-steps .steps .rotate {
  background: #f2f2f2;
}
i.icon-more {
  position: relative;
  margin: 0 6px;
  width: 15px;
  height: 15px;
  border: 1px solid #01c0c8;
}
i.icon-more:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  margin: -4px 0 0 -3px;
  border: solid #01c0c8;
  border-width: 1px 1px 0 0;
  transform: rotate(135deg);
}
.status-success {
  background: #ceebbf !important;
}
.status-error {
  background: #f2b8b7 !important;
}

</style>