<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('menu-open', {
	inserted(el) {
		function open() {
			// open menu
			const menu = document.body.getElementsByClassName('menu');
			const relativeOffset = anime.timeline();

				relativeOffset
					.add({
						targets: '.menu',
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
					})
					.add({
						targets: '.topic-web',
						translateY: [
							{ value: -250 },
							{ value: 0 },
						],
						opacity: [
							{ value: 0 },
							{ value: 1 },
						],
						easing: 'easeOutExpo',
						offset: '-=300' // Starts 600ms before the previous animation ends
					})
					.add({
						targets: '.topic-design',
						translateY: [
							{ value: -250 },
							{ value: 0 },
						],
						opacity: [
							{ value: 0 },
							{ value: 1 },
						],
						easing: 'easeOutExpo',
						offset: '-=900' // Starts 600ms before the previous animation ends
					})
					.add({
						targets: '.topic-writing',
						translateY: [
							{ value: -250 },
							{ value: 0 },
						],
						opacity: [
							{ value: 0 },
							{ value: 1 },
						],
						easing: 'easeOutExpo',
						offset: '-=900' // Starts 800ms before the previous animation ends
					});
			};

			el.addEventListener('click', open);
	},
});

</script>
