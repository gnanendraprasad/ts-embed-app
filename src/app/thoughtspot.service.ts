import { Injectable } from '@angular/core';
import { init, LiveboardEmbed, Action, RuntimeFilter } from '@thoughtspot/visual-embed-sdk';

@Injectable({ providedIn: 'root' })
export class ThoughtspotService {
  private initialized = false;
  private host = 'https://your-thoughtspot-host';

  private ensureInit(): void {
    if (!this.initialized) {
      init({ thoughtSpotHost: this.host, authType: 'None' });
      this.initialized = true;
    }
  }

  embedViz(selector: string, opts: { liveboardId: string; vizId: string; runtimeFilters?: RuntimeFilter[] }): void {
    this.ensureInit();
    const embed = new LiveboardEmbed(selector, {
      liveboardId: opts.liveboardId,
      vizId: opts.vizId,
      runtimeFilters: opts.runtimeFilters,
      hiddenActions: [
        Action.CopyLink,
        Action.Download,
        Action.ShowUnderlyingData,
        Action.Pin,
        Action.SpotIQAnalyze,
        Action.RenameModalTitleDescription,
        Action.SpotterFeedback,
      ],
    });
    embed.render();
  }
}
