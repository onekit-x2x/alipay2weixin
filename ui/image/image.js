// onekit/ui/image/image.js
Component({
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
      src: {
        type:String,
        value:'',
      },
      mode: {
        type:String,
        value:'scaleToFill',
      },
      lazyLoad: {
        type:Boolean ,
        value:false,
      },
},
  methods: {
    image_error(e){
      this.triggerEvent('error',{})
  },
  image_load(e){
    this.triggerEvent('load',{})
},


  }
})
