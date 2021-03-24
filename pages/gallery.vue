<template>
  <div>
    <div id="content" class="site-content" role="main">
      <article id="post-8" class="post-8 page type-page status-publish hentry">
        <header class="entry-header">
          <div class="container">
            <h1 class="entry-title">Gallery</h1>
          </div>
        </header>
        <div class="entry-content">
          <div>
            <div class="container jumbo">
              <div
                class="tiled-gallery type-square"
                itemtype="http://schema.org/ImageGallery"
              >
                <div
                  v-for="image in images"
                  class="gallery-group"
                  style="width: 345px; height: 345px;"
                >
                  <div
                    class="tiled-gallery-item"
                    itemprop="associatedMedia"
                    itemscope=""
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="width" content="431" />
                    <meta itemprop="height" content="431" />
                    <img
                      :src="image.img.data.full_url"
                      width="431"
                      height="431"
                      style="width: 341px; height: 341px;"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container"></div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: {
        //
      },
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
    enterClass: 'fade-enter',
    duration: 150,
  },
  mounted() {
    // get the images
    this.loadImages()
  },
  methods: {
    loadImages() {
      this.$axios
        .$get(
          this.$store.state.apiConfiguration.baseUrl +
            this.$store.state.apiConfiguration.urlGallery
        )
        .then((response) => {
          this.images = response.data
        })
    },
  },
}
</script>

<style scoped></style>
