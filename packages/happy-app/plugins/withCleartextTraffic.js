const { withAndroidManifest } = require('@expo/config-plugins');

/**
 * Allow plaintext HTTP traffic on Android.
 *
 * Android 9 (API 28) and later default `usesCleartextTraffic` to false, so an
 * app cannot reach a self-hosted `http://<lan-ip>:3005` server -- the request
 * fails before it leaves the device, which surfaces as "failed to connect to
 * server" even though the identical URL loads fine in Chrome (the browser is a
 * separate app with its own policy).
 *
 * Expo has no top-level `android.usesCleartextTraffic` config key, so the
 * attribute is written directly onto the <application> node. iOS already gets
 * the equivalent via `NSAllowsLocalNetworking` in app.config.js.
 */
module.exports = function withCleartextTraffic(config) {
  return withAndroidManifest(config, (cfg) => {
    const application = cfg.modResults.manifest.application?.[0];
    if (!application) {
      throw new Error('withCleartextTraffic: no <application> node in AndroidManifest');
    }
    application.$['android:usesCleartextTraffic'] = 'true';
    return cfg;
  });
};
