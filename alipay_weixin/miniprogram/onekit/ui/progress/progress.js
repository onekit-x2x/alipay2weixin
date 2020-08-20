// onekit/ui/progress/progress.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
    percent:{
      type:String,
      value:''
    },
    showInfo:{
      type:Boolean,
      value:false},
    strokeWidth:{
      type:Number,
      value:2
    },
    activeColor:{
      type:String,
      value:'#09BB07'
    },
    backgroundColor:{
      type:String,
      value:"#EBEBEB"
    },
    active:{
      type:Boolean,
      value:false
    
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
