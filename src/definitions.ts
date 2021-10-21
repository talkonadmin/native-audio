export interface NativeAudio {
  configure(options: ConfigureOptions): Promise<void>;
  preload(options: PreloadOptions): Promise<void>;
  play(options: { assetId: string, time?: number }): Promise<void>;
  resume(options: { assetId: string }): Promise<void>;
  loop(options: { assetId: string }): Promise<void>;
  stop(options: { assetId: string }): Promise<void>;
  unload(options: { assetId: string }): Promise<void>;
  setVolume(options: { assetId: string; volume: number }): Promise<void>;
  getCurrentTime(options: {
    assetId: string;
  }): Promise<{ currentTime: number }>;
  getDuration(options: { assetId: string }): Promise<{ duration: number }>;
}

export interface ConfigureOptions {
  fade?: boolean;
}

export interface PreloadOptions {
  assetPath: string;
  assetId: string;
  volume?: number;
  audioChannelNum?: number;
  isUrl?: boolean;
}
