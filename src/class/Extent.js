/**
 * 矩形范围
 */
class  Extent{
  constructor(conf = {xmin: 0, ymin: 0, xmax: 100, ymax: 100}){

    this.xmin = conf.xmin
    this.ymin = conf.ymin
    this.xmax = conf.xmax
    this.ymax = conf.ymax
  }

  /**
   * 判断某个点是否在当前范围内
   * @param point
   * @param extent 指定范围，如果不填则使用当前节点范围
   * @returns {boolean}
   */
  within(point) {
    const {x, y} = point
    const {xmin, ymin, ymax, xmax} = this
    if ((xmin <= x && xmax >= x) && (ymin <= y && ymax >= y)) {
      return true
    } else {
      return false
    }
  }


  /**
   * 判断当前范围是否与指定范围相交
   * 如果两个矩形相交，则两个矩形中心点间的距离肯定小于两个矩形边长和的1/2
   * @param extent 指定范围
   * @returns {boolean}
   */
  intersects(extent) {

    const {xmin, ymin, xmax, ymax} = extent

    //x轴 两个矩形中心点距离 * 2
    let lx = Math.abs(this.xmax + this.xmin - xmin - xmax)
    //x轴 两个矩形边长和
    let bx = Math.abs(this.xmax - this.xmin + xmax - xmin)
    //y轴 两个矩形中心点距离 * 2
    let ly = Math.abs(this.ymax + this.ymin - ymin - ymax)
    //y轴 两个矩形x轴边长和
    let by = Math.abs(this.ymax - this.ymin + ymax - ymin)

    if (lx <= bx && ly <= by) {
      return true
    } else {
      return false
    }
  }
}
export default Extent
