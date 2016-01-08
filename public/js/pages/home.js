/**
 * 移动官网
 * @since 2016.01.08
 */
define(function (require, exports, module) {
    //'地址联动'模块
    if($('#J_Address').length){
        var Address  = require('address');

        $.address({
            //联动层级,为整数类型( 0:省/市；1:省/市/区(县) )
            level: 1,

            //省份对象
            province: $('#J_Province'),

            //城市对象
            city: $('#J_City'),

            //区(县)对象
            area: $('#J_Area'),

            //区(县)对象的父节点对象
            areaParent: $('#J_AreaObj')
        });
    }
});