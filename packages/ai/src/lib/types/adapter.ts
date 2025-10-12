import { GetTextRequest, GetTextResponse, ChatRequest, ChatResponse, ChatStreamResponse, GetDataRequest, GetDataResponse, GetImageRequest, GetImageResponse, GetAudioRequest, GetAudioResponse, TranscribeAudioRequest, TranscribeAudioResponse } from "./client";

export interface NativeAiAdapter {
  name(): string;

  getText?(request: GetTextRequest): Promise<GetTextResponse>;
  chat?(request: ChatRequest): Promise<ChatResponse>;
  chatStream?(request: ChatRequest): AsyncIterable<ChatStreamResponse>;
  getData?(request: GetDataRequest): Promise<GetDataResponse>;
  getImage?(request: GetImageRequest): Promise<GetImageResponse>;
  getAudio?(request: GetAudioRequest): Promise<GetAudioResponse>;
  transcribeAudio?(request: TranscribeAudioRequest): Promise<TranscribeAudioResponse>;

  raw?(): unknown; // escape hatch if needed
}