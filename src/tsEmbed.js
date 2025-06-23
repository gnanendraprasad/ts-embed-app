import { init, LiveboardEmbed, Action } from '@thoughtspot/visual-embed-sdk';
import { TS_HOST } from './config';

let initialized = false;

export function initThoughtSpot() {
  if (!initialized) {
    init({
      thoughtSpotHost: TS_HOST,
      authType: 'None',
    });
    initialized = true;
  }
}

export function embedViz(selector, { liveboardId, vizId, runtimeFilters = [] }) {
  initThoughtSpot();
  const embed = new LiveboardEmbed(selector, {
    liveboardId,
    vizId,
    hiddenActions: [
      Action.CopyLink,
      Action.Download,
      Action.ShowUnderlyingData,
      Action.Pin,
      Action.SpotIQAnalyze,
      Action.RenameModalTitleDescription,
      Action.SpotterFeedback,
    ],
    runtimeFilters,
  });

  embed.render();
}

export { RuntimeFilterOp } from '@thoughtspot/visual-embed-sdk';
