//四叉树节点
class QuadTreeNode {

  constructor(data, conf) {
    //节点范围
    this.extent = conf.extent || {minX: 0, minY: 0, maxX: 100, maxY: 100}
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

  //数据点数量达到容量上限，则分裂子节点
  split(){
    if (this.points.length > this.bucketLimit) {
      this.createChildren()
    }
  }

  //创建子节点
  createChildren() {

    const {minX, minY, maxX, maxY} = this.extent
    const h = maxY - minY
    const w = maxX - minX

    //四个象限
    this.northWest = new QuadTreeNode([], {extent: {minX: minX, minY: minY + h / 2, maxX: minX + w / 2, maxY: maxY}})
    this.northEast = new QuadTreeNode([], {extent: {minX: minX + w / 2, minY: minY + h / 2, maxX: maxX, maxY: maxY}})
    this.southWest = new QuadTreeNode([], {extent: {minX: minX, minY: minY, maxX: minX + w / 2, maxY: minY + h / 2}})
    this.southEast = new QuadTreeNode([], {extent: {minX: minX + w / 2, minY: minY, maxX: maxX, maxY: minY + h / 2}})

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

    //分裂节点
    this.northWest.split()
    this.northEast.split()
    this.southWest.split()
    this.southEast.split()
  }

  addPoint(point) {
    this.points.push(point)
    this.pointsCount = this.points.length
  }


  //判断某个点是否在当前节点范围内
  within(point) {
    const {x, y} = point
    const {minX, minY, maxX, maxY} = this.extent
    if ((minX <= x && maxX >= x) || (minY <= y && maxY >= y)) {
      return true
    } else {
      return false
    }
  }


  //判断当前节点范围是否与指定范围相交
  intersects(extent) {

    const {xmin, ymin, xmax, ymax} = extent
    const {minX, minY, maxX, maxY} = this.extent

    if (
      (minX <= xmin && maxX >= xmin) ||
      (minX <= xmax && maxX >= xmax) ||
      (minY <= ymin && maxY >= ymin) ||
      (minY <= ymax && maxY >= ymax)) {
      return true
    } else {
      return false
    }
  }


  //判断当前节点是否叶子节点
  isLeafNode() {
    if (this.northWest || this.northEast || this.southWest || this.southEast) {
      return false
    } else {
      return true
    }
  }


  //查找指定范围内的坐标点
  findPoints(extent) {
    let arr = []
    function travel(node) {

      if (node.intersects(extent)) {
        if (node.isLeafNode()) {
          arr = [...arr, ...node.points]
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