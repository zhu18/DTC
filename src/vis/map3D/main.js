import * as THREE from './three.js'
import OrbitControls from './OrbitControls'
import Event from "./Event"
import ShaderLib from './three.ShaderLibExp'

// THREE.OrbitControls = OrbitControls
// THREE.Event = Event;
// THREE.ShaderLib = ShaderLib
const thr = {
  ...THREE,
  OrbitControls,
  Event,
  ShaderLib
}
export default thr

