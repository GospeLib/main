module.exports = api => ({
	presets: [
		[require.resolve('@babel/preset-env'), {
			modules: 'commonjs',
			targets: {
				...(api.env('test') ? {
					node: 'current',
				} : {
					allExtensions: true,
				}),
			},
		}],
		[require.resolve('@babel/preset-typescript'), {

		}],
	],
	plugins: [
		require.resolve('@babel/plugin-proposal-private-methods'),
		require.resolve('@babel/plugin-proposal-class-properties'),
	],
});
