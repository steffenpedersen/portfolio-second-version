<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('menu-close', {
	inserted(el) {
		function close() {
			const menu = document.body.getElementsByClassName('menu');

			var timelineParameters = anime.timeline({
			});

			timelineParameters
				.add({
					targets: menu,
					translateY: [
						{ value: 0 },
						{ value: -500 },
					],
					opacity: [
						{ value: 1 },
						{ value: 0 },
					],
					easing: 'easeInQuad',
					complete: function() {
						menu[0].style.pointerEvents = "none";
					}
				});
			};

			el.addEventListener('click', close);
	},
});

</script>
