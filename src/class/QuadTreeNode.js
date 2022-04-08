import Extent from './Extent'

/**
 * 四叉树
 */
class QuadTreeNode {

  //四叉树的最大深度
  MAX_DEEP = 50

  constructor(data, conf) {
    //节点范围
    this.extent =  new Extent(conf.extent)
    // 节点数据容量
    this.bucketLimit = conf.bucketLimit || 10
    this.deep = conf.deep || 0
    //存储的数据点
    this.points = data
    this.init()
  }


  init() {
    this.split()
  }

  /**
   * 数据点数量达到容量上限，则分裂子节点
   */
  split(){
    if (this.points.length > this.bucketLimit) {
      this.createChildren()
    }
  }

  /**
   * 创建子节点
   */
  createChildren() {

    const {xmin, ymin, xmax, ymax} = this.extent
    const h = ymax - ymin
    const w = xmax - xmin

    //四个象限
    this.northWest = new QuadTreeNode([], {extent: {xmin, ymin: ymin + h / 2, xmax: xmin + w / 2, ymax}, deep: this.deep+1 })
    this.northEast = new QuadTreeNode([], {extent: {xmin: xmin + w / 2, ymin: ymin + h / 2, xmax, ymax}, deep: this.deep+1 })
    this.southWest = new QuadTreeNode([], {extent: {xmin, ymin, xmax: xmin + w / 2, ymax: ymin + h / 2}, deep: this.deep+1 })
    this.southEast = new QuadTreeNode([], {extent: {xmin: xmin + w / 2, ymin, xmax, ymax: ymin + h / 2}, deep: this.deep+1 })

    //填充数据
    this.points.forEach(p => {
      if (this.northWest.isContain(p)) {
        this.northWest.addPoint(p)
      } else if (this.northEast.isContain(p)) {
        this.northEast.addPoint(p)
      } else if (this.southWest.isContain(p)) {
        this.southWest.addPoint(p)
      } else if (this.southEast.isContain(p)) {
        this.southEast.addPoint(p)
      }
    })
    this.points = []

    //控制四叉树的最大深度,避免超过浏览器内存限制
    if (this.deep > this.MAX_DEEP) {
      return
    }

    //尝试分裂节点
    this.northWest.split()
    this.northEast.split()
    this.southWest.split()
    this.southEast.split()
  }

  addPoint(point) {
    this.points.push(point)
  }


  /**
   * 判断某个点是否在当前节点范围内
   * @param point
   * @returns {boolean}
   */
  isContain(point){
      return this.extent.within(point)
  }

  /**
   * 判断当前节点范围是否与指定范围相交
   * 如果两个矩形相交，则两个矩形中心点间的距离肯定小于两个矩形边长和的1/2
   * @param extent {Extent} 指定范围
   * @returns {boolean}
   */
  isIntersects(extent) {
    return this.extent.intersects(extent)
  }

  /**
   * 判断当前节点是否叶子节点
   * @returns {boolean}
   */
  isLeafNode() {
    if (this.northWest || this.northEast || this.southWest || this.southEast) {
      return false
    } else {
      return true
    }
  }

  /**
   * 查找指定范围内的坐标点
   * @param extent 指定范围
   * @returns {Array}
   */
  findPoints(extent) {

    if (!(extent instanceof Extent)) {
      extent = new Extent(extent)
    }

    let arr = []

    function travel(node) {

      if (node.isIntersects(extent)) {

        //如果当前四叉树节点有points，则将在extent范围内的points入栈
        if (node.points.length > 0) {
          node.points.forEach(point => {
            if (extent.within(point)) {
              arr.push(point)
            }
          })

        } else {
          const {northWest, northEast, southWest, southEast} = node

          if (northWest && northWest.isIntersects(extent)) {
            travel(northWest)
          }
          if (northEast && northEast.isIntersects(extent)) {
            travel(northEast)
          }
          if (southWest && southWest.isIntersects(extent)) {
            travel(southWest)
          }
          if (southEast && southEast.isIntersects(extent)) {
            travel(southEast)
          }
        }
      }
    }

    travel(this)

    return arr
  }


}


export default QuadTreeNode
