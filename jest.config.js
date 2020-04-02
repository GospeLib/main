const path = require('path');
const { sync: glob } = require('globby');

const rootPkg = require('./package.json');
const workspaces = glob(rootPkg.workspaces.map(p => path.join(p, 'package.json')), {
	cwd: __dirname,
	absolute: true,
})
	.map(p => ({
		...require(p),
		dirname: path.dirname(p),
	}));


module.exports = {
	projects: workspaces.map(pkg => ({
		displayName: pkg.name,
		rootDir: pkg.dirname,
		transform: {
			'^.+\\.[t|j]sx?$': require.resolve('babel-jest'),
		}
	})),
};
