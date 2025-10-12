import { NativeAiAdapter } from "../types/adapter";
import { NativeAiClient, GetTextRequest, GetTextResponse, ChatRequest, ChatResponse, ChatStreamResponse, GetDataRequest, GetDataResponse, GetImageRequest, GetImageResponse, GetAudioRequest, GetAudioResponse, TranscribeAudioRequest, TranscribeAudioResponse } from "../types/client";

export class AiClient implements NativeAiClient {

  constructor(private adapter: NativeAiAdapter) {
  }

  async getText(request: GetTextRequest): Promise<GetTextResponse> {
    const adapter = this.adapter;
    if (!adapter.getText) throw new Error(`${adapter.name()} does not support getText`);
    return adapter.getText(request);
  }

  async chat(request: ChatRequest): Promise<ChatResponse> {
    const adapter = this.adapter;
    if (!adapter.chat) throw new Error(`${adapter.name()} does not support chat`);
    return adapter.chat(request);
  }

  chatStream(request: ChatRequest): AsyncIterable<ChatStreamResponse> {
    const adapter = this.adapter;
    if (!adapter.chatStream) throw new Error(`${adapter.name()} does not support chatStream`);
    return adapter.chatStream(request);
  }

  async getData(request: GetDataRequest): Promise<GetDataResponse> {
    const adapter = this.adapter;
    if (!adapter.getData) throw new Error(`${adapter.name()} does not support getData`);
    return adapter.getData(request);
  }

  async getImage(request: GetImageRequest): Promise<GetImageResponse> {
    const adapter = this.adapter;
    if (!adapter.getImage) throw new Error(`${adapter.name()} does not support getImage`);
    return adapter.getImage(request);
  }

  async getAudio(request: GetAudioRequest): Promise<GetAudioResponse> {
    const adapter = this.adapter;
    if (!adapter.getAudio) throw new Error(`${adapter.name()} does not support getAudio`);
    return adapter.getAudio(request);
  }

  async transcribeAudio(request: TranscribeAudioRequest): Promise<TranscribeAudioResponse> {
    const adapter = this.adapter;
    if (!adapter.transcribeAudio) throw new Error(`${adapter.name()} does not support transcribeAudio`);
    return adapter.transcribeAudio(request);
  }

  getAdapterInstance(): NativeAiAdapter {
    return this.adapter;
  }
}
