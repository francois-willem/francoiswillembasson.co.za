<template>
  <div class="category-container">
    <div class="category-inner-first-container">
      <div class="category-description">
        All
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-music">
        Music
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-live">
        Live
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-gaming">
        Gaming
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-animated-films">
        Animated films
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-sports-leagues">
        Sports leagues
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-highlight-films">
        Highlight films
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-highlight-films">
        Premier League
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-highlight-films">
        Football
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-highlight-films">
        Game shows
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-highlight-films">
        Comedy
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-highlight-films">
        Film trailers
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-highlight-films">
        Background music
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-highlight-films">
        Thrillers
      </div>
    </div>
    <div class="category-inner-container">
      <div class="category-highlight-films">
        Deep House
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.category-container {
  display: flex;
  align-items: center;
  height: 56px;
  width: 1680px;
  border-top: 1px solid #4e4e4e;
  border-bottom: 1px solid #4e4e4e;
  background-color: #212121;
}

.category-inner-first-container {
  display: flex;
  color: #ffffff;
  font-size: 14px;
  margin: 12px 12px 12px 24px;
  padding: 0 12px;
  border-radius: 16px;
  background-color: #353535;
  height: 32px;
  align-items: center;
  border: 1px solid #4e4e4e;

  &:hover {
    background-color: #4e4e4e;
    cursor: pointer;
  }
}

.category-inner-container {
  display: flex;
  color: #ffffff;
  font-size: 14px;
  margin: 12px 12px 12px 0;
  padding: 0 12px;
  border-radius: 16px;
  background-color: #353535;
  height: 32px;
  align-items: center;
  border: 1px solid #4e4e4e;

  &:hover {
    background-color: #4e4e4e;
    cursor: pointer;
  }
}

</style>