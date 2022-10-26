<template>
  <div class="content-block-one">
    <div class="content-row">

      <div v-for="(featuredItem, index) in featured" :key="'featured-item' + index" class="video">
        <div class="video-thumbnail">
          <img :src="featuredItem.video.image" :alt="'video thumbnail' + index ">
          <div class="video-length">
            {{ featuredItem.video.length }}
          </div>
        </div>
        <div class="video-details">
          <div class="video-channel">
            <img :src="featuredItem.channel.featuredImg" :alt="'channel' + index">
          </div>
          <div class="video-description">
            <div class="video-description-title">
              {{ featuredItem.video.title }}
            </div> 
            <div class="video-description-channel">
              {{ featuredItem.channel.name }}
            </div>
            <div class="video-description-views-details">
              <div class="video-description-views">
                {{ featuredItem.video.views }}
              </div>
              <div class="video-description-posted">
                {{ featuredItem.video.created }}
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  </div>


</template>

<script>

import { getFeed } from '@Service/ApiCall.js';

export default {
  name: 'VideoContent',
  data() {
    return {
      featured: [],
    }
  },
  created() {
    console.log('Making API call')
    const apiCallResponse = getFeed()

    this.featured = apiCallResponse.data.featured

    console.log('component data')
    console.log(this.featured)
  },
}
</script>

<style lang="scss" scoped>

.content-block-one {
  margin-top: 24px;
  padding: 0 15px 0 15px;
}

.content-row {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  flex-direction: row;
}

.video {
  height: 300px;
  width: calc(100% / 4);
  padding: 0 10px 40px 10px;
}

.video-thumbnail {
  position: relative;
  
  &:hover {
    transform: scale(1.15);
  }
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
}

.video-length {
  position: absolute;
  color: #ffffff;
  bottom: 8px;
  background-color: black;
  right: 4px;
  font-size: 12px;
  padding: 3px;
  font-weight: 900;
}

.video-details {
  display: flex;
}

.video-channel {
  margin: 12px 12px 0 0;
}

.video-channel img{
  height: 36px;
  width: 36px;
  border-radius: 50%;
}

.video-description-title {
  color: #ffffff;
  margin: 12px 0 0 0;
  font-size: 15px;
}

.video-description-channel {
  color: #bbbbbb;
  font-size: 13px;
  padding-top: 4px;
}

.video-description-views-details {
  display: flex;
  padding-top: 2px;
}

.video-description-views {
  color: #bbbbbb;
  font-size: 13px;
  margin-right: 5px;
}

.video-description-posted {
  color: #bbbbbb;
  font-size: 13px;
}

</style>