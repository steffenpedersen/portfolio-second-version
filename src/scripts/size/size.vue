<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('size', {
	inserted(el) {
		const elWidth = window.innerWidth - 200;

		var domNode = anime({
		  targets: el,
		  easing: 'easeInCubic',
			duration: 1000,
		  width: elWidth,
		});
	},
});

</script>
