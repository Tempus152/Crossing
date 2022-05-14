<template>

</template>

<script>

export default {
  name: "fetch1",
  props:{
  select
  },
  method: {
    getData() {
      fetch("https://acnhapi.com/v1a/" + select)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            let i = 0
            for (i in data) {
              let image = document.createElement("img"); ////////
              let text = document.createElement("p"); /////////
              let personality = document.createElement("p"); /////////
              let Catchphrase = document.createElement("p"); /////////


              if ("personality" in data[i]) {
                personality.textContent = data[i].personality;
              }

              if ("birthday" in data[i]) {
                birthday.textContent = data[i].birthday;
              }

              if ("catch-phrase" in data[i]) {
                Catchphrase.textContent = data[i]["catch-phrase"];
              }

              text.textContent = data[i].name[lang.value];
              image.src = data[i].image_uri;

              // const div = document.createElement('div')
              div.setAttribute('class', text.textContent)
              // up.appendChild(div)
              // div.append(image, text, availibilitylocation, availibilityrarity, availibilitymontharraynorthern, time, rarity, personality, birthday, Catchphrase, isOrderable, Milesprice, Source, Sourcedetail, Tag);
            }
          });
    }
  }
}
</script>

<style scoped>

</style>