<template>
	<div id="app">
		<sidebar></sidebar>
		<router-view></router-view>
	</div>
</template>

<script>
import Sidebar from '@/docs/Sidebar.vue';

export default {
	name: 'app',
	components: {
		Sidebar,
	},
};
</script>

<style lang="less">
@import '../styles/_global';

*, *:before, *:after {
  box-sizing: border-box;
}

html,
body {
	height: 100%;
}

body {
	display: flex;
	margin: 0;
	background: @lift;
	font-family: @font;
	font-size: @font-base;
	line-height: @double;
	color: @text-rgba;
}

a {
	color: @primary;

	&:hover,
	&:focus {
		color: @primary-lift;
	}

	&[disabled] {
		color: @text-light-rgba;
		cursor: not-allowed;
	}
}

#app {
	display: flex;
	align-items: stretch;
	width: 100%;
}

.pkpul-sidebar {
	flex: 0 0 15rem;
}

.pkpul-component {
	flex-grow: 2;
}
</style>
