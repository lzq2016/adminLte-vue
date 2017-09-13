module.exports = [{
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: '首页',
    items: []
}, {
    type: 'tree',
    icon: 'fa fa-files-o',
    name: '系统管理',
    items: []
}, {
    type: 'item',
    icon: 'fa fa-th',
    name: '产品管理',
    items: []
}, {
    type: 'tree',
    icon: 'fa fa-edit',
    name: '项目管理',
    items: [{
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '项目完成额',
        router: {
            name: 'AdvancedElements'
        }
    }, {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '共享资源中心',
        router: {
            name: 'AdvancedElements1'
        }
    },{
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '项目审核',
        router: {
            name: 'AdvancedElements2'
        }
    },{
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '项目立项',
        router: {
            name: 'AdvancedElements3'
        }
    },{
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '项目点检',
        router: {
            name: 'AdvancedElements4'
        }
    },{
        type: 'item',
        icon: 'fa fa-circle-o',
        name: '产品分析中心',
        router: {
            name: 'AdvancedElements5'
        }
    },{
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'home',
        router: {
            name: 'AdvancedElements6'
        }
    },{
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'AdvancedElements7',
        router: {
            name: 'AdvancedElements7'
        }
    }]
}, {
    type: 'tree',
    icon: 'fa fa-edit',
    name: '财务管理',
    items: []
}, {
    type: 'tree',
    icon: 'fa fa-edit',
    name: '报表管理',
    items: []
}]
