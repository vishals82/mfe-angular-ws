const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "container",
    publicPath: "/mfe-angular-ws/"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "container",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/container/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
            "mfe1": "mfe1@/mfe-angular-ws/mfe1/remoteEntry.js",
            // "mfe11": "mfe1@http://localhost:3000/remoteEntry.js",
            // "mfe2": "mfe2@http://localhost:3001/remoteEntry.js",
            "mfe3": "mfe3@/mfe-angular-ws/mfe3/remoteEntry.js",
            // "mfe33": "mfe3@http://localhost:3002/remoteEntry.js",
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
