import {TransportType} from "@aspnet/signalr-client";

export const environment = {
  production: false,
  signalrTransport: TransportType.LongPolling,
  apiEndpoint: 'http://192.168.77.2:44220/api'
};
