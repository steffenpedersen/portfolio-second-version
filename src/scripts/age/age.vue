<script>
import Vue from 'vue';
import anime from 'animejs';

export default Vue.directive('age', {
	inserted(el) {
		let ageObj = {
			ageProp: 0,
		}

		let ageAni = anime({
			targets: ageObj,
			ageProp: 27,
			easing: 'linear',
			duration: 3000,
			round: 1,
			update: function() {
				el.innerHTML = ageObj.ageProp.valueOf();
			}
		});
	},
});

</script>
