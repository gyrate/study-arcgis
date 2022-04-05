//四叉树节点
class QuadTreeNode {

  constructor(data, conf) {
    //节点范围
    this.extent = conf.extent || {xmin: 0, ymin: 0, xmax: 100, ymax: 100}
    // 节点数据容量
    this.bucketLimit = conf.bucketLimit || 10
    //存储的数据点
    this.points = data
    this.pointsCount = data.length
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
    this.northWest = new QuadTreeNode([], {extent: {xmin, ymin: ymin + h / 2, xmax: xmin + w / 2, ymax}})
    this.northEast = new QuadTreeNode([], {extent: {xmin: xmin + w / 2, ymin: ymin + h / 2, xmax, ymax}})
    this.southWest = new QuadTreeNode([], {extent: {xmin, ymin, xmax: xmin + w / 2, ymax: ymin + h / 2}})
    this.southEast = new QuadTreeNode([], {extent: {xmin: xmin + w / 2, ymin, xmax, ymax: ymin + h / 2}})

    //填充数据
    this.points.forEach(p => {
      if (this.northWest.within(p)) {
        this.northWest.addPoint(p)
      } else if (this.northEast.within(p)) {
        this.northEast.addPoint(p)
      } else if (this.southWest.within(p)) {
        this.southWest.addPoint(p)
      } else if (this.southEast.within(p)) {
        this.southEast.addPoint(p)
      }
    })
    this.points = []

    //尝试分裂节点
    this.northWest.split()
    this.northEast.split()
    this.southWest.split()
    this.southEast.split()
  }

  addPoint(point) {
    this.points.push(point)
    this.pointsCount = this.points.length
  }


  /**
   * 判断某个点是否在当前节点范围内
   * @param point
   * @param extent 指定范围，如果不填则使用当前节点范围
   * @returns {boolean}
   */
  within(point, extent) {
    const {x, y} = point
    const {xmin, ymin, ymax, xmax} = extent || this.extent
    if ((xmin <= x && xmax >= x) && (ymin <= y && ymax >= y)) {
      return true
    } else {
      return false
    }
  }


  /**
   * 判断当前节点范围是否与指定范围相交
   * 如果两个矩形相交，则两个矩形中心点间的距离肯定小于两个矩形边长和的1/2
   * @param extent 指定范围
   * @returns {boolean}
   */
  intersects(extent) {

    const {xmin, ymin, xmax, ymax} = extent

    //x轴 两个矩形中心点距离 * 2
    let lx = Math.abs(this.extent.xmax + this.extent.xmin - xmin - xmax)
    //x轴 两个矩形边长和
    let bx = Math.abs(this.extent.xmax - this.extent.xmin + xmax - xmin)
    //y轴 两个矩形中心点距离 * 2
    let ly = Math.abs(this.extent.ymax + this.extent.ymin - ymin - ymax)
    //y轴 两个矩形x轴边长和
    let by = Math.abs(this.extent.ymax - this.extent.ymin + ymax - ymin)

    if (lx <= bx && ly <= by) {
      return true
    } else {
      return false
    }
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

    const t = this
    let arr = []

    function travel(node) {

      if (node.intersects(extent)) {

        //如果当前四叉树节点有points，则将在extent范围内的points入栈
        if (node.points.length > 0) {
          node.points.forEach(point => {
            if (t.within(point, extent)) {
              arr.push(point)
            }
          })

        } else {
          const {northWest, northEast, southWest, southEast} = node

          if (northWest && northWest.intersects(extent)) {
            travel(northWest)
          }
          if (northEast && northEast.intersects(extent)) {
            travel(northEast)
          }
          if (southWest && southWest.intersects(extent)) {
            travel(southWest)
          }
          if (southEast && southEast.intersects(extent)) {
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