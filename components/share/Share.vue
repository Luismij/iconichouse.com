<template>
  <ul class="share-options" :class="[menuIsOpen ? 'open' : '']">

    <li class="share-icon">
      <a href="#" @click.prevent="shareHandler" >
        <v-icon icon="share-alt" size="xs"/>
      </a>
    </li>

    <li>
      <a target="_blank" rel="noopener noreferrer"
        :href="`https://www.facebook.com/sharer.php?u=${urlToShare}`" >
        <v-icon name="brands/facebook-f" :icon="['fab', 'facebook-f']" size="xs" />
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer"
        :href="`https://twitter.com/share?url=${urlToShare}`" >
        <v-icon name="brands/twitter" :icon="['fab', 'twitter']" size="xs"/>
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer"
        :href="`https://api.whatsapp.com/send?text=${urlToShare}`" >
        <v-icon name="brands/whatsapp" :icon="['fab', 'whatsapp']" size="xs"/>
      </a>
    </li>

  </ul>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false
    }
  },
  props: {
    slug: {
      type: String,
      default: ''
    }
  },
  computed: {
    urlToShare() {
      // return this.slug ? `${ process.env.siteUrl }testimonios${this.slug}` : `testimonios`
      // return this.slug ? `${ this.$store.state.siteUrl }${this.slug}` : ``
      return this.$store.state.siteUrl + this.slug
    }
  },
  methods: {
    shareHandler() {

      if (navigator.share) {
        navigator
          .share({
            // title:
            // text:
            url: this.urlToShare
          })
          .then(() => console.log('Share was successful.'))
          .catch(error => {
              console.log('Sharing failed', error)
              this.menuIsOpen = !this.menuIsOpen
            }
          )
      } else {
        this.menuIsOpen = !this.menuIsOpen
      }

    }
  }
}
</script>

<style lang="scss" src="./Share.scss" />
