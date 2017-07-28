<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.component('menu', {
	methods: {
		open() {
			const el = document.body.getElementsByClassName('menu');

			var timelineParameters = anime.timeline({
			});

			timelineParameters
				.add({
					targets: el,
					translateY: [
						{ value: -500 },
						{ value: 0 },
					],
					opacity: [
						{ value: 0 },
						{ value: 1 },
					],
					duration: 2000,
					elasticity: 400,
				});
		},
		close() {
			const el = document.body.getElementsByClassName('menu');

			timelineParameters
				.add({
					targets: el,
					translateY: [
						{ value: 0 },
						{ value: 1 },
					],
					opacity: [
						{ value: -500 },
						{ value: 0 },
					],
					duration: 2000,
					elasticity: 400,
				});
		},
	},
	created() {
		window.addEventListener('click', this.open);
	}
});
</script>

<style lang="scss" src='./menu.scss'></style>
<template src='./menu.html'></template>
