// CameraPathFollow.js, zhu18@vip.qq.com at 2019.11.04



import * as THREE from 'three'

/**
 * 相机路径跟踪对象
 * 注意：如果场景使用了控制器，请在control.update 之后调用，update()
 * @example 
 *  var cpf=new CameraPathFollow({camera,scene,speed,debug...})
 *  cpf.start({[[0,0,0],[10,0,0]],speed:0.003,onCompleted:()=>{}})
 */
class  CameraPathFollow{
    constructor(opt){
        if(!opt.camera instanceof THREE.Camera){
            console.warn('new CameraPathFollow "THREE.Camera" initialization required.')
            return false
        }
        //默认设置
        this._opt={
            camera:null,
            scene:null,
            speed:.0005,
            points:null,//[[31,35,40],[38,8,30],[-38,49,20],[0,0,100],[0,30,20],[0,80,10]],
            lookAt:null,//设置固定焦点 如:[0,0,0],默认自动跟随path运动前方
            _pct:0, //导航起始位置 0-1
            debug:false,
            isStart:true,
            controls:null,//场景控制器对象
            repeat:false,
            _isReady:false,
        }

        Object.assign(this, this._opt, opt)
    }

    start(opt){
        if(!opt.points){
            console.warn('CameraPathFollow.start(opt.points) "points" is not Array.')
            return
        }
        this._pct=0;
        Object.assign(this, opt)
        this.setPath(this.points)
        this.isStart=true
    }

    stop(){
      
        this.isStart=false
    }

    /**
     * 设置导航路径,把路径点转化为3d圆滑线条
     * @param {*} points 
     * @example 
     * var path=[[0,0,0],[100,0,0]..]
     * @example 
     * var path=[new THREE.Vector3(0, 0, 0),new THREE.Vector3(100, 0, 0),..]
     */
    setPath(points){
        if(!Array.isArray(points)){
            console.warn('CameraPathFollow.setPath(points) "points" is not Array.')
            return
        }
        // 兼容path数组和Vector3数组
        if(!(points[0] instanceof THREE.Vector3))
        {
            for (let i=0; i<points.length; i++) {
                let x = points[i][0];
                let y = points[i][1];
                let z = points[i][2];
                points[i] = new THREE.Vector3(x,y,z);
            }
        }
        this.path = new THREE.CatmullRomCurve3(points);
        if(this.scene && this.debug){
            this.debugeTube&&scene.remove(this.debugeTube)
            let material = new THREE.MeshBasicMaterial({color:0xffffff,wireframe: true})
            var geometry = new THREE.TubeGeometry(this.path,this.path.length*3, 2,3,true);
            this.debugeTube = new THREE.Mesh(geometry, material);
            scene.add(this.debugeTube)
        }
        this._isReady=true
    }

    //更新
    update(){
        if(!this.isStart || !this._isReady)return
        this._pct += this.speed
        if(!this.repeat && this._pct>1){
            this.isStart=false
            //完成执行回调
            this.onCompleted && this.onCompleted()
            return
        }
        let pt1 = this.path.getPointAt(this._pct%1);
        let pt2 = this.path.getPointAt((this._pct + .01)%1);
        this.camera.position.set(pt1.x,pt1.y,pt1.z);
        if(this.lookAt){
            this.camera.lookAt(this.lookAt[0],this.lookAt[1],this.lookAt[2]);
        }
        else{
            this.camera.lookAt(pt2.x,pt2.y,pt2.z);
        }
        this.onUpdate && this.onUpdate()
    }
}

export default CameraPathFollow