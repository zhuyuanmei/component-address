# component-address
组件名称：地址联动<br>
组件功能：完成2级地址[省，市]或3级地址[省，市，区(县)]联动<br>
组件参数：

$.address({

            //联动层级,参数值为整数类型【0代表省/市；1代表省/市/区(县)】
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
