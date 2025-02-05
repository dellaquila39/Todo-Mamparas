<template>
  <div
    class="slider-container"
    @mousemove="handleMove"
    @touchmove.passive="handleMove"
    @mouseup="stopDrag"
    @touchend="stopDrag"
    @touchcancel="stopDrag"
  >
    <div class="image-before" :style="{ width: sliderPosition + '%' }">
      <v-img
        :src="beforeImage"
        aspect-ratio="1.5"
        class="image-content"
      />
    </div>
    
    <div class="image-after">
      <v-img
        :src="afterImage"
        aspect-ratio="1.5"
        class="image-content"
      />
    </div>
    
    <div
      class="slider-control"
      :style="{ left: sliderPosition + '%' }"
      @mousedown="startDrag"
      @touchstart.passive="startDrag"
    >
      <div class="slider-handle">
        <v-icon color="accent">mdi-arrow-left-right-bold</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeforeAfterSlider',
  props: {
    beforeImage: String,
    afterImage: String
  },

  data: () => ({
    dragging: false,
    sliderPosition: 50
  }),

  methods: {
    startDrag() {
      this.dragging = true
      this.$emit('slide-start')
    },
    handleMove(event) {
      if (!this.dragging) return
      
      const currentWidth = this.$el.offsetWidth
      const clientX = event.touches ? event.touches[0].clientX : event.clientX
      const rect = this.$el.getBoundingClientRect()
      const x = clientX - rect.left
      
      this.sliderPosition = Math.min(
        Math.max(
          (x / currentWidth) * 100,
          2
        ),
        98
      )
    },
    stopDrag() {
      this.dragging = false
      this.$emit('slide-end')
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-container {
  position: relative;
  height: 100%;
  overflow: hidden;
  user-select: none;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
}

.image-before, .image-after {
  position: absolute;
  top: 0;
  height: 100%;
  
  .image-content {
    height: 100%;
    object-fit: cover;
  }
}

.image-before {
  left: 0;
  width: 50%;
  z-index: 2;
  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-after {
  width: 100%;
}

.slider-control {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  background: white;
  z-index: 3;
  transform: translateX(-50%);
  cursor: col-resize;
  transition: left 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  touch-action: none;
}

.slider-handle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
  
  &:active {
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@media (max-width: 600px) {
  .slider-handle {
    width: 35px;
    height: 35px;
    
    .v-icon {
      font-size: 24px;
    }
  }
}
</style>