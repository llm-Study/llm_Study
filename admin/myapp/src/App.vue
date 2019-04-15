<template>
  <div id="app" ref="width">
    <router-view></router-view>
  </div>
</template>
<script type='text/javascript' src='/pcQuery/js/WebSpeech.js'></script>
<script>
export default {
  mounted() {
    dome();
  },
  data() {
    return {
      message: 1
    };
  },
  methods: {
    dome() {
      //第二步：在你需要读取的地方执行就ok
        WebSpeech.ready(function() {
          WebSpeech.server = "http://120.24.87.124/cgi-bin/ekho2.pl";
          WebSpeech.setVoice("en");
          WebSpeech.speak("你好，欢迎使用WebSpeach!");
        });
    }
  }
};
</script>

<style>
body,
html {
  margin: 0;
  overflow: hidden;
  height: 100%;
  font-size: 1rem;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
export default {
  mounted() {},
  data() {
    return {
      message: 1
    };
  },
  methods: {
    dome() {
      //第二步：在你需要读取的地方执行就ok
      $(function() {
        WebSpeech.ready(function() {
          WebSpeech.server = "http://120.24.87.124/cgi-bin/ekho2.pl";
          WebSpeech.setVoice("en");
          WebSpeech.speak("你好，欢迎使用WebSpeach!");
        });
      });
    }
  }
};
</script>