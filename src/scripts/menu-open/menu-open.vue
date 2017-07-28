<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('menu-open', {
	inserted(el) {
		function open() {
			const menu = document.body.getElementsByClassName('menu');

			var timelineParameters = anime.timeline({
			});

			timelineParameters
				.add({
					targets: menu,
					translateY: [
						{ value: -500 },
						{ value: 0 },
					],
					opacity: [
						{ value: 0 },
						{ value: 1 },
					],
					easing: 'easeInQuad',
					complete: function() {
						menu[0].style.pointerEvents = 'auto';
					}
				});
			};

			el.addEventListener('click', open);
	},
});

</script>
