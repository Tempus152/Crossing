<template>
  <div class="pp">Animal Crossing Wiki</div>
  <select name="" id="oneid" class="oneid" v-model="select">
    <option value="villagers">villagers</option>
    <option value="fish">fish</option>
    <option value="houseware">houseware</option>
    <option value="songs">songs</option>
    <option value="bugs">bugs</option>
  </select>
  <button class="press" @click="getInformation">Выбрать категорию</button>
  <select name="" id="nametranslation" class="nametranslation" v-model="lang">
    <option value="name-USen">Язык 1</option>
    <option value="name-EUru">Язык 2</option>
    <option value="name-EUit">Язык 3</option>
    <option value="name-CNzh">Язык 4</option>
    <option value="name-JPja">Язык 5</option>
  </select>
  <div class="post" v-for="post in posts">
    <img :src=post.image><br><br>{{post.text}}<br>{{post.birthday}}<br>{{post.personality}}<br>{{post.catchphrase}}
  </div>
</template>

<script>
export default {
  name: "face",
  components: {

  },
  data() {
    return {
      posts: [

      ],
      select: "",
      lang: "",
    }
  },
  methods:{
    async getInformation(){
      await fetch("https://acnhapi.com/v1a/" + this.select)
          .then((res) =>{
            if (res.ok) {
              return res.json();
            }
      })
          .then((data) => {
              for (let i in data) {
                const newPost = {
                  personality: data[i].personality,
                  birthday: data[i].birthday,
                  catchphrase: data[i]["catch-phrase"],
                  image: data[i].image_uri,
                  text:  data[i].name[this.lang],
                }
                this.posts.push(newPost)
            }
          })
    },
  },
}
</script>

<style scoped>
.post{
  border: 1px solid black;
  width: 256px;
  margin-bottom: 10px;
}
</style>