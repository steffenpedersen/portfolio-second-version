<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('menu-close', {
	inserted(el) {
		function close() {
			// open menu
			const menu = document.body.getElementsByClassName('menu');
			const relativeOffset = anime.timeline();

				relativeOffset
					.add({
						targets: '.topic-web',
						translateY: [
							{ value: 0 },
							{ value: -250 },
						],
						opacity: [
							{ value: 1 },
							{ value: 0 },
						],
						easing: 'easeOutExpo',
					})
					.add({
						targets: '.topic-design',
						translateY: [
							{ value: 0 },
							{ value: -250 },
						],
						opacity: [
							{ value: 1 },
							{ value: 0 },
						],
						easing: 'easeOutExpo',
						offset: '-=900' // Starts 600ms before the previous animation ends
					})
					.add({
						targets: '.topic-writing',
						translateY: [
							{ value: 0 },
							{ value: -250 },
						],
						opacity: [
							{ value: 1 },
							{ value: 0 },
						],
						easing: 'easeOutExpo',
						offset: '-=900' // Starts 600ms before the previous animation ends
					})
					.add({
						targets: '.menu',
						translateY: [
							{ value: 0 },
							{ value: -500 },
						],
						opacity: [
							{ value: 1 },
							{ value: 0 },
						],
						easing: 'easeInQuad',
						offset: '-=900', // Starts 600ms before the previous animation ends
						complete: function() {
							menu[0].style.pointerEvents = 'none';
						}
					});
			};

			el.addEventListener('click', close);
	},
});

</script>
