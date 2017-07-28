<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('fade', {
	inserted(el) {
		var timelineParameters = anime.timeline({
		});

		timelineParameters
			.add({
				targets: el,
				scale: [
					{ value: 0 },
					{ value: 1 },
				],
				opacity: [
					{ value: 0 },
					{ value: 1 },
				],
				duration: 1000,
				elasticity: 200,
			});
	},
});

</script>
