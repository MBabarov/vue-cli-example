<template>
  <div
    ref="imagezone">
    <p>
      <img
        v-if="loading"
        class="img-loading"
        src="../assets/image-loading.gif">
      <img
        v-else
        :src="picture"
        class="img-thumbnail" >
    </p>
    <div class="column">
      <div class="col-md-12">
        <input
          :value="picture"
          type="text"
          class="form-control"
          readonly >
      </div>
      <div class="col-md-12 padding-top-20">
        <input
          ref="image"
          type="file"
          class="hidden"
          @change="upload" >
        <button
          type="button"
          class="btn btn-primary btn-block"
          @click="selectNewImage">Upload image</button>
      </div>
    </div>
  </div>
</template>

<script>
// Используемые плагины
import axios from 'axios'
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'
export default {
  name: 'AvatarUploader',
  model: {
    prop: 'picture'
  },
  props: {
    picture: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    this.initDropzone()
  },
  methods: {
    // Показать окно выбора файла
    selectNewImage() {
      this.$refs.image.click()
    },
    setNewAvatar(picture) {
      this.$emit('input', picture)
    },
    // Upload новой аватарки пользователя
    upload() {
      this.loading = true
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.image.files[0])
      // Добавляем ключ от IMGUR
      // https://api.imgur.com/oauth2/addclient
      const config = {
        headers: {
          Authorization: 'Client-ID 3e0260edfdc1961'
        }
      }
      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.setNewAvatar(response.data.link)
          this.$refs.image.value = ''
          this.loading = false
        })
    },
    initDropzone() {
      /* eslint-disable no-new */
      new Dropzone(this.$refs.imagezone, {
        url: 'https://api.imgur.com/3/image',
        paramName: 'image',
        acceptedFiles: 'image/*',
        method: 'post',
        headers: {
          'Cache-Control': null,
          'X-Requested-With': null,
          Authorization: 'Client-ID 3e0260edfdc1961'
        },
        createImageThumbnails: false,
        previewTemplate: '<div style="display:none"></div>',
        success: (file, response) => {
          this.setNewAvatar(response.data.link)
          this.$refs.image.value = ''
        }
      })
    }
  }
}
</script>

<style>
.hidden {
  display: none;
}
.img-loading {
  min-width: 60px;
  max-width: 180px;
}
.padding-top-20 {
  padding-top: 20px;
}
</style>
