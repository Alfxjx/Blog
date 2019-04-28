<template>
  <div id="home-swiper" class="test2">
    <div class="swiper-typed">
      <span id="type"></span>
    </div>
  </div>
</template>
<script>
import { init } from "ityped";

export default {
  props: ["title"],
  mounted() {
    const oneElement = document.querySelector("#type");
    init(oneElement, {
      showCursor: false,
      loop: false,
      disableBackTyping: true,
      strings: [this.title]
    });
  }
};
</script>

<style>
#home-swiper {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 8em;
  padding-bottom: 4em;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 1em;
}
.test2 {
  background: #e2e2e2;
  background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(hsla(0, 0%, 100%, 0.3) 1.5px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1.5px, transparent 0);
  background-size: 42px 42px, 42px 42px, 11px 11px, 11px 11px;
}

.swiper-typed {
  position: relative;
  overflow: hidden;
  max-width: 30em;
  width: 30em;
  height: 6em;
  margin: 0 10em 0 4em;
  padding-left: 1em;
  background: white;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  border-radius: 5px;
}
@media screen and (max-width: 700px) {
  .swiper-typed {
    margin: 0 0.5em;
  }
}
#type {
  line-height: 3em;
  font-size: 2em;
  color: #22658c;
}

.ityped-cursor {
  font-size: 2.1rem;
  color: #22658c;
  opacity: 1;
  -webkit-animation: blink 0.5s infinite;
  -moz-animation: blink 0.5s infinite;
  animation: blink 0.5s infinite;
  animation-direction: alternate;
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes blink {
  100% {
    opacity: 0;
  }
}

@-moz-keyframes blink {
  100% {
    opacity: 0;
  }
}
</style>
