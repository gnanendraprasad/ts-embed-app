import { Injectable } from '@angular/core';
import { init, LiveboardEmbed, Action, RuntimeFilterOp } from '@thoughtspot/visual-embed-sdk';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ThoughtspotService {
  private initialized = false;

  private initSdk() {
    if (!this.initialized) {
      init({
        thoughtSpotHost: environment.TS_HOST,
        authType: 'None'
      });
      this.initialized = true;
    }
  }

  embed(selector: HTMLElement, params: { liveboardId: string; vizId?: string; runtimeFilters?: any[] }) {
    this.initSdk();
    const embed = new LiveboardEmbed(selector, {
      liveboardId: params.liveboardId,
      vizId: params.vizId,
      hiddenActions: [
        Action.CopyLink,
        Action.Download,
        Action.ShowUnderlyingData,
        Action.Pin,
        Action.SpotIQAnalyze,
        Action.RenameModalTitleDescription,
        Action.SpotterFeedback
      ],
      runtimeFilters: params.runtimeFilters || []
    });
    embed.render();
  }
}

export { RuntimeFilterOp };
