<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.component('parallax', {
	data() {
		return {
		}
	},
	methods: {
		calc() {
			this.parentWidth = this.$el.parentElement.offsetWidth;
			this.parentHeight = this.$el.parentElement.offsetHeight;
		},
		ani() {
			this.calc();

			this.$el.style.width = this.parentWidth + "px";
			this.$el.style.height = this.parentHeight + "px";

			// var penner = anime.timeline();
			// penner
			//   .add({
			//     targets: this.$el,
			// 		height: this.parentHeight,
			// 		width: this.parentWidth,
			//     easing: 'linear',
			//   })
		}
	},
	mounted() {
		this.ani();
		window.addEventListener('resize', this.ani);
	}
});
</script>

<style lang="scss" src='./parallax.scss'></style>
<template src='./parallax.html'></template>
