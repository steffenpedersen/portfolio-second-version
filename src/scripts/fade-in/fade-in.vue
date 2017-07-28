<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('fade-in', {
	inserted(el) {

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
});

</script>









<!-- const winHeight = window.innerHeight;
const winWidth = window.innerWidth;
const elTop = el.getBoundingClientRect().top;
const elRight = winWidth - el.getBoundingClientRect().right;
const elBottom = winHeight - el.getBoundingClientRect().bottom;
const elLeft = el.getBoundingClientRect().left;

console.log();

var timelineParameters = anime.timeline({
});

timelineParameters
	.add({
		targets: el,
		translateX: [
			{ value: 0 },
			{ value: (elRight - 40) },
			{ value: (elRight - 40) },
			{ value: (-elLeft + 40) },
			{ value: (-elLeft + 40) },
			{ value: 0 },
			{ value: 0 },
		],
		translateY: [
			{ value: (-elTop + 40) },
			{ value: (-elTop + 40) },
			{ value: (elBottom - 40) },
			{ value: (elBottom - 40) },
			{ value: (-elTop + 40) },
			{ value: (-elTop + 40) },
			{ value: 0 },
		],
		duration: 1500,
		easing: 'easeInOutCirc'
	}); -->








	<!-- const hi = document.querySelector('.hi');
	const hiLeft = hi.getBoundingClientRect().left;
	const elLeft = el.getBoundingClientRect().left;
	const width = (-elLeft - -hiLeft);

	console.log(width);

	var timelineParameters = anime.timeline({
	});

	timelineParameters
		.add({
			targets: el,
			translateX: [
				{ value: 0 },
				{ value: 0 },
				{ value: width },
				{ value: 0 },
				{ value: 0 },
			],
			translateY: [
				{ value: 42 },
				{ value: 42 },
				{ value: 42 },
				{ value: 42 },
				{ value: 0 },
			],
			duration: 1500,
			easing: 'easeOutBack'
		}); -->
