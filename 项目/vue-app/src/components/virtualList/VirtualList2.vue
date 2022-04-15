<template>
  <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div
      class="infinite-list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div
        ref="items"
        class="infinite-list-item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{
          height: itemSize + 'px',
          lineHeight: estimatedItemSize + 'px',
        }"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VirtualList2',
  props: {
    //所有列表数据
    listData: {
      type: Array,
      default: () => [],
    },
    //每项高度
    estimatedItemSize: {
      type: Number,
    },
  },

  data() {
    return {
      //可视区域高度
      screenHeight: 0,
      //偏移量
      startOffset: 0,
      //起始索引
      start: 0,
      //结束索引
      end: null,
      positions: [],
    }
  },
  computed: {
    //列表总高度
    listHeight() {
      return this.positions[this.positions.length - 1].bottom
    },
    //可显示的列表项数
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemSize)
    },
    //偏移量对应的style
    getTransform() {
      return `translate3d(0,${this.startOffset}px,0)`
    },
    //获取真实显示列表数据
    visibleData() {
      return this.listData.slice(
        this.start,
        Math.min(this.end, this.listData.length)
      )
    },
  },
  mounted() {
    console.log(this.listData)
    this.screenHeight = this.$el.clientHeight
    this.start = 0
    this.end = this.start + this.visibleCount
    this.initPositions()
  },
  methods: {
    // 初始位置信息填充
    initPositions() {
      this.positions = this.listData.map((item, index) => {
        return {
          index,
          height: this.estimatedItemSize,
          top: index * this.estimatedItemSize,
          bottom: (index + 1) * this.estimatedItemSize,
        }
      })
    },
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop
      //此时的开始索引
      this.start = getStartIndex()
      //此时的结束索引
      this.end = this.start + this.visibleCount
      //此时的偏移量
      if (this.start >= 1) {
        this.startOffset = this.positions[this.start - 1].bottom
      } else {
        this.startOffset = 0
      }
    },
    getStartIndex(scrollTop = 0) {
      //二分法查找
      return this.binarySearch(this.positions, scrollTop)
    },
    //二分法查找
    binarySearch(list, value) {
      let start = 0
      let end = list.length - 1
      let tempIndex = null
      while (start <= end) {
        let midIndex = parseInt((start + end) / 2)
        let midValue = list[midIndex].bottom
        if (midValue === value) {
          return midIndex + 1
        } else if (midValue < value) {
          start = midIndex + 1
        } else if (midValue > value) {
          if (tempIndex === null || tempIndex > midIndex) {
            tempIndex = midIndex
          }
          end = end - 1
        }
      }
      return tempIndex
    },
  },
  updated() {
    let nodes = this.$refs.items
    nodes.forEach(node => {
      let rect = node.getBoundingClientRect()
      let height = rect.height
      let index = +node.id.slice(1)
      let oldHeight = this.positions[index].height
      let dValue = oldHeight - height
      //存在差值
      if (dValue) {
        this.positions[index].bottom = this.positions[index].bottom - dValue
        this.positions[index].height = height
        for (let k = index + 1; k < this.positions.length; k++) {
          this.positions[k].top = this.positions[k - 1].bottom
          this.positions[k].bottom = this.positions[k].bottom - dValue
        }
      }
    })
  },
}
</script>

<style scoped>
.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
